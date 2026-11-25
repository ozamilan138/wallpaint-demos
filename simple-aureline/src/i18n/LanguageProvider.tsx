import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext, dictionaries, langFromPath, langPath, saveLang } from './context'
import type { Lang } from './context'

interface LanguageProviderProps {
  /** The language of the page that the browser opened. It comes from the address. */
  initialLang: Lang
  children: ReactNode
}

/** Holds the selected language. It keeps the page language, the title and the address in step with it. */
export function LanguageProvider({ initialLang, children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = dictionaries[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    saveLang(next)
    // Go to the address of the new language, so that a copied link opens in the same language.
    window.history.pushState(null, '', `${langPath(next)}${window.location.hash}`)
  }, [])

  // The Back and Forward buttons of the browser can change the address, so read the language from it again.
  useEffect(() => {
    const onPopState = () => setLangState(langFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
  }, [lang, t])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
