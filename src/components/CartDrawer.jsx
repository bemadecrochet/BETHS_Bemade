import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatKES } from '../data/products'

const WHATSAPP_NUMBER = '254742901984'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeFromCart, totalPrice } = useCart()

  function checkoutMessage() {
    const lines = items.map((i) => `- ${i.title} x${i.qty} (${formatKES(i.price * i.qty)})`)
    const text = [
      "Hi Beth! I'd like to order:",
      ...lines,
      '',
      `Total: ${formatKES(totalPrice)}`,
    ].join('\n')
    return encodeURIComponent(text)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-cream shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="flex items-center gap-2 font-display text-xl text-ink">
                <ShoppingBag size={20} /> Your cart
              </h2>
              <button onClick={closeCart} aria-label="Close cart" className="text-ink-soft hover:text-ink">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <p className="mt-12 text-center font-body text-sm text-ink-soft">
                  Your cart is empty — pieces you add will show up here, even if you come back later.
                </p>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-ink/5">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-body text-sm font-medium text-ink">{item.title}</p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.title}`}
                            className="text-ink-soft hover:text-clay"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-ink/15 px-2 py-1">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              aria-label="Decrease quantity"
                              className="text-ink-soft hover:text-ink"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-4 text-center font-body text-xs text-ink">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              aria-label="Increase quantity"
                              className="text-ink-soft hover:text-ink"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="font-body text-sm text-ink-soft">{formatKES(item.price * item.qty)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-ink/10 px-6 py-5">
                <div className="mb-4 flex items-center justify-between font-body">
                  <span className="text-ink-soft">Total</span>
                  <span className="text-lg font-medium text-ink">{formatKES(totalPrice)}</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${checkoutMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-3 font-body text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  Checkout via WhatsApp
                </a>
                <p className="mt-3 text-center font-body text-xs text-ink-soft">
                  We&rsquo;ll confirm details and payment (M-Pesa) over WhatsApp.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}