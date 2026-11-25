/**
 * Settings for search engines.
 *
 * siteUrl is the public address of the home page. It must end with "/".
 * When the site moves to its own domain, change siteUrl, and change --base in .github/workflows/pages.yml.
 */
export const siteUrl = 'https://ozamilan138.github.io/wallpaint-demos/simple-aureline/'

/**
 * The code from Google Search Console, for the "HTML tag" method of verification.
 * Put only the value of content="…" here. When it is empty, the page has no verification tag.
 */
export const googleSiteVerification = ''

/** The language and the country of each page, in the format that link previews use. */
export const ogLocale = { en: 'en_IN', hi: 'hi_IN', gu: 'gu_IN' } as const
