import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem]"
          >
            {/* Real Unsplash photo (Alex Preusser, Unsplash License) as a
                stand-in — swap for a real photo of Beth's workspace/hands
                whenever you have one. */}
            <img
              src="https://images.unsplash.com/photo-1693326873444-d7cf33cad3e0?fm=jpg&q=70&w=900&fit=crop"
              alt="A crochet project in progress, yarn and hook mid-stitch"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-body text-sm text-clay">The maker</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Beth learned to crochet at her grandmother&rsquo;s kitchen
              table &mdash; and never really left it.
            </h2>
            <p className="mt-6 font-body leading-relaxed text-ink-soft">
              What started as a way to use up leftover wool turned into a
              small, steady practice: soft blankets for new babies, cardigans
              worked in slow evening sessions, and the odd amigurumi creature
              made just to make someone laugh. Nothing here is mass-produced.
              Every order is hooked by hand, one stitch after the last, until
              the thread becomes something you can wrap around yourself.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              <Stat number="120+" label="pieces stitched" />
              <Stat number="6" label="years at the hook" />
              <Stat number="100%" label="made to order" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-display text-2xl text-clay">{number}</p>
      <p className="mt-1 font-body text-sm text-ink-soft">{label}</p>
    </div>
  )
}
