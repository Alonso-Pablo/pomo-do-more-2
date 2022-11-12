import { useState } from 'react';
import clsx from 'clsx';
import style from './Button.module.css';

interface Variants {
  [key: string]: string;
}

const variants: Variants = {
  text: 'back--text',
  contained: 'back--contained',
  outlined: 'back--outlined'
};

interface Heights {
  [key: string]: string[];
}

const heights: Heights = {
  high: ['animate-pressInHigh', 'animate-pressOutHigh'],
  normal: ['animate-pressInNormal', 'animate-pressOutNormal'],
  low: ['animate-pressInLow', 'animate-pressOutLow']
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  label?: string;
  labelClassName?: string;
  frontClassName?: string;
  backClassName?: string;
  icon?: React.ReactElement;
  height?: 'high' | 'normal' | 'low';
  variant?: 'text' | 'contained' | 'outlined';
  type?: 'button' | 'submit' | 'reset';
  isPressed?: boolean;
}

export default function Button({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  disabled,
  label,
  labelClassName,
  className,
  frontClassName,
  backClassName,
  children,
  icon,
  height = 'normal',
  variant = 'contained',
  type = 'button',
  isPressed,
  ...rest
}: ButtonProps): JSX.Element {
  const [pressed, setPressed] = useState<boolean>(isPressed || false);

  function handleOnClick() {
    if (!disabled) {
      setPressed(!pressed);
      if (onClick) {
        onClick();
      }
      return;
    }
    if (!pressed) {
      setPressed(true);
    }
  }

  const content = (
    <>
      {label ? (
        <>
          {icon && icon}
          <p className={clsx(style['text'], labelClassName && labelClassName, backClassName && backClassName)}>{label}</p>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );

  return (
    <button
      onClick={handleOnClick}
      className={clsx(style[variants[variant]], className && className, backClassName && backClassName)}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {variant === 'contained' ? (
        <div
          className={clsx(
            style['front--contained'],
            disabled ? style['front-disabled--contained'] : pressed ? heights[height][0] : heights[height][1],
            frontClassName && frontClassName
          )}
        >
          {content}
        </div>
      ) : (
        <>{content}</>
      )}
    </button>
  );
}
