import React from "react";
import "./index.css";
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange: () => void;
  className?: string;
}
const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          role="switch"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={checked}
          onChange={onChange}
        />
        <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
      <label>{label}</label>
    </div>
  );
};
export default Switch;
