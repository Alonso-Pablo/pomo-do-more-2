import clsx from "clsx";

interface InputProps {
  label?: string | JSX.Element;
  labelClassName?: string;
  className?: string;
  disabled?: boolean;
}

export default function Input({ label, labelClassName, className, disabled, ...rest }: InputProps) {
  return (
    <label className={"flex flex-col " + clsx(labelClassName && labelClassName)}>
      {label && <span>{label}</span>}
      <div className="bg-gray-300 rounded">
        <input
          className={"w-full relative top-0.5 rounded text-black py-1 pl-2" + clsx(className && className)}
          disabled={disabled}
          {...rest}
        />
      </div>
    </label>
  )
}