import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
