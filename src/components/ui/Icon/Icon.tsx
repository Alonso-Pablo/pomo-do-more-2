import Plus from '@components/icons/Plus'

interface Icons {
  [key: string]: () => JSX.Element
}

const icons: Icons = {
  'plus': Plus,
}

interface IconProps {
  icon: keyof Icons;
  className?: string;
}

export default function Icon({ icon, className }: IconProps) {
  return (
    <i className={className}>{icons[icon]()}</i>
  )
}
