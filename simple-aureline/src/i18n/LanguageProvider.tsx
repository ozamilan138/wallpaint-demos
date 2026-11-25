import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext, dictionaries, initialLang, saveLang } from './context'
import type { Lang } from './context'

/** Holds the selected language and keeps the page language, the title and the link in step with it. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = dictionaries[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    saveLang(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    // Keep ?lang= in the address, so that a copied link opens in the same language.
    const url = new URL(window.location.href)
    if (lang === 'en') url.searchParams.delete('lang')
    else url.searchParams.set('lang', lang)
    window.history.replaceState(window.history.state, '', url)
  }, [lang, t])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
