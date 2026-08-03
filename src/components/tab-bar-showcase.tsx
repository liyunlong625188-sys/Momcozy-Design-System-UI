import { useEffect, useState } from 'react'
import { Icon } from './ui/icon'
import { TabBar } from './ui/tab-bar'
import './tab-bar-showcase.css'

type ThemeMode = 'light' | 'dark'

function initialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return 'light'
}

export function TabBarShowcase() {
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
    <main className="tab-bar-showcase">
      <div className="tab-bar-showcase__header">
        <div>
          <a href="/components">Momcozy Design System</a>
          <h1>Tab Bar</h1>
          <p>Figma node 1761:40647 · interactive four-item navigation</p>
        </div>
        <button
          aria-label={`Switch to ${nextTheme} mode`}
          className="tab-bar-showcase__theme-toggle"
          type="button"
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
        aria-label="Tab Bar interactive preview"
        className="tab-bar-showcase__canvas"
      >
        <TabBar />
      </section>
    </main>
  )
}
