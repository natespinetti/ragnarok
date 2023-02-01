export type ThemeName =
  | "transparent"
  | "default"
  | "dark";

export const getTheme: Record<
  ThemeName,
  [background: string, foreground: string, accent: string]
> = {
  default: ["brand.gray", "brand.yellow", "brand.plum"],
  transparent: ["transparent", "brand.white", "brand.yellow"],
  dark: ["brand.gray", "brand.yellow", "brand.plum"],
};

export default ThemeName;