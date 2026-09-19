import { useEffect, useState } from 'react'

export default function Nav({ onTabChange }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(43,40,32,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5 md:justify-start md:px-10">
        <button
          onClick={() => onTabChange('home')}
          className="font-display text-xl tracking-tight text-ink"
        >
          Bemade <span className="italic text-clay">Crotchets</span>
        </button>
      </nav>
    </header>
  )
}