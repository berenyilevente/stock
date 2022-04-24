import { FC, ReactNode } from "react";

interface Props {
  logo?: ReactNode;
  navigationItems?: ReactNode;
}

const NavigationLayout: FC<Props> = ({ logo, navigationItems }) => (
  <div className="bg-white">
    <div className="container mx-auto h-14 grid grid-cols-4">
      <div className="flex items-center col-span-2">{logo}</div>
      <div className="flex items-center justify-between col-span-2">
        {navigationItems}
      </div>
    </div>
  </div>
);

export default NavigationLayout;
