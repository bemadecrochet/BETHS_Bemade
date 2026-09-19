import { Home, ShoppingBag, Heart, MessageCircle } from 'lucide-react'

const TABS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'shop', label: 'Shop', Icon: ShoppingBag },
  { id: 'about', label: 'About', Icon: Heart },
  { id: 'contact', label: 'Contact', Icon: MessageCircle },
]

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-cream/95 backdrop-blur-sm"
      aria-label="Site sections"
    >
      <ul className="mx-auto flex max-w-md items-center justify-between px-6 py-2 sm:max-w-lg sm:px-10">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id
          return (
            <li key={id} className="flex-1">
              <button
                onClick={() => onTabChange(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center gap-1 rounded-xl py-2 font-body text-xs transition-colors ${
                  isActive ? 'text-clay' : 'text-ink-soft hover:text-ink'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}