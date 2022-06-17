import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: () => import('./pages/Main'), name: 'main'},
        {path: '/article/:id', component: () => import('./pages/Article'), name: 'article'},
        {path: '/admin/profile', component: () => import('./pages/Admin/AdminProfile'), name: 'admin.profile'},
        {path: '/login', component: () => import('./pages/Login'), name: 'login'},
        {path: '/registration', component: () => import('./pages/Registration'), name: 'registration'},
        {path: '*', component: () => import('./pages/Main')},
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token')
    if (!token) {
        if (to.name === 'admin.profile') {
            return next({
                name: 'login'
            })
        }
    }
    if (token) {
        if (to.name === 'registration' || to.name === 'login') {
            return next({
                name: 'main'
            })
        }
    }

    next()
})

export default router
