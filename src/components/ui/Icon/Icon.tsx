import ArrowEnter from '@components/icons/ArrowEnter'
import Grip from '@components/icons/Grip'
import OptionVertical from '@components/icons/OptionVertical'
import Plus from '@components/icons/Plus'
import PomoCompleted from '@components/icons/PomoCompleted'
import PomoTargeted from '@components/icons/PomoTargeted'
import clsx from 'clsx'

interface Icons {
  [key: string]: () => JSX.Element
}

const icons: Icons = {
  'plus': Plus,
  'grip': Grip,
  'arrow-enter': ArrowEnter,
  'option-vertical': OptionVertical,
  'pomo-completed': PomoCompleted,
  'pomo-targeted': PomoTargeted,
}

interface IconProps {
  icon: keyof Icons;
  className?: string;
}

export default function Icon({ icon, className, ...rest }: IconProps) {
  return (
    <i className={clsx(className && className)} {...rest}>
      {icons[icon]()}
    </i>
  )
}
