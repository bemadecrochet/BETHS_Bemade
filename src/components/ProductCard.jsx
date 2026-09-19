import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Plus } from 'lucide-react'
import { formatKES } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index = 0, className = '' }) {
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  function handleAdd() {
    addToCart(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className={`group relative overflow-hidden rounded-[1.75rem] bg-ink/5 ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-5 pt-16">
        <span className={`inline-block rounded-full ${product.accent} px-3 py-1 font-body text-xs text-ink`}>
          {product.tag}
        </span>
        <h3 className="mt-3 font-display text-xl text-cream">{product.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-body text-sm font-medium text-cream">{formatKES(product.price)}</span>
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.title} to cart`}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 font-body text-xs transition-colors ${
              justAdded ? 'bg-sage text-ink' : 'bg-cream text-ink hover:bg-clay hover:text-cream'
            }`}
          >
            {justAdded ? (
              <>
                <Check size={14} /> Added
              </>
            ) : (
              <>
                <Plus size={14} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}