import { Check } from 'lucide-react'

/** A visible "Selected" mark, so that the selection does not depend on colour alone. */
export function SelectedBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`font-ui inline-flex items-center gap-1 rounded-full bg-green px-2.5 py-1 text-[13px] font-semibold text-white ${className}`}>
      <Check className="size-3.5" strokeWidth={3} aria-hidden />
      Selected
    </span>
  )
}
