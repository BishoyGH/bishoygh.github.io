import { getRelativeLocaleUrl } from "astro:i18n";

export default {
  en: [
    { name: "home", url: getRelativeLocaleUrl("en") },
    { name: "portfolio", url: getRelativeLocaleUrl("en", "portfolio") },
    { name: "blog", url: getRelativeLocaleUrl("en", "blog") },
  ],
  ar: [
    { name: "الرئيسية", url: getRelativeLocaleUrl("ar") },
    { name: "معرض الأعمال", url: getRelativeLocaleUrl("ar", "portfolio") },
    { name: "المقالات", url: getRelativeLocaleUrl("ar", "blog") },
  ],
};
