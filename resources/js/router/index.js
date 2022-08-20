import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '@/views/HomeView.vue'
import Login from '@/components/pages/Login.vue'
import Dashboard from '@/components/pages/admin/Dashboard.vue'
import AdminSetting from '@/components/pages/admin/AdminSetting.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                if (store.getters['auth/user'].role == 'admin') {
                    return next({
                        name: 'Dashboard'
                    })
                }
                return next({
                    name: 'home'
                })
            }
            next();
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                if (store.getters['auth/user'].role == 'admin') {
                    next();
                } else {
                    return next({
                        name: 'home'
                    })
                }
            } else {
                return next({
                    name: 'Login'
                })
            }

        }

    },
    {
        path: '/admin/setting',
        name: 'AdminSetting',
        component: AdminSetting,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                console.log(store.getters['auth/user'].role)
                if (store.getters['auth/user'].role == 'admin') {
                    next();
                } else {
                    return next({
                        name: 'home'
                    })
                }
            } else {
                return next({
                    name: 'Login'
                })
            }

        }
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router