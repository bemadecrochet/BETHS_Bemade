import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-body text-sm text-clay">Shop the collection</span>
            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
              Where the thread has been
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            Add a piece to your cart, or reach out for a custom colour or size
            &mdash; most pieces are one-of-a-kind and won&rsquo;t be repeated.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}