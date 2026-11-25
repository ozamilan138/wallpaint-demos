/**
 * The build runs this file in Node (see scripts/build.mjs). It is not part of the page that the browser loads.
 * It makes one HTML page for each language, with the full text and the tags for search engines.
 * Search engines can then read each page without JavaScript.
 */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { business } from './config/business'
import { googleSiteVerification, ogLocale, siteUrl } from './config/site'
import { dictionaries, langDir, languages } from './i18n/context'
import type { Lang } from './i18n/context'

export { languages, langDir }

/** The full public address of a language page. */
export const pageUrl = (lang: Lang) => `${siteUrl}${langDir(lang)}`

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const digits = (value: string) => value.replace(/\D/g, '')

/** The business data for search engines (schema.org). Google shows some of it, for example the name and the phone. */
function structuredData(lang: Lang) {
  const t = dictionaries[lang]
  const sameAs = Object.values(business.social).filter(Boolean)
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HousePainter',
        '@id': `${siteUrl}#business`,
        name: business.name,
        alternateName: languages.filter((code) => code !== 'en').map((code) => dictionaries[code].businessName),
        description: dictionaries.en.description,
        url: siteUrl,
        ...(business.phone && { telephone: `+${digits(business.phone)}` }),
        ...(business.email && { email: business.email }),
        image: `${siteUrl}og-image.png`,
        logo: `${siteUrl}apple-touch-icon.png`,
        // The business visits customers, so the data gives only the town and no street address.
        address: {
          '@type': 'PostalAddress',
          addressLocality: business.address.locality,
          addressRegion: business.address.region,
          addressCountry: business.address.country,
        },
        areaServed: business.serviceLocations.map(({ name, link }) => ({ '@type': 'City', name, ...(link && { sameAs: link }) })),
        knowsLanguage: [...languages],
        // The services, in English on every page, because all three pages describe the same business.
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: dictionaries.en.services.title,
          itemListElement: dictionaries.en.services.items.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              areaServed: business.serviceLocations.map(({ name }) => name),
            },
          })),
        },
        ...(sameAs.length > 0 && { sameAs }),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: business.name,
        alternateName: languages.filter((code) => code !== 'en').map((code) => dictionaries[code].businessName),
        inLanguage: [...languages],
        publisher: { '@id': `${siteUrl}#business` },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl(lang)}#page`,
        url: pageUrl(lang),
        name: t.meta.title,
        description: t.meta.description(business.phone),
        inLanguage: lang,
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': `${siteUrl}#business` },
      },
    ],
  }
  // "<" is escaped, so that no text in the data can close the script tag.
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** The tags in <head> for one language page. */
function headTags(lang: Lang) {
  const t = dictionaries[lang]
  const description = t.meta.description(business.phone)
  const image = `${siteUrl}og-image.png`
  const tags = [
    `<link rel="canonical" href="${pageUrl(lang)}" />`,
    // Each page names all the language versions, so that Google shows the correct one to each visitor.
    ...languages.map((code) => `<link rel="alternate" hreflang="${code}" href="${pageUrl(code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('en')}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(business.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(t.meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${pageUrl(lang)}" />`,
    `<meta property="og:locale" content="${ogLocale[lang]}" />`,
    ...languages.filter((code) => code !== lang).map((code) => `<meta property="og:locale:alternate" content="${ogLocale[code]}" />`),
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(t.meta.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...(googleSiteVerification ? [`<meta name="google-site-verification" content="${escapeHtml(googleSiteVerification)}" />`] : []),
    `<script type="application/ld+json">${structuredData(lang)}</script>`,
  ]
  return tags.join('\n    ')
}

/** Replaces one part of the template. It stops the build if the part is not there, so that no page is made without it. */
function replaceOnce(html: string, pattern: RegExp | string, value: string) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html)
  if (!found) throw new Error(`The template in index.html has no ${String(pattern)}`)
  return html.replace(pattern, () => value)
}

/** Makes the complete HTML page for one language from the built index.html. */
export function renderPage(template: string, lang: Lang) {
  const t = dictionaries[lang]
  const app = renderToString(
    <StrictMode>
      <App initialLang={lang} />
    </StrictMode>,
  )
  let html = template
  html = replaceOnce(html, /<html lang="[^"]*">/, `<html lang="${lang}">`)
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escapeHtml(t.meta.title)}</title>`)
  html = replaceOnce(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(t.meta.description(business.phone))}" />`,
  )
  html = replaceOnce(html, '<!--seo-tags-->', headTags(lang))
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${app}</div>`)
  return html
}

/**
 * The list of pages for search engines, with the language versions of each page.
 * It has no <lastmod>: Google uses that date only if it shows a real change of content, and the build date does not.
 */
export function sitemap() {
  const alternates = languages
    .map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${pageUrl(code)}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('en')}" />`)
    .join('\n')
  const urls = languages
    .map((lang) => `  <url>\n    <loc>${pageUrl(lang)}</loc>\n${alternates}\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

/** Search engines read robots.txt only at the root of a domain. This file starts to work when the site has its own domain. */
export function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml
`
}
