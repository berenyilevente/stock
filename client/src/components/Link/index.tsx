import { FC, MouseEventHandler } from "react";
import { Text } from "components";
import {
  ColorTypes,
  TextTransformTypes,
  SizeTypes,
  FontStyleTypes,
} from "../Text/types";

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: ColorTypes;
  textTransform?: TextTransformTypes;
  fontSize?: SizeTypes;
  fontStyle?: FontStyleTypes;
}

const Link: FC<Props> = ({
  children,
  className,
  onClick,
  color,
  textTransform,
  fontSize,
  fontStyle,
}) => (
  <span
    className={`${fontStyle} cursor-pointer ${className}`}
    onClick={onClick}
  >
    <Text
      fontStyle={fontStyle}
      color={color}
      textTransform={textTransform}
      fontSize={fontSize}
    >
      {children}
    </Text>
  </span>
);

export default Link;
