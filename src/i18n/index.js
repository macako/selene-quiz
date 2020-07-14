import en from "./en.json";
import es from "./es.json";

const langs = {
  en,
  es,
};

export default function (lang = "es-MX") {
  switch (true) {
    case /en-*/.test(lang.toLowerCase()):
      lang = "en";
      break;
    default:
      lang = "es";
  }

  return langs[lang];
}
