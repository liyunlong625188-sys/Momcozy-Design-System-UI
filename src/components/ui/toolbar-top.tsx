import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import './toolbar-top.css'

const toolbarAsset = (name: string) => `/figma/toolbar-top/${name}`
const sharedFigmaAsset = (name: string) => `/figma/${name}`

export type ToolbarTopVariant =
  | 'home'
  | 'community'
  | 'segmented-control'
  | 'title-one-line-left'
  | 'title-two-line-left'
  | 'title-one-line'
  | 'title-two-line'
  | 'no-title'
  | 'device'

export interface SegmentedControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  segments: readonly string[]
  selectedIndex?: number
  defaultSelectedIndex?: number
  onSelectedIndexChange?: (index: number) => void
  ariaLabel?: string
}

export function SegmentedControl({
  segments,
  selectedIndex,
  defaultSelectedIndex = 0,
  onSelectedIndexChange,
  ariaLabel = 'Select a view',
  className,
  ...props
}: SegmentedControlProps) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultSelectedIndex)
  const activeIndex = selectedIndex ?? uncontrolledIndex

  const selectSegment = (index: number) => {
    if (selectedIndex === undefined) setUncontrolledIndex(index)
    onSelectedIndexChange?.(index)
  }

  return (
    <div
      className={cn(
        'toolbar-segments',
        'ios-liquid-glass',
        'ios-liquid-glass--control',
        className,
      )}
      role="tablist"
      aria-label={ariaLabel}
      {...props}
    >
      {segments.map((segment, index) => {
        const isSelected = activeIndex === index

        return (
          <button
            className={cn('toolbar-segments__item', isSelected && 'is-selected')}
            key={`${segment}-${index}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => selectSegment(index)}
          >
            {segment}
          </button>
        )
      })}
    </div>
  )
}

export interface ToolbarTopProps extends HTMLAttributes<HTMLElement> {
  variant?: ToolbarTopVariant
  title?: string
  greeting?: string
  personName?: string
  babyName?: string
  babyAge?: string
  postLabel?: string
  batteryLevel?: string
  avatarSrc?: string
  segments?: readonly string[]
  selectedSegment?: number
  defaultSelectedSegment?: number
  onSelectedSegmentChange?: (index: number) => void
  onLeftAction?: () => void
  onRightAction?: () => void
  onSecondaryAction?: () => void
  onPost?: () => void
}

type GlassButtonProps = {
  asset: string
  label: string
  onClick?: () => void
  className?: string
}

function AssetIcon({ asset }: { asset: string }) {
  return <img aria-hidden="true" src={toolbarAsset(asset)} alt="" />
}

function GlassButton({ asset, label, onClick, className }: GlassButtonProps) {
  return (
    <button
      className={cn('toolbar-top__glass-button', 'ios-liquid-glass', className)}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <AssetIcon asset={asset} />
    </button>
  )
}

function AvatarButton({
  src,
  label,
  onClick,
}: {
  src: string
  label: string
  onClick?: () => void
}) {
  return (
    <button
      className="toolbar-top__avatar-button"
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <img src={src} alt="" />
    </button>
  )
}

function ConnectedStatus({ batteryLevel }: { batteryLevel: string }) {
  return (
    <div className="toolbar-top__connected" aria-label={`Connected, battery ${batteryLevel}`}>
      <AssetIcon asset="bluetooth.svg" />
      <AssetIcon asset="separator.svg" />
      <span className="toolbar-top__battery">
        <AssetIcon asset="battery.svg" />
        <span aria-hidden="true">{batteryLevel}</span>
      </span>
    </div>
  )
}

export function ToolbarTop({
  variant = 'home',
  title,
  greeting = 'Hi, Clare and Bonnie',
  personName = 'MomName',
  babyName = 'BabyName',
  babyAge = '13 weeks, 5 days',
  postLabel = 'Post',
  batteryLevel = '80%',
  avatarSrc,
  segments,
  selectedSegment,
  defaultSelectedSegment,
  onSelectedSegmentChange,
  onLeftAction,
  onRightAction,
  onSecondaryAction,
  onPost,
  className,
  ...props
}: ToolbarTopProps) {
  let left: ReactNode = null
  let center: ReactNode = null
  let right: ReactNode = null

  const backButton = (
    <GlassButton
      asset="chevron-left.svg"
      label="Go back"
      onClick={onLeftAction}
    />
  )

  if (variant === 'home') {
    left = (
      <GlassButton asset="calendar.svg" label="Open calendar" onClick={onLeftAction} />
    )
    center = (
      <button className="toolbar-top__identity" type="button" onClick={onSecondaryAction}>
        <img
          className="toolbar-top__identity-avatar toolbar-top__identity-avatar--small"
          src={avatarSrc ?? toolbarAsset('home-profile.jpg')}
          alt=""
        />
        <span>{greeting}</span>
        <AssetIcon asset="switch-chevron.svg" />
      </button>
    )
    right = (
      <GlassButton
        asset="notification.svg"
        label="Open notifications"
        onClick={onRightAction}
      />
    )
  }

  if (variant === 'community') {
    left = (
      <AvatarButton
        src={avatarSrc ?? sharedFigmaAsset('community-avatar.png')}
        label="Open profile"
        onClick={onLeftAction}
      />
    )
    center = (
      <SegmentedControl
        segments={segments ?? ['For You', 'Momcozy Reads']}
        selectedIndex={selectedSegment}
        defaultSelectedIndex={defaultSelectedSegment}
        onSelectedIndexChange={onSelectedSegmentChange}
        ariaLabel="Community feed"
      />
    )
    right = (
      <GlassButton
        asset="notification.svg"
        label="Open notifications"
        onClick={onRightAction}
      />
    )
  }

  if (variant === 'segmented-control') {
    left = backButton
    center = (
      <SegmentedControl
        segments={segments ?? ['D', 'W', 'M']}
        selectedIndex={selectedSegment}
        defaultSelectedIndex={defaultSelectedSegment}
        onSelectedIndexChange={onSelectedSegmentChange}
        ariaLabel="Time range"
      />
    )
    right = (
      <GlassButton asset="chevron-right.svg" label="Next" onClick={onRightAction} />
    )
  }

  if (variant === 'title-one-line-left') {
    left = backButton
    center = (
      <div className="toolbar-top__person">
        <img src={avatarSrc ?? sharedFigmaAsset('home-profile.png')} alt="" />
        <span>{personName}</span>
      </div>
    )
    right = <GlassButton asset="more.svg" label="More options" onClick={onRightAction} />
  }

  if (variant === 'title-two-line-left') {
    left = backButton
    center = (
      <div className="toolbar-top__person toolbar-top__person--two-line">
        <img src={avatarSrc ?? sharedFigmaAsset('home-profile.png')} alt="" />
        <span>
          <strong>{babyName}</strong>
          <small>{babyAge}</small>
        </span>
      </div>
    )
    right = (
      <div
        className="toolbar-top__glass-group ios-liquid-glass"
        role="group"
        aria-label="Page actions"
      >
        <button type="button" aria-label="More options" onClick={onRightAction}>
          <AssetIcon asset="more.svg" />
        </button>
        <button type="button" aria-label="Add" onClick={onSecondaryAction}>
          <AssetIcon asset="plus.svg" />
        </button>
      </div>
    )
  }

  if (variant === 'title-one-line') {
    left = backButton
    center = <h2 className="toolbar-top__title">{title ?? 'Pumping Schedule'}</h2>
    right = <GlassButton asset="settings.svg" label="Open settings" onClick={onRightAction} />
  }

  if (variant === 'title-two-line') {
    left = backButton
    center = (
      <div className="toolbar-top__title-stack">
        <h2 className="toolbar-top__title">{title ?? 'Title'}</h2>
        <ConnectedStatus batteryLevel={batteryLevel} />
      </div>
    )
    right = <GlassButton asset="settings.svg" label="Open settings" onClick={onRightAction} />
  }

  if (variant === 'no-title') {
    left = backButton
    center = <span aria-hidden="true" />
    right = (
      <button
        className="toolbar-top__post-button ios-liquid-glass ios-liquid-glass--tinted"
        type="button"
        onClick={onPost}
      >
        {postLabel}
      </button>
    )
  }

  if (variant === 'device') {
    center = <h1 className="toolbar-top__device-title">{title ?? 'My Device'}</h1>
    right = <GlassButton asset="plus.svg" label="Add device" onClick={onRightAction} />
  }

  return (
    <header
      className={cn('toolbar-top', `toolbar-top--${variant}`, className)}
      data-variant={variant}
      {...props}
    >
      {left ? <div className="toolbar-top__left">{left}</div> : null}
      <div className="toolbar-top__center">{center}</div>
      <div className="toolbar-top__right">{right}</div>
    </header>
  )
}
