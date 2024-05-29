import 'server-only'

import { Locale, i18n } from "@/config/i18n.configs";
import { defaultDictionary } from "./default-dictionaries";

export const getDictionaryUseServerOnly = (locale: Locale) => {
  return defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale];
};
