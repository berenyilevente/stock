import { FC, MouseEventHandler } from "react";
import * as iconMap from "./icons/icons";
interface Props {
  iconType: keyof typeof iconMap;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const Icon: FC<Props> = ({ iconType, onClick, className }) => (
  <div className={className} onClick={onClick}>
    {iconMap[iconType]}
  </div>
);

export default Icon;
