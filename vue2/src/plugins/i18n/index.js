import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: { en, fr }
})
