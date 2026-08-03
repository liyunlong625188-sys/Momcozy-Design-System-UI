import { useEffect, useMemo, useRef, useState } from 'react'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { Icon } from './components/ui/icon'
import { LiquidGlassButtonsShowcase } from './components/liquid-glass-buttons-showcase'
import { TabBarShowcase } from './components/tab-bar-showcase'
import { TitleShowcase } from './components/title-showcase'
import { ToolbarTopSheetShowcase } from './components/toolbar-top-sheet-showcase'
import { ToolbarTopShowcase } from './components/toolbar-top-showcase'
import type { MomcozyIconName } from './lib/icons'
import './App.css'
import './styles/liquid-glass.css'

type TabId = 'home' | 'device' | 'community' | 'me'
type ProductTone = 'mom' | 'care' | 'parenting' | 'family'
type ThemeMode = 'light' | 'dark'

const img = (name: string) => `/figma/${name}`

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'device', label: 'Device', icon: 'package' },
  { id: 'community', label: 'Community', icon: 'community' },
  { id: 'me', label: 'Me', icon: 'profile' },
] satisfies Array<{ id: TabId; label: string; icon: MomcozyIconName }>

const homeTabs = ['For You', 'Baby Care', 'Breastfeeding']

const checkIns = [
  {
    label: 'Pump',
    time: '1h 30m ago',
    icon: 'pump',
    tone: 'mom',
  },
  {
    label: 'Feed',
    time: '1h 30m ago',
    icon: 'baby',
    tone: 'family',
  },
  {
    label: 'Supplement',
    time: '1h 30m ago',
    icon: 'medicine',
    tone: 'parenting',
  },
] satisfies Array<{
  label: string
  time: string
  icon: MomcozyIconName
  tone: ProductTone
}>

const reminders = [
  {
    time: 'All Day',
    title: 'BirthEase Maternity Ball Program',
    tone: 'mom',
    cta: 'Start',
  },
  {
    time: '9:00',
    title: 'Light therapy session',
    tone: 'care',
    cta: 'View',
  },
  {
    time: '11:00',
    title: 'Nursery humidity check',
    tone: 'family',
    cta: 'View',
  },
] satisfies Array<{
  time: string
  title: string
  tone: ProductTone
  cta: string
}>

const devices = [
  {
    title: 'Smart Baby Monitor BM08',
    body: 'See every moment. Even in the dark.',
    image: 'device-bm08.png',
    tone: 'care',
    badge: 'Online',
  },
  {
    title: 'W1 Comfort Pump System',
    body: 'Warm-massage comfort for natural flow.',
    image: 'device-w1.png',
    tone: 'mom',
    badge: 'Ready',
  },
  {
    title: 'Wearable Digital Thermometer T31',
    body: 'Every reading, always in view.',
    image: 'device-t31.png',
    tone: 'family',
    badge: '36.8°C',
  },
] satisfies Array<{
  title: string
  body: string
  image: string
  tone: ProductTone
  badge: string
}>

const topics = [
  '# ChooseYouToo',
  '# MoreThanIKnow',
  '# HowToIncreaseBreast...',
  '# PumpingRoutines',
]

const communityPosts = [
  {
    author: 'Momcozy Daily',
    title: 'Behind Choose You, Too 🎬',
    body: 'This Mother’s Day, we wanted to say something different. No superhero speeches. Just real care, real rest, and real support.',
    tone: 'mom',
    image: 'community-banner.png',
    likes: '1.2k+',
  },
  {
    author: 'John Alexander',
    title: 'Latest wearable breast pump setup',
    body: 'A quick look at my partner’s quiet pumping routine and how we keep every part clean between sessions.',
    tone: 'care',
    image: 'device-w1.png',
    likes: '328',
  },
  {
    author: 'Clara Wang',
    title: 'Night nursery settings that helped us',
    body: 'Soft white noise, steady humidity, and one glance at the baby monitor changed our nights.',
    tone: 'family',
    image: 'device-bm08.png',
    likes: '846',
  },
] satisfies Array<{
  author: string
  title: string
  body: string
  tone: ProductTone
  image: string
  likes: string
}>

