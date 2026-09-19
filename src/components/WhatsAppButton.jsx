import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phone = '254742901984'
  const message = encodeURIComponent("Hi Beth! I'd love to ask about a crochet piece.")
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const cycle = () => {
      setShowTip(true)
      setTimeout(() => setShowTip(false), 3500)
    }
    const first = setTimeout(cycle, 2000) // first nudge shortly after load
    const interval = setInterval(cycle, 9000)
    return () => {
      clearTimeout(first)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className="fixed right-5 z-40"
      style={{ bottom: 'calc(6rem + env(safe-area-inset-bottom))' }}
    >
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-xl bg-ink px-4 py-2 font-body text-sm text-cream shadow-lg"
          >
            Contact us, we&rsquo;re ready for you
            <span className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-ink" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.878 6.598L3 29l7.086-2.328A12.44 12.44 0 0 0 16.001 28C22.906 28 28.5 22.404 28.5 15.5S22.906 3 16.001 3Zm0 22.75a10.2 10.2 0 0 1-5.204-1.428l-.373-.222-4.206 1.382 1.4-4.1-.243-.386A10.19 10.19 0 0 1 5.75 15.5c0-5.66 4.59-10.25 10.251-10.25S26.25 9.84 26.25 15.5 21.662 25.75 16.001 25.75Zm5.61-7.64c-.307-.154-1.816-.896-2.098-.998-.281-.103-.486-.154-.691.153-.204.307-.793.998-.972 1.203-.179.205-.358.23-.665.077-.307-.154-1.297-.478-2.47-1.523-.913-.814-1.53-1.82-1.709-2.127-.179-.307-.019-.473.135-.626.138-.138.307-.358.46-.537.154-.18.205-.307.307-.512.103-.205.052-.384-.026-.538-.077-.154-.69-1.664-.946-2.28-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.538.077-.819.384-.281.307-1.074 1.05-1.074 2.56s1.1 2.97 1.253 3.174c.154.205 2.165 3.306 5.246 4.636.733.316 1.305.505 1.751.647.735.234 1.404.201 1.933.122.59-.088 1.816-.742 2.072-1.459.256-.717.256-1.331.179-1.459-.077-.128-.281-.205-.588-.359Z" />
        </svg>
      </a>
    </div>
  )
}