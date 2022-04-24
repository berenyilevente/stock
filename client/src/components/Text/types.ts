export type SizeTypes =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

export type FontStyleTypes =
  | "italic"
  | "not-italic"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold";

export type LetterSpacingTypes =
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide";

export type LineHeightTypes =
  | "leading-normal"
  | "leading-relaxed"
  | "leading-loose";


export type ColorTypes =
  | `text-blue-400`
  | `text-blue-500`
  | `text-blue-600`
  | `text-sky-400`
  | `text-sky-500`
  | `text-sky-600`
  | `text-cyan-400`
  | `text-cyan-500`
  | `text-cyan-600`
  | `text-teal-400`
  | `text-teal-500`
  | `text-teal-600`
  | `text-emerald-400`
  | `text-emerald-500`
  | `text-emerald-600`
  | `text-green-400`
  | `text-green-500`
  | `text-green-600`
  | `text-yellow-400`
  | `text-yellow-500`
  | `text-yellow-600`
  | `text-red-400`
  | `text-red-500`
  | `text-red-600`
  | `text-neutral-50`
  | `text-neutral-200`
  | `text-neutral-500`
  | `text-neutral-900`

export type TextTransformTypes =
"uppercase" | "lowercase"| "capitalize"| "normal-case"

export type TextOverflowTypes =
"truncate" | "text-ellipsis"| "text-clip"

export type TextWhitespaceTypes =
"whitespace-normal" | "whitespace-nowrap"| "whitespace-pre" | "whitespace-pre-line" | "whitespace-pre-wrap"
