import { Info } from 'lucide-react'

/** The note that screen colours are approximate. */
export function ColourNotice({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 rounded-2xl bg-beige-soft p-4 text-[15px] leading-relaxed text-ink ${className}`}>
      <Info className="mt-0.5 size-5 shrink-0 text-terracotta-deep" aria-hidden />
      <p>
        <strong className="font-semibold">Colours on screen are approximate.</strong> Screen brightness can change
        how a colour looks, and so can the light in your room. Test real paint samples on your wall before you
        choose.
      </p>
    </div>
  )
}
