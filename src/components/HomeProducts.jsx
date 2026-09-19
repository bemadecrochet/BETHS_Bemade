import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function HomeProducts({ onViewAll }) {
  return (
    <section className="relative px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="font-body text-sm text-clay">Fresh off the hook</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              A few pieces to start with
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="hidden shrink-0 font-body text-sm text-ink-soft underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:text-clay sm:inline-block"
          >
            View full shop &rarr;
          </button>
        </div>

        {/* horizontally scrollable row — snaps per card, works with touch/trackpad */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              index={i}
              className="w-64 shrink-0 snap-start sm:w-72"
            />
          ))}
        </div>

        <motion.button
          onClick={onViewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 w-full rounded-full bg-ink px-7 py-3 text-center font-body text-sm text-cream transition-transform hover:-translate-y-0.5 hover:bg-clay sm:hidden"
        >
          View full shop
        </motion.button>
      </div>
    </section>
  )
}