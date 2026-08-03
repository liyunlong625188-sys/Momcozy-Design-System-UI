import { useEffect, useState } from 'react'
import { Icon } from './ui/icon'
import { ToolbarTop, type ToolbarTopVariant } from './ui/toolbar-top'
import './toolbar-top-showcase.css'

type ThemeMode = 'light' | 'dark'

const variants: Array<{ variant: ToolbarTopVariant; label: string }> = [
  { variant: 'home', label: 'Home' },
  { variant: 'community', label: 'Community' },
  { variant: 'segmented-control', label: 'Segmented Control' },
  { variant: 'title-one-line-left', label: 'Title 1 Line Left' },
  { variant: 'title-two-line-left', label: 'Title 2 Line Left' },
  { variant: 'title-one-line', label: 'Title 1 Line' },
  { variant: 'title-two-line', label: 'Title 2 Line' },
  { variant: 'no-title', label: 'NoTitle' },
  { variant: 'device', label: 'Device' },
]

function initialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return 'light'
}

export function ToolbarTopShowcase() {
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
    <main className="toolbar-showcase">
      <div className="toolbar-showcase__header">
        <div>
          <a href="/demos">Momcozy Design System</a>
          <h1>Toolbar Top</h1>
          <p>Figma node 1688:25165 · 9 responsive variants</p>
        </div>
        <button
          className="toolbar-showcase__theme-toggle"
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

      <section className="toolbar-showcase__canvas" aria-label="Toolbar Top variants">
        {variants.map(({ variant, label }) => (
          <div className="toolbar-showcase__row" key={variant}>
            <span className="toolbar-showcase__label">{label}</span>
            <ToolbarTop variant={variant} />
          </div>
        ))}
      </section>
    </main>
  )
}
