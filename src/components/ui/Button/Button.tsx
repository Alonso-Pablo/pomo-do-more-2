import { useState } from 'react'
import clsx from 'clsx'
import style from './Button.module.css'

interface Variants {
  [key: string]: string;
}

const variants: Variants = {
  'text': 'back--text',
  'contained': 'back--contained',
  'outlined': 'back--outlined',
}

interface Heights {
  [key: string]: string[];
}

const heights: Heights = {
  'high': ['animate-pressInHigh', 'animate-pressOutHigh'],
  'normal': ['animate-pressInNormal', 'animate-pressOutNormal'],
  'low': ['animate-pressInLow', 'animate-pressOutLow'],
}

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  labelClassName?: string;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
  children?: React.ReactElement;
  icon?: React.ReactElement;
  height?: 'high' | 'normal' | 'low';
  variant?: 'text' | 'contained' | 'outlined';
}

export default function Button({
  onClick,
  disabled,
  label,
  labelClassName,
  frontClassName,
  backClassName,
  children,
  icon,
  height = 'normal',
  variant = 'contained',
  className,
  ...rest
}: ButtonProps): JSX.Element {
  const [ pressed, setPressed ] = useState<boolean>(false)

  function handleOnClick() {
    if (!disabled) {
      setPressed(!pressed)
      return
    }
    if (!pressed) {
      setPressed(true)
    }
  }

  const content = (
    <div className={clsx(style['content'], disabled && style['content-disabled'])}>
      {label
        ? <>
            {icon && icon}
            <p className={clsx(style['text'], labelClassName && labelClassName, backClassName && backClassName)}>
              {label}
            </p>
          </>
        : <>
            {children}
          </>
      }
    </div>
  )

  return (
    <button
      onClick={handleOnClick}
      className={clsx(style[variants[variant]], className && className, backClassName && backClassName)}
      disabled={disabled}
      {...rest}
    >
      {variant === 'contained'
        ? <div
            className={clsx(
              style['front--contained'],
              disabled
                ? style['front-disabled--contained']
                : (pressed ? heights[height][0] : heights[height][1]),
              frontClassName && frontClassName
            )}
          >
            {content}
          </div>
        : <>
            {content}
          </>
      }
    </button>
  )
}
