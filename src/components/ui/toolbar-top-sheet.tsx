import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
import { Icon } from './icon'
import './toolbar-top-sheet.css'

export type ToolbarTopSheetVariant =
  | 'large-title'
  | 'large-title-two-line'
  | 'compact-default'

export interface ToolbarTopSheetProps extends HTMLAttributes<HTMLElement> {
  variant?: ToolbarTopSheetVariant
  title?: string
  supportingText?: string
  closeLabel?: string
  supportingActionLabel?: string
  onClose?: () => void
  onSupportingAction?: () => void
}

export function ToolbarTopSheet({
  variant = 'large-title',
  title = 'Title',
  supportingText = 'Apr 1, 9:41 AM',
  closeLabel = 'Close sheet',
  supportingActionLabel = 'Open date details',
  onClose,
  onSupportingAction,
  className,
  ...props
}: ToolbarTopSheetProps) {
  const isCompact = variant === 'compact-default'
  const hasSupportingText = variant === 'large-title-two-line'

  return (
    <header
      className={cn(
        'toolbar-top-sheet',
        `toolbar-top-sheet--${variant}`,
        className,
      )}
      data-variant={variant}
      {...props}
    >
      <div className="toolbar-top-sheet__action-row">
        <button
          className="toolbar-top-sheet__close ios-liquid-glass"
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <Icon aria-hidden="true" name="close" size={24} />
        </button>

        {isCompact ? (
          <div className="toolbar-top-sheet__compact-title">{title}</div>
        ) : null}
      </div>

      {!isCompact ? (
        <div className="toolbar-top-sheet__heading">
          <div className="toolbar-top-sheet__large-title">{title}</div>
          {hasSupportingText ? (
            <button
              className="toolbar-top-sheet__support"
              type="button"
              aria-label={supportingActionLabel}
              onClick={onSupportingAction}
            >
              <span>{supportingText}</span>
              <Icon aria-hidden="true" name="arrowRight" size={12} />
            </button>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
