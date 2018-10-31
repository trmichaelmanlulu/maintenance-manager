// core
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue-awesome
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add
library.add(faCoffee)

// component
Vue.component('icon', Icon);
Vue.component('fa', FontAwesomeIcon)

// use
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
