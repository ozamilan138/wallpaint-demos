import type { MouseEvent } from 'react'
import { languages, switchLabels, useLanguage, dictionaries, langPath } from '../i18n/context'
import type { Lang } from '../i18n/context'

interface LanguageSwitchProps {
  className?: string
}

/**
 * Three links: EN, हिंदी, ગુજરાતી. Each label is in its own language, so a visitor can find their language.
 * They are real links to the page of each language, so search engines can find all three pages.
 * Phones show short labels.
 */
export function LanguageSwitch({ className = '' }: LanguageSwitchProps) {
  const { lang, t, setLang } = useLanguage()

  const onClick = (event: MouseEvent<HTMLAnchorElement>, code: Lang) => {
    // Let the browser open a new tab or window when the visitor asks for it.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (code !== lang) setLang(code)
  }

  return (
    <div role="group" aria-label={t.language} className={`flex items-center border border-ink/15 p-0.5 ${className}`}>
      {languages.map((code) => {
        const active = code === lang
        return (
          <a
            key={code}
            href={langPath(code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? 'page' : undefined}
            aria-label={dictionaries[code].langName}
            onClick={(event) => onClick(event, code)}
            className={`inline-flex h-9 min-w-[38px] items-center justify-center px-2 text-[14px] font-medium leading-none transition-colors sm:px-3 ${
              active ? 'bg-night text-paper' : 'text-muted hover:bg-linen hover:text-ink'
            }`}
          >
            <span className="sm:hidden">{switchLabels[code].short}</span>
            <span className="hidden sm:inline">{switchLabels[code].full}</span>
          </a>
        )
      })}
    </div>
  )
}
