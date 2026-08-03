import { useEffect, useState } from 'react'
import { Icon } from './ui/icon'
import {
  LiquidGlassButton,
  type LiquidGlassButtonVariant,
} from './ui/liquid-glass-button'
import './liquid-glass-buttons-showcase.css'

type ThemeMode = 'light' | 'dark'

const variants: readonly LiquidGlassButtonVariant[] = [
  'icon',
  'icon-primary',
  'two-icons',
  'four-icons',
  'text',
  'text-primary',
  'icon-text',
]

function initialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return 'light'
}

export function LiquidGlassButtonsShowcase() {
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
    <main className="liquid-buttons-showcase">
      <div className="liquid-buttons-showcase__header">
        <div>
          <a href="/components">Momcozy Design System</a>
          <h1>Liquid Glass Buttons</h1>
          <p>Figma node 1688:3886 · 7 interactive variants</p>
        </div>
        <button
          className="liquid-buttons-showcase__theme-toggle"
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
        className="liquid-buttons-showcase__canvas"
        aria-label="Liquid Glass Button variants"
      >
        {variants.map((variant) => (
          <div
            className={
              variant === 'text'
                ? 'liquid-buttons-showcase__item is-text-start'
                : 'liquid-buttons-showcase__item'
            }
            key={variant}
          >
            <LiquidGlassButton variant={variant} />
          </div>
        ))}
      </section>
    </main>
  )
}
