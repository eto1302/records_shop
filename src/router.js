import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import RecordsCreate from './components/Records/Create.vue'


const router = new VueRouter({
    routes: [
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
            component: RecordsCreate
        },
    ],
    mode: 'history'
});

export default router;