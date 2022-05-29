import clsx from "clsx"
import style from './Input.module.css'

interface InputProps {
  name?: string;
  label?: string | JSX.Element;
  labelClassName?: string;
  className?: string;
  backClassName?: string;
  disabled?: boolean;
  placeHolder?: string;
}

export default function Input({
  name,
  label,
  labelClassName,
  className,
  backClassName,
  disabled,
  placeHolder,
  ...rest
}: InputProps) {
  return (
    <label className={clsx(style['label'], labelClassName && labelClassName)}>
      {label && <span>{label}</span>}
      <div className={clsx(style['container-input'], backClassName && backClassName)}>
        <input
          name={name}
          className={clsx(style['input'], className && className)}
          disabled={disabled}
          placeholder={placeHolder}
          {...rest}
        />
      </div>
    </label>
  )
}