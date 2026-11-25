import { languages, switchLabels, useLanguage, dictionaries } from '../i18n/context'

interface LanguageSwitchProps {
  className?: string
}

/** Three buttons: EN, हिंदी, ગુજરાતી. Each label is in its own language, so a visitor can find their language. Phones show short labels. */
export function LanguageSwitch({ className = '' }: LanguageSwitchProps) {
  const { lang, t, setLang } = useLanguage()
  return (
    <div role="group" aria-label={t.language} className={`flex items-center border border-ink/15 p-0.5 ${className}`}>
      {languages.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={dictionaries[code].langName}
            onClick={() => setLang(code)}
            className={`h-9 min-w-[38px] px-2 text-[14px] font-medium leading-none transition-colors sm:px-3 ${
              active ? 'bg-night text-paper' : 'text-muted hover:bg-linen hover:text-ink'
            }`}
          >
            <span className="sm:hidden">{switchLabels[code].short}</span>
            <span className="hidden sm:inline">{switchLabels[code].full}</span>
          </button>
        )
      })}
    </div>
  )
}
