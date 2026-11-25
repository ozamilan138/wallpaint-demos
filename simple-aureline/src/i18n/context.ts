import { createContext, useContext } from 'react'
import { en } from './en'
import { hi } from './hi'
import { gu } from './gu'
import type { Strings } from './en'

export const languages = ['en', 'hi', 'gu'] as const
export type Lang = (typeof languages)[number]

export const dictionaries: Record<Lang, Strings> = { en, hi, gu }

/** Labels for the language switch: a full label for wide screens and a short label for phones. */
export const switchLabels: Record<Lang, { full: string; short: string }> = {
  en: { full: 'EN', short: 'EN' },
  hi: { full: 'हिंदी', short: 'हिं' },
  gu: { full: 'ગુજરાતી', short: 'ગુ' },
}

// The inline script in index.html reads the same key. Change both together.
const STORAGE_KEY = 'lang'

const isLang = (value: string | null | undefined): value is Lang => languages.includes(value as Lang)

/** The folder of each language page: "" for English, "hi/" for Hindi and "gu/" for Gujarati. */
export const langDir = (lang: Lang) => (lang === 'en' ? '' : `${lang}/`)

/** The full path of a language page, for example "/wallpaint-demos/simple-aureline/gu/". */
export const langPath = (lang: Lang) => `${import.meta.env.BASE_URL}${langDir(lang)}`

/**
 * The address of the page gives the language: ".../hi/" is Hindi, ".../gu/" is Gujarati, and all other pages are English.
 * Each language has its own page, so that search engines can find and show all three.
 * On the English page, the inline script in index.html can first send a visitor to their language page.
 */
export function langFromPath(pathname: string): Lang {
  const base = import.meta.env.BASE_URL
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '')
  const first = rest.split('/')[0]
  return isLang(first) ? first : 'en'
}

export function saveLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // The choice still applies to this visit.
  }
}

interface LanguageContextValue {
  lang: Lang
  t: Strings
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}
