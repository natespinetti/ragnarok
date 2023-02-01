export type ThemeName =
//   | "blue"
//   | "cyan"
//   | "dark pink"
//   | "green"
//   | "navy"
//   | "orange"
//   | "purple"
//   | "red"
//   | "tan"
//   | "yellow"
  | "transparent"
  | "default"
  | "dark";

export const getTheme: Record<
  ThemeName,
  [background: string, foreground: string, accent: string]
> = {
//   "dark pink": ["raspberry.700", "white", "raspberry.200"],
//   cyan: ["lightblue.400", "navy.800", "orange.400"],
//   orange: ["orange.200", "navy.800", "orange.600"],
//   navy: ["navy.800", "white", "yellow.500"],
//   purple: ["humanity.500", "white", "raspberry.200"],
//   yellow: ["yellow.500", "navy.800", "orange.400"],
//   red: ["red.600", "white", "raspberry.200"],
//   blue: ["blue.600", "white", "green.400"],
//   green: ["green.400", "navy.800", "navy.700"],
//   tan: ["tan.300", "inherit", "orange.400"],
  default: ["brand.gray", "brand.yellow", "brand.plum"],
  transparent: ["transparent", "brand.white", "brand.yellow"],
  dark: ["brand.gray", "brand.yellow", "brand.plum"],
};