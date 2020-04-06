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

let app;
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

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.recordsCollection.onSnapshot(querySnapshot => {
            let recordsArray = []

            querySnapshot.forEach(doc => {
                let record = doc.data()
                record.id = doc.id
                recordsArray.push(record)
            })

            store.commit('setRecords', recordsArray)
        })
        fb.ordersCollection.onSnapshot(querySnapshot => {
            let ordersArray = []

            querySnapshot.forEach(doc => {
                let order = doc.data()
                order.id = doc.id
                ordersArray.push(order)
            })

            store.commit('setOrders', ordersArray)
        })
    }
})