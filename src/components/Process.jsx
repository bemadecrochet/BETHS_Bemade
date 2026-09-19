import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Choose your yarn',
    body: 'Pick a colour story from the shade cards, or send a swatch you already love and we&rsquo;ll match it.',
  },
  {
    n: '02',
    title: 'Pick a pattern',
    body: 'Work from an existing design or describe what you have in mind &mdash; sizes and shapes flex to fit you.',
  },
  {
    n: '03',
    title: 'It gets hooked, slowly',
    body: 'Every piece is stitched by hand over one to three weeks, depending on size and detail.',
  },
  {
    n: '04',
    title: 'Blocked, finished, sent',
    body: 'A final steam-block sets the shape before it&rsquo;s wrapped in tissue and posted to you.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-cream-deep px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="font-body text-sm text-clay">How a piece is made</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
          From skein to finished piece
        </h2>

        <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-ink/15 pt-6"
            >
              <span className="font-display text-lg text-clay">{s.n}</span>
              <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
              <p
                className="mt-3 font-body text-sm leading-relaxed text-ink-soft"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
