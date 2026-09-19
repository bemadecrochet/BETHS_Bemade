import { motion } from 'framer-motion'

// Placeholder reviews — swap in real customer quotes (and, if you have
// them, real first names) whenever Beth starts collecting feedback.
const reviews = [
  {
    quote:
      'The blanket is even softer than the photos showed, and it arrived exactly when Beth said it would. You can tell every row was done with care.',
    name: 'Amara W.',
    detail: 'Ordered the Oat Milk Throw',
    rating: 5,
  },
  {
    quote:
      'I sent a rough idea for a baby set and Beth turned it into something better than I imagined. The stitching is so even and neat.',
    name: 'Njoki K.',
    detail: 'Ordered the Clover Baby Set',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-cream-deep px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="font-body text-sm text-clay">Kind words</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            From people who&rsquo;ve worn one
          </h2>
        </div>

        <div className="grid gap-8 mx-auto max-w-3xl md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col rounded-[1.75rem] bg-cream p-8 shadow-[0_1px_0_0_rgba(43,40,32,0.06)]"
            >
              <div className="mb-4 flex gap-1 text-clay" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.2 6.1-.6L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 font-body leading-relaxed text-ink-soft">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-display text-lg text-ink">{r.name}</p>
                <p className="font-body text-sm text-ink-soft">{r.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
