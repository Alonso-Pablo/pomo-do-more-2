import clsx from 'clsx';
import style from './Panel.module.css';

interface Variants {
  [key: string]: string[];
}

const variants: Variants = {
  sunken: ['back--sunken', 'front--sunken'],
  elevated: ['back--elevated', 'front--elevated']
};

interface PanelProps {
  children?: React.ReactNode | React.ReactNode[];
  backClassName?: string;
  frontClassName?: string;
  variant?: 'sunken' | 'elevated';
  onClick?: () => void;
}

export default function Panel({ children, backClassName, frontClassName, variant = 'elevated', onClick, ...rest }: PanelProps) {
  return (
    <div className={clsx(style[variants[variant][0]], backClassName && backClassName)} onClick={onClick} {...rest}>
      <div className={clsx(style[variants[variant][1]], frontClassName && frontClassName)}>{children}</div>
    </div>
  );
}
