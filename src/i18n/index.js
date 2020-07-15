import en from "./en.json";
import es from "./es.json";

const langs = {
  en,
  es,
};

export default function (lang = "en-US") {
  switch (true) {
    case /es-*/.test(lang.toLowerCase()):
      lang = "es";
      break;
    default:
      lang = "en";
  }

  return langs[lang];
}
