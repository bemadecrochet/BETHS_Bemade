import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl leading-tight text-ink md:text-6xl"
        >
          Have something in mind?
          <br />
          <span className="italic text-clay">Let&rsquo;s hook it up.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-md font-body text-ink-soft"
        >
          Commissions open a few slots a month. Tell us the piece, the
          colours, and who it&rsquo;s for.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 flex max-w-md flex-col gap-4 text-left"
        >
          <label className="font-body text-sm text-ink-soft">
            Your name
            <input
              type="text"
              placeholder="Amara Wanjiru"
              className="mt-2 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 font-body text-ink outline-none transition-colors focus:border-clay"
            />
          </label>
          <label className="font-body text-sm text-ink-soft">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 font-body text-ink outline-none transition-colors focus:border-clay"
            />
          </label>
          <label className="font-body text-sm text-ink-soft">
            What are you dreaming up?
            <textarea
              rows={4}
              placeholder="A moss-green blanket for a new nursery&hellip;"
              className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-transparent px-4 py-3 font-body text-ink outline-none transition-colors focus:border-clay"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-ink px-7 py-3 font-body text-sm text-cream transition-transform hover:-translate-y-0.5 hover:bg-clay"
          >
            Send the idea
          </button>
        </motion.form>
      </div>
    </section>
  )
}
