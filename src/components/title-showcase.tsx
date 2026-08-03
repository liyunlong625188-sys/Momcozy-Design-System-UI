import { useEffect, useState } from 'react'
import { Icon } from './ui/icon'
import { Title, type TitleVariant } from './ui/title'
import './title-showcase.css'

type ThemeMode = 'light' | 'dark'

const variants: readonly TitleVariant[] = [
  'mom-baby',
  'mom',
  'baby',
  'body-title',
  'large-title',
  'body-title-two-line',
]

function initialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return 'light'
}

export function TitleShowcase() {
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
    <main className="title-showcase">
      <div className="title-showcase__header">
        <div>
          <a href="/components">Momcozy Design System</a>
          <h1>Title</h1>
          <p>Figma node 1709:36827 · 6 responsive variants</p>
        </div>
        <button
          className="title-showcase__theme-toggle"
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

      <section className="title-showcase__canvas" aria-label="Title variants">
        {variants.map((variant) => (
          <div
            className={`title-showcase__item title-showcase__item--${variant}`}
            key={variant}
          >
            <Title variant={variant} />
          </div>
        ))}
      </section>
    </main>
  )
}
