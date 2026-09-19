import { motion } from 'framer-motion'

// Real crochet photos (Unsplash License, free to use) as stand-ins for
// Beth's actual finished pieces — replace each `img` with a photo of the
// real piece whenever you have one; the shape/caption can stay the same.
const works = [
  {
    title: 'Oat Milk Throw',
    tag: 'Blanket',
    img: 'https://images.unsplash.com/photo-1780531851920-6bdffa7f9432?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-mustard',
  },
  {
    title: 'Marigold Cardigan',
    tag: 'Wearable',
    img: 'https://images.unsplash.com/photo-1782576417438-d8facd37fe2d?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-clay',
  },
  {
    title: 'Granny Square Tote',
    tag: 'Accessory',
    img: 'https://images.unsplash.com/photo-1782576417399-9be4e62405eb?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-sage',
  },
  {
    title: 'Little Sprout',
    tag: 'Amigurumi',
    img: 'https://images.unsplash.com/photo-1776992026037-98e0eff3a9a7?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-rose',
  },
  {
    title: 'Doily Runner',
    tag: 'Home',
    img: 'https://images.unsplash.com/photo-1772445693242-c176fe7296b7?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-mustard',
  },
  {
    title: 'Clover Baby Set',
    tag: 'Wearable',
    img: 'https://images.unsplash.com/photo-1782576417411-4d39ea018066?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-sage',
  },
]

export default function Gallery({ onCommission }) {
  return (
    <section id="gallery" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-body text-sm text-clay">Recent work</span>
            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
              Where the thread has been
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            A running record of what&rsquo;s come off the hook lately &mdash;
            most pieces are one-of-a-kind and won&rsquo;t be repeated.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <WorkCard key={w.title} work={w} index={i} onCommission={onCommission} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work, index, onCommission }) {
  return (
    <motion.button
      onClick={onCommission}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group relative block w-full overflow-hidden rounded-[1.75rem] bg-ink/5 text-left"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={work.img}
          alt={work.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-6 pt-16">
        <span className={`inline-block rounded-full ${work.accent} px-3 py-1 font-body text-xs text-ink`}>
          {work.tag}
        </span>
        <h3 className="mt-3 font-display text-xl text-cream">{work.title}</h3>
      </div>
    </motion.button>
  )
}
