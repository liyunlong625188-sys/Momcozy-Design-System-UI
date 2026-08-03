import { useEffect, useState } from 'react'
import { Icon } from './ui/icon'
import {
  ToolbarTopSheet,
  type ToolbarTopSheetVariant,
} from './ui/toolbar-top-sheet'
import './toolbar-top-sheet-showcase.css'

type ThemeMode = 'light' | 'dark'

const variants: readonly ToolbarTopSheetVariant[] = [
  'large-title',
  'large-title-two-line',
  'compact-default',
]

function initialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return 'light'
}

export function ToolbarTopSheetShowcase() {
  const [theme, setTheme] = useState<ThemeMode>(initialTheme)

  useEffect(() => {
    window.localStorage.setItem('momcozy-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme

    return () => {
      document.documentElement.classList.remove('dark')
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <main className="toolbar-sheet-showcase">
      <div className="toolbar-sheet-showcase__header">
        <div>
          <a href="/demos">Momcozy Design System</a>
          <h1>Toolbar Top Sheet</h1>
          <p>Figma node 1837:21789 · 3 responsive variants</p>
        </div>
        <button
          className="toolbar-sheet-showcase__theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} mode`}
          onClick={() => setTheme(nextTheme)}
        >
          <Icon
            aria-hidden="true"
            name={theme === 'light' ? 'themeMoon' : 'themeSun'}
            size={20}
            strokeWidth={2}
          />
        </button>
      </div>

      <section
        className="toolbar-sheet-showcase__canvas"
        aria-label="Toolbar Top Sheet variants"
      >
        {variants.map((variant) => (
          <ToolbarTopSheet key={variant} variant={variant} />
        ))}
      </section>
    </main>
  )
}
