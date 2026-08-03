import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
import './title.css'

const titleAsset = (name: string) => `/figma/title/${name}`

export type TitleVariant =
  | 'mom-baby'
  | 'mom'
  | 'baby'
  | 'body-title'
  | 'large-title'
  | 'body-title-two-line'

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TitleVariant
  title?: string
  greeting?: string
  momName?: string
  babyName?: string
  babyAge?: string
  batteryLevel?: string
  avatarSrc?: string
  profileSrc?: string
  selectorLabel?: string
  onSelectorClick?: () => void
}

function ConnectedStatus({ batteryLevel }: { batteryLevel: string }) {
  return (
    <div className="mc-title__connected" aria-label={`Connected, battery ${batteryLevel}`}>
      <span className="mc-title__bluetooth">
        <img aria-hidden="true" alt="" src={titleAsset('bluetooth.svg')} />
      </span>
      <img
        className="mc-title__separator"
        aria-hidden="true"
        alt=""
        src={titleAsset('separator.svg')}
      />
      <span className="mc-title__battery">
        <img aria-hidden="true" alt="" src={titleAsset('battery.svg')} />
        <span aria-hidden="true">{batteryLevel}</span>
      </span>
    </div>
  )
}

export function Title({
  variant = 'mom-baby',
  title = 'Title',
  greeting = 'Hi, Clare and Bonnie',
  momName = 'MomName',
  babyName = 'BabyName',
  babyAge = '13 weeks, 5 days',
  batteryLevel = '80%',
  avatarSrc = titleAsset('avatar-32.png'),
  profileSrc = titleAsset('avatar-24.jpg'),
  selectorLabel = 'Switch profile',
  onSelectorClick,
  className,
  ...props
}: TitleProps) {
  return (
    <div
      className={cn('mc-title', `mc-title--${variant}`, className)}
      data-variant={variant}
      {...props}
    >
      {variant === 'mom-baby' ? (
        <button
          className="mc-title__selector"
          type="button"
          aria-label={selectorLabel}
          onClick={onSelectorClick}
        >
          <img className="mc-title__profile" src={profileSrc} alt="" />
          <span className="mc-title__popup">
            <span className="mc-title__greeting">{greeting}</span>
            <img
              className="mc-title__switch"
              aria-hidden="true"
              src={titleAsset('switch.svg')}
              alt=""
            />
          </span>
        </button>
      ) : null}

      {variant === 'mom' || variant === 'baby' ? (
        <img className="mc-title__avatar" src={avatarSrc} alt="" />
      ) : null}

      {variant === 'mom' ? <span className="mc-title__mom-name">{momName}</span> : null}

      {variant === 'baby' ? (
        <span className="mc-title__baby-copy">
          <strong>{babyName}</strong>
          <small>{babyAge}</small>
        </span>
      ) : null}

      {variant === 'body-title' || variant === 'large-title' ? (
        <span className="mc-title__text">{title}</span>
      ) : null}

      {variant === 'body-title-two-line' ? (
        <>
          <span className="mc-title__text">{title}</span>
          <ConnectedStatus batteryLevel={batteryLevel} />
        </>
      ) : null}
    </div>
  )
}
