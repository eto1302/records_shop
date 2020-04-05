import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'
const fb = require('./firebaseConfig.js')
import { store } from './store.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        user;
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})