const accountGroups = [
  [
    { label: 'My Profile', icon: 'profileCircle', badge: true },
    { label: 'My Baby', icon: 'baby', badge: true },
    { label: 'Momcozy Care', icon: 'shoppingBag' },
    { label: 'Course Library', icon: 'book' },
  ],
  [
    { label: 'Help & Feedback', icon: 'help' },
    { label: 'Share Application', icon: 'share' },
  ],
  [
    { label: 'About', icon: 'shield' },
    { label: 'Settings', icon: 'settings' },
  ],
]

const demoDirectoryItems = [
  {
    index: '01',
    title: 'User Guide',
    description: 'New-version guidance, feature education, FAQ, and support.',
    href: '/guide',
    icon: 'book',
    tone: 'care',
  },
  {
    index: '02',
    title: 'Group Pumping Community',
    description: 'Community groups, topics, posts, and mom-to-mom interaction.',
    href: '/group-pumping',
    icon: 'message',
    tone: 'family',
  },
  {
    index: '03',
    title: 'Voice Log',
    description: 'Consent, microphone permission, voice capture, and AI records.',
    href: '/voice-log',
    icon: 'activity',
    tone: 'mom',
  },
  {
    index: '04',
    title: 'Cozy AI',
    description: 'Privacy-first AI chat, local quick replies, plans, and history.',
    href: '/cozy-ai',
    icon: 'ai',
    tone: 'mom',
  },
  {
    index: '05',
    title: 'AI Lactation Plan',
    description: 'Cozy AI pumping-plan skill flow with guided setup and plan review.',
    href: '/ai-lactation-plan',
    icon: 'ai',
    tone: 'mom',
  },
  {
    index: '06',
    title: 'Partner Mode',
    description: 'Invite a partner, connect caregiving, and manage shared access.',
    href: '/partner-mode',
    icon: 'community',
    tone: 'family',
  },
] satisfies Array<{
  index: string
  title: string
  description: string
  href: string
  icon: MomcozyIconName
  tone: ProductTone
}>

