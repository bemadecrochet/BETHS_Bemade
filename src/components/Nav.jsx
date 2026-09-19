import { useEffect, useState } from 'react'
import { Home, ShoppingBag, Heart, MessageCircle } from 'lucide-react'

const TABS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'shop', label: 'Shop', Icon: ShoppingBag },
  { id: 'about', label: 'About', Icon: Heart },
  { id: 'contact', label: 'Contact', Icon: MessageCircle },
]

export default function Nav({ activeTab, onTabChange }) {
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => onTabChange('home')}
          className="font-display text-xl tracking-tight text-ink"
        >
          Bemade <span className="italic text-clay">Crotchets</span>
        </button>

        <ul className="flex items-center gap-1 rounded-full bg-ink/5 p-1 md:gap-2">
          {TABS.map(({ id, label, Icon }) => {
            const isActive = activeTab === id
            return (
              <li key={id}>
                <button
                  onClick={() => onTabChange(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 font-body text-sm transition-colors md:px-4 ${
                    isActive
                      ? 'bg-ink text-cream'
                      : 'text-ink-soft hover:text-clay'
                  }`}
                >
                  <Icon size={16} strokeWidth={2} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
