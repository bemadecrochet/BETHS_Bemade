import { motion } from 'framer-motion'

export default function Hero({ onExplore, onCommission }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-10">
      {/* soft field texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-mustard/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-body text-sm text-ink-soft"
          >
            Handmade crochet, stitched to order in small batches
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl"
          >
            Every piece begins
            <br />
            as <span className="italic text-clay">one long thread.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-md font-body text-lg leading-relaxed text-ink-soft"
          >
            Beth turns single strands of yarn into blankets, garments, and
            little woven creatures &mdash; each one worked by hand, one loop
            at a time, from a small studio table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              onClick={onExplore}
              className="rounded-full bg-ink px-7 py-3 font-body text-sm text-cream transition-transform hover:-translate-y-0.5 hover:bg-clay"
            >
              See the work
            </button>
            <button
              onClick={onCommission}
              className="font-body text-sm text-ink-soft underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:text-clay"
            >
              Commission a piece
            </button>
          </motion.div>
        </div>

        <YarnBall />
      </div>
    </section>
  )
}

function YarnBall() {
  // The unwinding yarn ball — a single spiral stroke that loosens on load,
  // and a stray thread that drifts free with a slow, looping motion.
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-sm"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <defs>
          <radialGradient id="ballShade" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#E8CB63" />
            <stop offset="100%" stopColor="#C1673F" />
          </radialGradient>
        </defs>

        {/* wound ball */}
        <motion.circle
          cx="190"
          cy="190"
          r="120"
          fill="none"
          stroke="url(#ballShade)"
          strokeWidth="10"
          strokeDasharray="6 10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '190px 190px' }}
        />
        <motion.circle
          cx="190"
          cy="190"
          r="95"
          fill="none"
          stroke="#7C8863"
          strokeWidth="8"
          strokeDasharray="4 12"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '190px 190px' }}
        />
        <circle cx="190" cy="190" r="70" fill="url(#ballShade)" opacity="0.9" />

        {/* stray, drifting thread */}
        <motion.path
          d="M 300 230 C 340 250, 350 300, 320 330 S 330 380, 370 385"
          fill="none"
          stroke="#BE8079"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{
            d: [
              'M 300 230 C 340 250, 350 300, 320 330 S 330 380, 370 385',
              'M 300 230 C 350 245, 335 305, 310 335 S 345 375, 365 392',
              'M 300 230 C 340 250, 350 300, 320 330 S 330 380, 370 385',
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}
