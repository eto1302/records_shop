import VueRouter from 'vue-router';

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import RecordsCreate from './components/Records/Create.vue'
import RecordsAll from './components/Records/All.vue'
import RecordsDetails from './components/Records/Details.vue'

import OrdersAll from './components/Orders/All.vue'
import OrdersDetails from './components/Orders/Details.vue'

import ErrorComponent from './components/Error.vue'
import firebase from 'firebase'


const router = new VueRouter({
    routes: [
        {
            path: '*',
            component: ErrorComponent
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/records/create',
            component: RecordsCreate,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/records/all',
            component: RecordsAll,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/records/details/:id',
            component: RecordsDetails,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/orders/all',
            component: OrdersAll,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/orders/details/:id',
            component: OrdersDetails,
            meta: {
                requiresAuth: true
            }
        },
    ],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;