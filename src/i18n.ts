import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "de", "ja", "fr"],
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["common"],
        defaultNS: "common",
        fallbackLng: ["en", "de", "ja", "fr"],
    });

export default i18n;
