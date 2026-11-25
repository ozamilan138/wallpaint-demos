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

const STORAGE_KEY = 'lang'

const isLang = (value: string | null | undefined): value is Lang => languages.includes(value as Lang)

/**
 * The first language comes from, in this order:
 * 1. the link, for example ?lang=gu,
 * 2. the last choice on this device,
 * 3. the language of the phone or the browser,
 * 4. English.
 */
export function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // Storage can be blocked, for example in a private window.
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLang(base)) return base
  }
  return 'en'
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
