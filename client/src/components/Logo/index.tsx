import { FC, MouseEventHandler } from "react";
import * as logoMap from "./logos/siteLogos";
import { ColorTypes } from "../Text/types";
interface Props {
  logoType: keyof typeof logoMap;
  onClick?: MouseEventHandler<HTMLDivElement>;
  colorStyle?: ColorTypes;
}

const Logo: FC<Props> = ({ onClick, logoType, colorStyle }) => (
  <div className={`cursor-pointer, ${colorStyle}`} onClick={onClick}>
    {logoMap[logoType]}
  </div>
);

export default Logo;
