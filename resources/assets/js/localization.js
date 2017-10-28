import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enTranslation from './translations/en'
import cnTranslation from './translations/cn'

Vue.use(VueI18n)

export default new VueI18n({
  locale: window.locale || 'en',
  messages: {
    en: enTranslation,
    cn: cnTranslation
  }
})
