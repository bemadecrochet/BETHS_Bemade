import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Nav({ onTabChange }) {
  const [scrolled, setScrolled] = useState(false)
  const { totalItems, openCart } = useCart()

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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <div className="w-10 md:hidden" aria-hidden="true" />

        <button
          onClick={() => onTabChange('home')}
          className="font-display text-xl tracking-tight text-ink"
        >
          Bemade <span className="italic text-clay">Crotchets</span>
        </button>

        <button
          onClick={openCart}
          aria-label="Open cart"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-clay"
        >
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-clay font-body text-[11px] text-cream">
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
        </button>
      </nav>
    </header>
  )
}