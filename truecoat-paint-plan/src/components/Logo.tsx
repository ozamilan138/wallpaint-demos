import { business } from '../config/business'

/** The wordmark: a small paint strip and the business name. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span aria-hidden="true" className="grid h-8 w-7 shrink-0 grid-rows-4 overflow-hidden rounded-[4px]">
        <span className="bg-sage-deep" />
        <span className="bg-sage" />
        <span className="bg-beige" />
        <span className="bg-terracotta" />
      </span>
      <span className={`font-heading text-[1.0625rem] font-extrabold leading-none tracking-[-0.02em] ${light ? 'text-paper' : 'text-ink'}`}>
        {business.shortName}
        <span className={`block pt-0.5 font-ui text-[0.8125rem] font-medium tracking-normal ${light ? 'text-sage-soft' : 'text-muted'}`}>
          Painting Co.
        </span>
      </span>
    </span>
  )
}
