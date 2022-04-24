import { FC } from "react";
import {
  FontStyleTypes,
  LetterSpacingTypes,
  LineHeightTypes,
  SizeTypes,
  ColorTypes,
  TextTransformTypes,
  TextOverflowTypes,
  TextWhitespaceTypes,
} from "./types";

interface Props {
  lineHeight?: LineHeightTypes;
  fontStyle?: FontStyleTypes;
  letterSpacing?: LetterSpacingTypes;
  fontSize?: SizeTypes;
  color?: ColorTypes;
  className?: string;
  textTransform?: TextTransformTypes;
  textOverflow?: TextOverflowTypes;
  whitespace?: TextWhitespaceTypes;
}

const Text: FC<Props> = ({
  lineHeight,
  fontStyle,
  letterSpacing,
  color,
  children,
  className,
  fontSize,
  textTransform,
  textOverflow,
  whitespace,
}) => (
  <span
    className={`${lineHeight}
      ${color}
      ${fontStyle}
      ${letterSpacing}
      ${className}
      ${color}
      ${fontSize}
      ${textTransform}
      ${textOverflow}
      ${whitespace}
      font-sans`}
  >
    {children}
  </span>
);

export default Text;
