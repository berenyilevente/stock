import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: FC<Props> = ({
  children,
  onClick,
  className,
  variant,
  type = "button",
}) => {
  switch (variant) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className={`${className} p-2 rounded-lg  border border-blue-400`}
          type={type}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={onClick}
          className={`${className} p-2 rounded-lg underline`}
          type={type}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          className={`${className} p-2 rounded-lg  border border-blue-400`}
          type={type}
        >
          {children}
        </button>
      );
  }
};

export default Button;
