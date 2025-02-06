import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/demos/admin-templates/materially/react/free/locales/{{lng}}/translation.json'
    },
    debug: true
  });
export default i18next;
