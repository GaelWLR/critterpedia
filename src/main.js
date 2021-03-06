import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBone,
  faHome,
  faFish,
  faBug,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortNumericDown,
  faSortNumericUp,
  faSortDown,
  faSortUp,
  faSort
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// eslint-disable-next-line no-undef
require('./assets/css/common.scss')

Vue.config.productionTip = false

library.add(
  faBone,
  faHome,
  faFish,
  faBug,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortNumericDown,
  faSortNumericUp,
  faSortDown,
  faSortUp,
  faSort
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
