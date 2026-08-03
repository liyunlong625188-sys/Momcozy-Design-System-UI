import { useState, type HTMLAttributes } from 'react'
import type { MomcozyIconName } from '../../lib/icons'
import { cn } from '../../lib/utils'
import { TabBarButton } from './tab-bar-button'
import './tab-bar.css'

export type TabBarValue = 'home' | 'device' | 'community' | 'me'

export interface TabBarItem {
  value: string
  label: string
  icon: MomcozyIconName
}

export interface TabBarProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  items?: readonly TabBarItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  ariaLabel?: string
}

const defaultTabBarItems = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'device', label: 'Device', icon: 'package' },
  { value: 'community', label: 'Community', icon: 'community' },
  { value: 'me', label: 'Me', icon: 'profile' },
] satisfies readonly TabBarItem[]

export function TabBar({
  items = defaultTabBarItems,
  value,
  defaultValue = items[0]?.value,
  onValueChange,
  ariaLabel = 'Primary navigation',
  className,
  ...props
}: TabBarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const selectedValue = value ?? internalValue

  const selectItem = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue)
    onValueChange?.(nextValue)
  }

  return (
    <nav
      {...props}
      aria-label={ariaLabel}
      className={cn('mc-tab-bar', className)}
    >
      <div className="mc-tab-bar__buttons">
        <span aria-hidden="true" className="mc-tab-bar__glass" />
        {items.map((item) => {
          const isSelected = item.value === selectedValue

          return (
            <TabBarButton
              aria-current={isSelected ? 'page' : undefined}
              className="mc-tab-bar__item"
              icon={item.icon}
              key={item.value}
              label={item.label}
              selected={isSelected}
              onClick={() => selectItem(item.value)}
            />
          )
        })}
      </div>
    </nav>
  )
}
