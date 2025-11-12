import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAnchor,
  faBone,
  faBug,
  faFish,
  faHome,
  faPalette,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortDown,
  faSortNumericDown,
  faSortNumericUp,
  faSortUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/css/common.scss'

Vue.config.productionTip = false

library.add(
  faAnchor,
  faBone,
  faBug,
  faFish,
  faHome,
  faPalette,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortDown,
  faSortNumericDown,
  faSortNumericUp,
  faSortUp
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
