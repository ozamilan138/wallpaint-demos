/**
 * The production build.
 *
 * 1. Vite builds the page for the browser.
 * 2. Vite builds src/entry-server.tsx for Node.
 * 3. This script makes one HTML page for each language (/, /hi/, /gu/) with the full text,
 *    and it writes sitemap.xml and robots.txt.
 *
 * Search engines can then read the text of each page without JavaScript.
 * The deploy workflow passes --base and --outDir. Both are optional.
 */
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** Reads "--name value" or "--name=value" from the command line. */
function option(name) {
  const args = process.argv.slice(2)
  for (let i = 0; i < args.length; i++) {
    if (args[i] === `--${name}`) return args[i + 1]
    if (args[i].startsWith(`--${name}=`)) return args[i].slice(name.length + 3)
  }
  return undefined
}

const base = option('base') ?? '/'
const outDir = resolve(root, option('outDir') ?? 'dist')
const ssrDir = join(root, 'node_modules', '.cache', 'ssr-build')

await build({ root, base, build: { outDir, emptyOutDir: true } })
await build({
  root,
  base,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: ssrDir, emptyOutDir: true },
})

const entry = (await readdir(ssrDir)).find((name) => /^entry-server\.m?js$/.test(name))
if (!entry) throw new Error(`The server build has no entry-server file in ${ssrDir}`)
const server = await import(pathToFileURL(join(ssrDir, entry)).href)

const template = await readFile(join(outDir, 'index.html'), 'utf8')
for (const lang of server.languages) {
  const dir = join(outDir, server.langDir(lang))
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), server.renderPage(template, lang))
  console.log(`page: ${server.pageUrl(lang)}`)
}

await writeFile(join(outDir, 'sitemap.xml'), server.sitemap())
await writeFile(join(outDir, 'robots.txt'), server.robots())
await rm(ssrDir, { recursive: true, force: true })
console.log('sitemap.xml and robots.txt: done')
