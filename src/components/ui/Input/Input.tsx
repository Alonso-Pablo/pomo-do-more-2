import clsx from 'clsx';
import style from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | JSX.Element;
  labelClassName?: string;
  backClassName?: string;
}

export default function Input({
  name,
  label,
  labelClassName,
  className,
  backClassName,
  disabled,
  placeholder,
  value,
  defaultValue,
  required,
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
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}
