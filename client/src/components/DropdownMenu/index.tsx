import { Icon } from "components";
import React, { FC, ReactNode, useRef } from "react";
import { useOutsideClickHandler } from "utils";

interface DropdownMenuProps {
  menuItems: ReactNode;
  className?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ menuItems, className }) => {
  const refDropdown = useRef(null);
  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  return (
    <div className={`grid content-center ${className} relative`} ref={ref}>
      <Icon
        iconType="menuIcon"
        onClick={() => setVisible(!visible)}
        className="cursor-pointer"
      ></Icon>
      {visible ? (
        <div
          ref={refDropdown}
          className="absolute z-50 right- mt-8 border border-slate-400 rounded-lg bg-white border-blackLight-1"
        >
          <div className="pb-2 px-4 flex flex-col">{menuItems}</div>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