const componentDirectoryItems = [
  {
    title: 'Toolbar Top',
    description: 'Nine responsive top-toolbar variants from the App 3.0 UI Kit.',
    href: '/toolbar-top',
    icon: 'home',
  },
  {
    title: 'Toolbar Top Sheet',
    description:
      'Large-title and compact sheet headers with a liquid-glass close action.',
    href: '/toolbar-top-sheet',
    icon: 'close',
  },
  {
    title: 'Liquid Glass Buttons',
    description:
      'Icon, grouped-action, text, primary, and icon-with-text button variants.',
    href: '/liquid-glass-buttons',
    icon: 'add',
  },
  {
    title: 'Title',
    description:
      'Profile, person, baby, body, large, and connected title variants.',
    href: '/title',
    icon: 'edit',
  },
  {
    title: 'Tab Bar',
    description:
      'Four-item liquid-glass primary navigation with selectable destinations.',
    href: '/tab-bar',
    icon: 'home',
  },
] satisfies Array<{
  title: string
  description: string
  href: string
  icon: MomcozyIconName
}>

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const [activeHomeTab, setActiveHomeTab] = useState(homeTabs[0])
  const isDemosRoute =
    window.location.pathname === '/demos' ||
    window.location.pathname === '/demos/'
  const isComponentsRoute =
    window.location.pathname === '/components' ||
    window.location.pathname === '/components/'
  const isGuideRoute = window.location.pathname === '/guide' || window.location.pathname === '/guide/'
  const isGroupPumpingRoute =
    window.location.pathname === '/group-pumping' ||
    window.location.pathname === '/group-pumping/'
  const isVoiceLogRoute =
    window.location.pathname === '/voice-log' ||
    window.location.pathname === '/voice-log/'
  const isCozyAiRoute =
    window.location.pathname === '/cozy-ai' ||
    window.location.pathname === '/cozy-ai/'
  const isAiLactationPlanRoute =
    window.location.pathname === '/ai-lactation-plan' ||
    window.location.pathname === '/ai-lactation-plan/'
  const isPartnerModeRoute =
    window.location.pathname === '/partner-mode' ||
    window.location.pathname === '/partner-mode/'
  const isToolbarTopRoute =
    window.location.pathname === '/toolbar-top' ||
    window.location.pathname === '/toolbar-top/'
  const isToolbarTopSheetRoute =
    window.location.pathname === '/toolbar-top-sheet' ||
    window.location.pathname === '/toolbar-top-sheet/'
  const isLiquidGlassButtonsRoute =
    window.location.pathname === '/liquid-glass-buttons' ||
    window.location.pathname === '/liquid-glass-buttons/'
  const isTitleRoute =
    window.location.pathname === '/title' ||
    window.location.pathname === '/title/'
  const isTabBarRoute =
    window.location.pathname === '/tab-bar' ||
    window.location.pathname === '/tab-bar/'
  const page = useMemo(() => {
    if (activeTab === 'device') return <DevicePage />
    if (activeTab === 'community') return <CommunityPage />
    if (activeTab === 'me') return <MePage />

    return (
      <HomePage
        activeHomeTab={activeHomeTab}
        setActiveHomeTab={setActiveHomeTab}
      />
    )
  }, [activeHomeTab, activeTab])

  if (isDemosRoute) return <DemoDirectory />
  if (isComponentsRoute) return <ComponentDirectory />
  if (isGuideRoute) return <GuideFrame />
  if (isGroupPumpingRoute) return <GroupPumpingFrame />
  if (isVoiceLogRoute) return <VoiceLogFrame />
  if (isCozyAiRoute) return <CozyAiFrame />
  if (isAiLactationPlanRoute) {
    return (
      <StandaloneDemoFrame
        label="Cozy AI lactation plan demo preview"
        src="/demos/05-ai-lactation-plan/index.html"
        title="Cozy AI lactation plan skill demo"
      />
    )
  }
  if (isPartnerModeRoute) {
    return (
      <StandaloneDemoFrame
        label="Partner Mode demo preview"
        src="/demos/06-partner-mode/index.html"
        title="Partner Mode inviter flow demo"
      />
    )
  }
  if (isToolbarTopRoute) return <ToolbarTopShowcase />
  if (isToolbarTopSheetRoute) return <ToolbarTopSheetShowcase />
  if (isLiquidGlassButtonsRoute) return <LiquidGlassButtonsShowcase />
  if (isTitleRoute) return <TitleShowcase />
  if (isTabBarRoute) return <TabBarShowcase />

  return (
    <main className="demo-stage">
      <section className={`phone-screen app-${activeTab}`} aria-label="Momcozy demo">
        <StatusBar />
        <div className="screen-scroll">{page}</div>
        {activeTab === 'community' ? <Button className="floating-post">Post</Button> : null}
        <BottomNav activeTab={activeTab} onChange={setActiveTab} />
      </section>
    </main>
  )
}

function DemoDirectory() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

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
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="demo-directory">
      <header className="demo-directory-header">
        <div>
          <p className="demo-directory-kicker">Momcozy Design System</p>
          <h1>Demo Library</h1>
          <p>Six token-driven examples ready for product prototyping.</p>
          <nav className="demo-directory-tabs" aria-label="Library sections">
            <a className="is-active" aria-current="page" href="/demos">Demos</a>
            <a href="/components">Components</a>
          </nav>
        </div>
        <button
          className="demo-directory-theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
          onClick={() => setTheme(nextTheme)}
        >
          <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
        </button>
      </header>

      <section className="demo-directory-list" aria-label="Available Momcozy demos">
        {demoDirectoryItems.map((item) => {
          return (
            <a
              className="demo-directory-row"
              data-tone={item.tone}
              href={item.href}
              key={item.index}
            >
              <span className="demo-directory-icon" aria-hidden="true">
                <Icon name={item.icon} size={22} strokeWidth={2} />
              </span>
              <span className="demo-directory-copy">
                <span className="demo-directory-index">Demo {item.index}</span>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </span>
              <span className="demo-directory-status">
                <span aria-hidden="true" />
                Ready
              </span>
              <Icon aria-hidden="true" name="arrowRight" size={20} strokeWidth={2} />
            </a>
          )
        })}
      </section>
    </main>
  )
}

