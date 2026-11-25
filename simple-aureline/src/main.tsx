import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { langFromPath } from './i18n/context'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App initialLang={langFromPath(window.location.pathname)} />
  </StrictMode>
)

// The production build has the page HTML already (see scripts/build.mjs). The development server does not.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
