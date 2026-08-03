(() => {
  const root = document.documentElement
  const isEmbedded = window.self !== window.top

  document.body.classList.toggle('is-embedded', isEmbedded)

  const themeToggle = document.createElement('button')
  themeToggle.className = 'momcozy-theme-toggle'
  themeToggle.type = 'button'
  themeToggle.innerHTML = [
    '<momcozy-icon class="momcozy-theme-toggle__icon momcozy-theme-toggle__moon" name="themeMoon" aria-hidden="true"></momcozy-icon>',
    '<momcozy-icon class="momcozy-theme-toggle__icon momcozy-theme-toggle__sun" name="themeSun" aria-hidden="true"></momcozy-icon>',
  ].join('')

  if (!isEmbedded) document.body.prepend(themeToggle)

  function syncToggle(theme) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`)
    themeToggle.setAttribute('title', `Switch to ${nextTheme} mode`)
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'))
  }

  function applyTheme(theme) {
    const nextTheme = theme === 'dark' ? 'dark' : 'light'
    root.classList.toggle('dark', nextTheme === 'dark')
    root.dataset.theme = nextTheme
    syncToggle(nextTheme)
    window.dispatchEvent(
      new CustomEvent('momcozy-theme-change', { detail: { theme: nextTheme } }),
    )
  }

  const requestedTheme = new URLSearchParams(window.location.search).get('theme')
  const storedTheme = window.localStorage.getItem('momcozy-theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  applyTheme(requestedTheme || storedTheme || systemTheme)

  themeToggle.addEventListener('click', () => {
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'

    window.localStorage.setItem('momcozy-theme', nextTheme)
    applyTheme(nextTheme)
  })

  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return
    if (event.data?.type !== 'momcozy-theme') return

    window.localStorage.setItem('momcozy-theme', event.data.theme)
    applyTheme(event.data.theme)
  })
})()
