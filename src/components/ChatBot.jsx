import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const SEEN_KEY = 'bb_chat_tip_seen'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm here to help with anything about Bemade Crotchets — pieces, prices, or how commissions work." },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showTip, setShowTip] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  // Show the explainer bubble once ever, on a visitor's first visit only —
  // staggered a little later than the WhatsApp one so they don't both land at once.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(SEEN_KEY)) return
    const showTimer = setTimeout(() => setShowTip(true), 5000)
    const hideTimer = setTimeout(() => {
      setShowTip(false)
      localStorage.setItem(SEEN_KEY, 'true')
    }, 9500)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  function toggleOpen() {
    setShowTip(false)
    localStorage.setItem(SEEN_KEY, 'true')
    setOpen((v) => !v)
  }

  async function sendMessage(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply || 'Sorry, something went wrong.' }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now — try WhatsApp instead." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed right-5 z-40 flex h-[420px] w-[320px] flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl ring-1 ring-ink/10"
          style={{ bottom: 'calc(13.5rem + env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <span className="font-display text-cream">Ask us anything</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-cream/80 hover:text-cream">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 font-body text-sm ${
                  m.role === 'user' ? 'ml-auto bg-clay text-cream' : 'bg-ink/5 text-ink'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="max-w-[60%] rounded-2xl bg-ink/5 px-3 py-2 font-body text-sm text-ink-soft">Typing&hellip;</div>}
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-ink/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a piece, a price..."
              className="flex-1 rounded-full border border-ink/15 bg-transparent px-4 py-2 font-body text-sm text-ink outline-none focus:border-clay"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <div
        className="fixed right-5 z-40 flex items-center"
        style={{ bottom: 'calc(10.5rem + env(safe-area-inset-bottom))' }}
      >
        <AnimatePresence>
          {showTip && !open && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="absolute right-full top-1/2 mr-3 w-52 -translate-y-1/2 rounded-xl bg-ink px-4 py-2 font-body text-sm text-cream shadow-lg"
            >
              Ask me anything about Bemade Crotchets
              <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-ink" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleOpen}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          {/* ambient pulsing glow — stays within the button's own footprint */}
          {!open && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-ink"
              animate={{ scale: [1, 1.55, 1], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />
          )}
          <span className="relative">{open ? <X size={22} /> : <MessageSquare size={22} />}</span>
        </button>
      </div>
    </>
  )
}