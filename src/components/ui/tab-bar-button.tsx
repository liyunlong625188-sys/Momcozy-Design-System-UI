import type { ButtonHTMLAttributes } from 'react'
import type { MomcozyIconName } from '../../lib/icons'
import { cn } from '../../lib/utils'
import { Icon } from './icon'
import './tab-bar-button.css'

export type TabBarButtonTab = 'home' | 'device' | 'community' | 'me'
export type TabBarButtonMode = 'inherit' | 'light' | 'dark'

export interface TabBarButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  tab?: TabBarButtonTab
  label?: string
  icon?: MomcozyIconName
  selected?: boolean
  mode?: TabBarButtonMode
}

const tabDefaults = {
  home: { label: 'Home', icon: 'home' },
  device: { label: 'Device', icon: 'package' },
  community: { label: 'Community', icon: 'community' },
  me: { label: 'Me', icon: 'profile' },
} satisfies Record<
  TabBarButtonTab,
  { label: string; icon: MomcozyIconName }
>

export function TabBarButton({
  tab,
  label,
  icon,
  selected = false,
  mode = 'inherit',
  className,
  type = 'button',
  ...props
}: TabBarButtonProps) {
  const defaults = tabDefaults[tab ?? 'home']

  return (
    <button
      {...props}
      aria-pressed={selected}
      className={cn('tab-bar-button', selected && 'is-selected', className)}
      data-mode={mode === 'inherit' ? undefined : mode}
      data-tab={tab}
      type={type}
    >
      <span aria-hidden="true" className="tab-bar-button__icon">
        <Icon
          fill={selected ? 'currentColor' : 'none'}
          name={icon ?? defaults.icon}
          size={24}
          strokeWidth={selected ? 1.5 : 1.7}
        />
      </span>
      <span className="tab-bar-button__label">{label ?? defaults.label}</span>
    </button>
  )
}
