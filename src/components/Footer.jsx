export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-body text-sm text-ink-soft md:flex-row">
        <span className="font-display text-lg text-ink">
          Beth&rsquo;s <span className="italic text-clay">Bloom</span>
        </span>
        <p>Made by hand, one loop at a time.</p>
        <p>&copy; {new Date().getFullYear()} Beth&rsquo;s Bloom</p>
      </div>
    </footer>
  )
}
