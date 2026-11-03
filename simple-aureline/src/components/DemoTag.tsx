interface DemoTagProps {
  label?: string
  className?: string
}

/** A small label that marks a photograph as sample content. Remove it when real photos replace the samples. */
export function DemoTag({ label = 'Sample image', className = '' }: DemoTagProps) {
  return (
    <span className={`pointer-events-none absolute z-10 bg-paper/90 px-2.5 py-1 text-[13px] font-medium text-ink ${className}`}>
      {label}
    </span>
  )
}
