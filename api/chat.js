// api/chat.js — Vercel serverless function.
// Keeps the Groq API key on the server; the browser never sees it.

// ─────────────────────────────────────────────────────────────
// EDIT THIS SECTION — everything the bot knows and its ground rules.
// Update prices, pieces, turnaround times, and policies here any time.
// ─────────────────────────────────────────────────────────────
const SHOP_INFO = {
  pieces: [
    { name: 'Oat Milk Throw', category: 'Blanket', priceKES: 4500, turnaround: '2-3 weeks' },
    { name: 'Marigold Cardigan', category: 'Wearable', priceKES: 6000, turnaround: '2-3 weeks' },
    { name: 'Granny Square Tote', category: 'Accessory', priceKES: 2200, turnaround: '1 week' },
    { name: 'Little Sprout', category: 'Amigurumi', priceKES: 1500, turnaround: '3-5 days' },
    { name: 'Doily Runner', category: 'Home', priceKES: 1800, turnaround: '1 week' },
    { name: 'Clover Baby Set', category: 'Wearable', priceKES: 3500, turnaround: '1-2 weeks' },
  ],
  shipping: 'We ship anywhere in Kenya via courier, usually 2-4 days after a piece is finished. Nairobi pickup is also available.',
  payment: 'M-Pesa is preferred. A 50% deposit is required to start a commission, with the balance due before shipping.',
  policies: [
    'Custom colours and sizes are welcome on most pieces — just describe what you have in mind.',
    'No returns on custom/commissioned work since each piece is made specifically for that order.',
    'Ready-made pieces (when in stock) can be returned within 7 days if unused.',
  ],
  // Things the bot should NOT do — add to this list any time.
  boundaries: [
    'Never make up a price that is not listed above — if asked about something not listed, say you will check with Beth and share the WhatsApp number.',
    'Never promise a turnaround time shorter than what is listed.',
    'Do not discuss topics unrelated to Bemade Crotchets (e.g. general chit-chat, other businesses).',
  ],
  More: [
    'Feel free to ask about any of our pieces, their availability, or the ordering process.',
    'Bemade brings your inspo and fashion design to life. Always give the customer a good compliments; those you can.',
    'LOOk and  see what fits BetweenVerticalStart; but lovely compliments are highly encouraged.',
    
  ]
}

const WHATSAPP_NUMBER = '254742901984'

function buildSystemPrompt() {
  const pieceLines = SHOP_INFO.pieces
    .map((p) => `- ${p.name} (${p.category}): KES ${p.priceKES}, turnaround ${p.turnaround}`)
    .join('\n')

  return `You are the friendly shop assistant for Bemade Crotchets, a small handmade crochet business.
Speak warmly and briefly — a sentence or two per reply, like a helpful text message, not an essay.

Current pieces, prices (KES), and turnaround:
${pieceLines}

Shipping: ${SHOP_INFO.shipping}
Payment: ${SHOP_INFO.payment}

Policies:
${SHOP_INFO.policies.map((p) => `- ${p}`).join('\n')}

Rules you must follow:
${SHOP_INFO.boundaries.map((b) => `- ${b}`).join('\n')}

If someone wants to place an order or needs a human, point them to WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body || {}
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' })
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: buildSystemPrompt() }, ...messages],
        temperature: 0.5,
        max_tokens: 300,
      }),
    })

    if (!groqRes.ok) {
      const errText = await groqRes.text()
      console.error('Groq error:', errText)
      return res.status(502).json({ error: 'Chat service unavailable' })
    }

    const data = await groqRes.json()
    const reply = data.choices?.[0]?.message?.content || "Sorry, I didn't catch that — could you try again?"
    return res.status(200).json({ reply })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}