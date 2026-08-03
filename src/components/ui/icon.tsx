import {
  HugeiconsIcon,
  type HugeiconsIconProps,
} from '@hugeicons/react'
import { momcozyIcons, type MomcozyIconName } from '../../lib/icons'

type IconProps = Omit<HugeiconsIconProps, 'icon'> & {
  name: MomcozyIconName
}

export function Icon({ name, strokeWidth = 1.7, ...props }: IconProps) {
  return (
    <HugeiconsIcon
      icon={momcozyIcons[name]}
      strokeWidth={strokeWidth}
      {...props}
    />
  )
}

