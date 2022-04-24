import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  className,
  ...rest
}) => (
  <div
    className={`rounded-lg border-2 border-blackLighter relative p-2 mb-4 bg-white ${className}`}
  >
    <label className={""}>{label}</label>
    <input
      value={value}
      className="border-none outline-none w-full text-blackLight"
      name={name}
      type={type}
      onChange={onChange}
      {...rest}
    ></input>
  </div>
);
export default Input;