function ComponentDirectory() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

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
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="demo-directory component-directory">
      <header className="demo-directory-header">
        <div>
          <p className="demo-directory-kicker">Momcozy Design System</p>
          <h1>Component Library</h1>
          <p>Reusable UI components and implementation references.</p>
          <nav className="demo-directory-tabs" aria-label="Library sections">
            <a href="/demos">Demos</a>
            <a className="is-active" aria-current="page" href="/components">Components</a>
          </nav>
        </div>
        <button
          className="demo-directory-theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
          onClick={() => setTheme(nextTheme)}
        >
          <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
        </button>
      </header>

      <section className="demo-directory-list" aria-label="Available Momcozy components">
        {componentDirectoryItems.map((item, index) => (
          <a className="demo-directory-row" href={item.href} key={item.href}>
            <span className="demo-directory-icon" aria-hidden="true">
              <Icon name={item.icon} size={22} strokeWidth={2} />
            </span>
            <span className="demo-directory-copy">
              <span className="demo-directory-index">
                Component {String(index + 1).padStart(2, '0')}
              </span>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
            <span className="demo-directory-status">
              <span aria-hidden="true" />
              Ready
            </span>
            <Icon aria-hidden="true" name="arrowRight" size={20} strokeWidth={2} />
          </a>
        ))}
      </section>
    </main>
  )
}

function getInitialTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem('momcozy-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function GroupPumpingFrame() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const frameRef = useRef<HTMLIFrameElement>(null)

  const syncFrameTheme = (nextTheme: ThemeMode) => {
    frameRef.current?.contentWindow?.postMessage(
      { type: 'momcozy-theme', theme: nextTheme },
      window.location.origin,
    )
  }

  useEffect(() => {
    window.localStorage.setItem('momcozy-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
    syncFrameTheme(theme)

    return () => {
      document.documentElement.classList.remove('dark')
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="group-demo-stage" aria-label="Group Pumping Moms demo preview">
      <button
        className="group-theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
        onClick={() => setTheme(nextTheme)}
      >
        <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
      </button>
      <iframe
        ref={frameRef}
        className="group-demo-frame"
        src="/demos/02-group-pumping/index.html"
        title="Group Pumping Moms community example"
        onLoad={() => syncFrameTheme(theme)}
      />
    </main>
  )
}

function GuideFrame() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const frameRef = useRef<HTMLIFrameElement>(null)

  const syncFrameTheme = (nextTheme: ThemeMode) => {
    frameRef.current?.contentWindow?.postMessage(
      { type: 'momcozy-theme', theme: nextTheme },
      window.location.origin,
    )
  }

  useEffect(() => {
    window.localStorage.setItem('momcozy-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
    syncFrameTheme(theme)

    return () => {
      document.documentElement.classList.remove('dark')
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="guide-stage" aria-label="Momcozy user guide preview">
      <button
        className="guide-theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
        onClick={() => setTheme(nextTheme)}
      >
        <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
      </button>
      <iframe
        ref={frameRef}
        className="guide-frame"
        src="/demos/01-user-guide/index.html"
        title="Momcozy User Guide"
        onLoad={() => syncFrameTheme(theme)}
      />
    </main>
  )
}

function VoiceLogFrame() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const frameRef = useRef<HTMLIFrameElement>(null)

  const syncFrameTheme = (nextTheme: ThemeMode) => {
    frameRef.current?.contentWindow?.postMessage(
      { type: 'momcozy-theme', theme: nextTheme },
      window.location.origin,
    )
  }

  useEffect(() => {
    window.localStorage.setItem('momcozy-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
    syncFrameTheme(theme)

    return () => {
      document.documentElement.classList.remove('dark')
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="voice-log-stage" aria-label="Momcozy Voice Log demo preview">
      <button
        className="voice-log-theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
        onClick={() => setTheme(nextTheme)}
      >
        <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
      </button>
      <iframe
        ref={frameRef}
        className="voice-log-frame"
        src="/demos/03-voice-log/index.html"
        title="Momcozy Voice Log complete flow example"
        onLoad={() => syncFrameTheme(theme)}
      />
    </main>
  )
}

function CozyAiFrame() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const frameRef = useRef<HTMLIFrameElement>(null)

  const syncFrameTheme = (nextTheme: ThemeMode) => {
    frameRef.current?.contentWindow?.postMessage(
      { type: 'momcozy-theme', theme: nextTheme },
      window.location.origin,
    )
  }

  useEffect(() => {
    window.localStorage.setItem('momcozy-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
    syncFrameTheme(theme)

    return () => {
      document.documentElement.classList.remove('dark')
      delete document.documentElement.dataset.theme
    }
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const themeIcon = theme === 'light' ? 'themeMoon' : 'themeSun'

  return (
    <main className="cozy-ai-stage" aria-label="Cozy AI demo preview">
      <button
        className="cozy-ai-theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
        onClick={() => setTheme(nextTheme)}
      >
        <Icon aria-hidden="true" name={themeIcon} size={20} strokeWidth={2} />
      </button>
      <iframe
        ref={frameRef}
        className="cozy-ai-frame"
        src="/demos/04-cozy-ai/index.html"
        title="Cozy AI local interactive product demo"
        onLoad={() => syncFrameTheme(theme)}
      />
    </main>
  )
}

function StandaloneDemoFrame({
  label,
  src,
  title,
}: {
  label: string
  src: string
  title: string
}) {
  return (
    <main className="standalone-demo-stage" aria-label={label}>
      <iframe className="standalone-demo-frame" src={src} title={title} />
    </main>
  )
}

function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="status-icons" aria-hidden="true">
        <Icon name="chart" size={19} strokeWidth={2.8} />
        <Icon name="wifi" size={17} strokeWidth={2.6} />
        <div className="battery">
          <span />
        </div>
      </div>
    </div>
  )
}

function BottomNav({
  activeTab,
  onChange,
}: {
  activeTab: TabId
  onChange: (tab: TabId) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {navItems.map((item) => {
        const isActive = activeTab === item.id

        return (
          <button
            className={`bottom-nav__item ${isActive ? 'is-active' : ''}`}
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
          >
            <span className="bottom-nav__icon">
              <Icon name={item.icon} size={22} strokeWidth={1.9} />
            </span>
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function HomePage({
  activeHomeTab,
  setActiveHomeTab,
}: {
  activeHomeTab: string
  setActiveHomeTab: (tab: string) => void
}) {
  return (
    <div className="page home-page">
      <header className="home-hero">
        <div className="hero-glow" />
        <div className="top-actions">
          <Button variant="icon" size="icon" aria-label="Calendar">
            <Icon name="calendar" size={19} />
          </Button>
          <Button variant="icon" size="icon" aria-label="Notifications">
            <Icon name="notification" size={20} />
          </Button>
        </div>
        <div className="home-identity">
          <img src={img('home-profile.png')} alt="" />
          <span>Hi, Clare and Bonnie</span>
          <Icon name="arrowDown" size={16} />
        </div>
        <div className="date-row">
          <Icon name="arrowLeft" size={16} />
          <span>Today, May 13th</span>
          <Icon name="arrowRight" size={16} />
        </div>
        <h1 className="type-heading-xl">Postpartum<br />1 Week</h1>
      </header>

      <Card className="guidance-card">
        <div className="guidance-mascot">
          <img src={img('home-bg.png')} alt="" />
        </div>
        <div className="segmented-tabs">
          {homeTabs.map((tab) => (
            <button
              className={activeHomeTab === tab ? 'is-active' : ''}
              key={tab}
              type="button"
              onClick={() => setActiveHomeTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul>
          <li>Pay attention to baby’s skin jaundice, and on-demand feeding is key.</li>
          <li>Nurture your body science-backed care, for a healthy pregnancy and a happy you.</li>
        </ul>
      </Card>

      <SectionTitle title="Daily Check-ins" action="View all" />
      <div className="checkins">
        {checkIns.map((item) => {
          return (
            <button className={`checkin-card tone-${item.tone}`} key={item.label} type="button">
              <Icon name={item.icon} size={33} strokeWidth={1.5} />
              <strong>{item.label}</strong>
              <span>{item.time}</span>
            </button>
          )
        })}
      </div>

      <SectionTitle title="Reminders" action="5" />
      <Card className="reminder-card">
        {reminders.map((reminder) => (
          <div className="reminder-row" key={reminder.title}>
            <div className={`reminder-icon tone-${reminder.tone}`}>
              <Icon name="activity" size={18} />
            </div>
            <div>
              <span>{reminder.time}</span>
              <strong>{reminder.title}</strong>
            </div>
            <Button variant="secondary" size="sm">
              {reminder.cta}
            </Button>
          </div>
        ))}
      </Card>

      <SectionTitle title="Connected Care" />
      <div className="connected-grid">
        <Card className="metric-card">
          <img src={img('home-air-1.png')} alt="" />
          <span>Nursery Air</span>
          <strong>Excellent</strong>
        </Card>
        <Card className="metric-card">
          <img src={img('home-product-a.png')} alt="" />
          <span>Pump Status</span>
          <strong>Ready</strong>
        </Card>
      </div>
    </div>
  )
}

function DevicePage() {
  return (
    <div className="page device-page">
      <section className="device-hero">
        <img className="device-hero__bg" src={img('device-bg.png')} alt="" />
        <img className="device-hero__glow glow-a" src={img('device-glow-a.svg')} alt="" />
        <img className="device-hero__glow glow-b" src={img('device-glow-b.svg')} alt="" />
        <div className="device-orb">
          <img src={img('device-hero-crop.png')} alt="" />
        </div>
        <h1 className="type-heading-m">Connect everything<br />what mom’s need</h1>
        <Button size="lg">
          <Icon name="add" size={18} />
          Add Device
        </Button>
      </section>

      <div className="device-carousel" aria-label="Connected devices">
        {devices.map((device) => (
          <Card className={`device-card tone-${device.tone}`} key={device.title}>
            <Badge tone={device.tone}>{device.badge}</Badge>
            <div className="device-image">
              <img src={img(device.image)} alt="" />
            </div>
            <span>{device.title}</span>
            <strong>{device.body}</strong>
          </Card>
        ))}
      </div>

      <Card className="device-summary">
        <CardHeader>
          <div>
            <span>Care network</span>
            <strong>3 devices active</strong>
          </div>
          <Badge tone="success">Stable</Badge>
        </CardHeader>
        <CardContent>
          <div>
            <Icon name="camera" size={18} />
            <span>Baby monitor</span>
            <strong>Live</strong>
          </div>
          <div>
            <Icon name="thermometer" size={18} />
            <span>Thermometer</span>
            <strong>36.8°C</strong>
          </div>
          <div>
            <Icon name="wind" size={18} />
            <span>Air care</span>
            <strong>Auto</strong>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CommunityPage() {
  return (
    <div className="page community-page">
      <header className="community-header">
        <button className="avatar-button" type="button" aria-label="Profile">
          <img src={img('community-avatar.png')} alt="" />
          <span>2</span>
        </button>
        <div className="community-switch">
          <button className="is-active" type="button">
            For You
          </button>
          <button type="button">Momcozy Reads</button>
        </div>
        <Button variant="icon" size="icon" aria-label="Notifications">
          <Icon name="notification" size={19} />
        </Button>
      </header>

      <Card className="community-banner">
        <img src={img('community-banner.png')} alt="" />
      </Card>

      <SectionTitle title="Trending Topics" />
      <div className="topic-cloud">
        {topics.map((topic, index) => (
          <button key={topic} type="button">
            <Icon name="tag" size={14} />
            <span>{topic}</span>
            {index === 0 ? <Badge tone="mom">NEW</Badge> : null}
          </button>
        ))}
      </div>

      <SectionTitle title="Featured" />
      <div className="featured-row">
        {communityPosts.slice(0, 2).map((post) => (
          <FeaturedCard post={post} key={post.title} />
        ))}
      </div>

      <div className="post-list">
        {communityPosts.map((post) => (
          <PostCard post={post} key={`${post.author}-${post.title}`} />
        ))}
      </div>
    </div>
  )
}

function FeaturedCard({ post }: { post: (typeof communityPosts)[number] }) {
  return (
    <Card className="featured-card">
      <div className="featured-card__author">
        <span className={`brand-dot tone-${post.tone}`}>m</span>
        <strong>{post.author}</strong>
      </div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="featured-card__meta">
        <span className="avatar-stack">
          <img src={img('home-profile.png')} alt="" />
          <img src={img('community-avatar.png')} alt="" />
          <img src={img('me-avatar.png')} alt="" />
        </span>
        <span>{post.likes} mom like this</span>
        <Icon name="featured" size={16} />
      </div>
    </Card>
  )
}

function PostCard({ post }: { post: (typeof communityPosts)[number] }) {
  return (
    <Card className="post-card">
      <div className="post-card__top">
        <img src={post.author === 'Clara Wang' ? img('me-avatar.png') : img('community-avatar.png')} alt="" />
        <div>
          <Badge tone={post.tone}>{post.tone === 'mom' ? 'Featured' : 'Care note'}</Badge>
          <strong>{post.author}</strong>
        </div>
      </div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <img className="post-card__image" src={img(post.image)} alt="" />
      <div className="post-actions">
        <span>
          <Icon name="favorite" size={17} />
          {post.likes}
        </span>
        <span>
          <Icon name="message" size={17} />
          42
        </span>
        <span>
          <Icon name="search" size={17} />
          Save
        </span>
      </div>
    </Card>
  )
}

function MePage() {
  return (
    <div className="page me-page">
      <header className="profile-header">
        <img src={img('me-avatar.png')} alt="" />
        <div>
          <h1 className="type-title-xl">Clara Wang</h1>
          <p>q243840766@gmail.com</p>
          <button type="button">
            Trying to Conceive
            <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </header>

      <Card className="level-card">
        <div className="level-card__top">
          <strong>BEGINNER</strong>
          <span>Lv1</span>
          <div className="level-progress" />
          <span>Lv2</span>
          <Badge tone="parenting">NEW</Badge>
        </div>
        <div className="level-card__body">
          <div>
            <strong>9,109</strong>
            <span className="star-pill">
              <Icon name="star" size={17} fill="currentColor" />
            </span>
          </div>
          <Button size="sm">My Perks</Button>
        </div>
        <p>
          <strong>3</strong> will expire this month
        </p>
      </Card>

      <Card className="share-card">
        <div className="share-illustration">
          <img src={img('me-image-213.png')} alt="" />
        </div>
        <div>
          <strong>Share Thoughts</strong>
          <span>Make Momcozy better for you!</span>
        </div>
        <Icon name="arrowRight" size={18} />
      </Card>

      <div className="me-actions">
        <Card>
          <img src={img('me-points.svg')} alt="" />
          <span>Points Mall</span>
        </Card>
        <Card>
          <img src={img('me-checkin.svg')} alt="" />
          <span>Get CozyCoins</span>
        </Card>
      </div>

      {accountGroups.map((group, groupIndex) => (
        <Card className="account-list" key={groupIndex}>
          {group.map((item) => {
            return (
              <button key={item.label} type="button">
                <Icon name={item.icon as MomcozyIconName} size={19} />
                <span>{item.label}</span>
                {item.badge ? <i aria-label="New" /> : null}
                <Icon name="arrowRight" size={16} />
              </button>
            )
          })}
        </Card>
      ))}
    </div>
  )
}

function SectionTitle({
  title,
  action,
}: {
  title: string
  action?: string
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action ? (
        <button type="button">
          {action}
          <Icon name="arrowRight" size={16} />
        </button>
      ) : (
        <Icon name="arrowRight" size={17} aria-hidden="true" />
      )}
    </div>
  )
}

export default App
