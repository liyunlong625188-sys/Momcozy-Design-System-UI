import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import './liquid-glass-button.css'

const buttonAsset = (name: string) => `/figma/buttons/${name}`

export type LiquidGlassButtonVariant =
  | 'icon'
  | 'icon-primary'
  | 'two-icons'
  | 'four-icons'
  | 'text'
  | 'text-primary'
  | 'icon-text'

export interface LiquidGlassButtonProps {
  variant?: LiquidGlassButtonVariant
  className?: string
  label?: string
  ariaLabel?: string
  icon?: ReactNode
  icons?: readonly ReactNode[]
  iconLabels?: readonly string[]
  disabled?: boolean
  onClick?: () => void
  onIconClick?: (index: number) => void
}

const defaultIconLabels = {
  'two-icons': ['More options', 'Add'],
  'four-icons': ['Add image', 'Add poll', 'Add topic', 'Settings'],
} as const

const defaultIcons = {
  icon: <AssetIcon asset="chevron-left.svg" />,
  'icon-primary': <AssetIcon asset="check.svg" kind="check" />,
  'two-icons': [
    <AssetIcon asset="more.svg" key="more" />,
    <AssetIcon asset="add.svg" key="add" />,
  ],
  'four-icons': [
    <AssetIcon asset="image.svg" key="image" kind="image" />,
    <AssetIcon asset="poll.svg" key="poll" kind="poll" />,
    <AssetIcon asset="tag.svg" key="tag" kind="tag" />,
    <AssetIcon asset="settings.svg" key="settings" />,
  ],
  'icon-text': <AssetIcon asset="location.svg" kind="location" />,
} as const

function AssetIcon({
  asset,
  kind,
}: {
  asset: string
  kind?: 'check' | 'image' | 'poll' | 'tag' | 'location'
}) {
  return (
    <span className={cn('liquid-glass-button__icon', kind && `is-${kind}`)}>
      <img aria-hidden="true" alt="" src={buttonAsset(asset)} />
    </span>
  )
}

function variantLabel(variant: LiquidGlassButtonVariant) {
  if (variant === 'text') return 'Skip'
  if (variant === 'text-primary') return 'Post'
  if (variant === 'icon-text') return 'Austalia'
  return undefined
}

export function LiquidGlassButton({
  variant = 'icon',
  className,
  label = variantLabel(variant),
  ariaLabel,
  icon,
  icons,
  iconLabels,
  disabled = false,
  onClick,
  onIconClick,
}: LiquidGlassButtonProps) {
  const isGroup = variant === 'two-icons' || variant === 'four-icons'

  if (isGroup) {
    const fallbackIcons = defaultIcons[variant]
    const visibleIcons = (icons ?? fallbackIcons).slice(0, fallbackIcons.length)
    const labels = iconLabels ?? defaultIconLabels[variant]

    return (
      <div
        className={cn(
          'liquid-glass-button',
          'ios-liquid-glass',
          `liquid-glass-button--${variant}`,
          disabled && 'is-disabled',
          className,
        )}
        role="group"
        aria-label={ariaLabel ?? `${visibleIcons.length} button actions`}
      >
        {visibleIcons.map((item, index) => (
          <button
            className="liquid-glass-button__action"
            type="button"
            aria-label={labels[index] ?? `Action ${index + 1}`}
            disabled={disabled}
            key={index}
            onClick={() => onIconClick?.(index)}
          >
            {item}
          </button>
        ))}
      </div>
    )
  }

  const visibleIcon =
    icon ??
    (variant === 'icon' || variant === 'icon-primary' || variant === 'icon-text'
      ? defaultIcons[variant]
      : null)
  const accessibleLabel =
    ariaLabel ??
    (variant === 'icon' ? 'Go back' : variant === 'icon-primary' ? 'Confirm' : label)

  return (
    <button
      className={cn(
        'liquid-glass-button',
        'ios-liquid-glass',
        `liquid-glass-button--${variant}`,
        (variant === 'icon-primary' || variant === 'text-primary') &&
          'ios-liquid-glass--tinted',
        className,
      )}
      type="button"
      aria-label={accessibleLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {visibleIcon}
      {label ? <span className="liquid-glass-button__label">{label}</span> : null}
    </button>
  )
}
