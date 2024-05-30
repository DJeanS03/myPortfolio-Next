import USAFlag from "@/assets/language-toggle/usa-flag.svg";
import BrazilFlag from "@/assets/language-toggle/brazil-flag.svg";
import { i18n } from "@/config/i18n.configs";

export const flag = {
  "en-US": `${USAFlag}`,
  "pt-BR": `${BrazilFlag}`,
};

export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) => {
  return { code, ico: flag[code as FlagKey] };
});
