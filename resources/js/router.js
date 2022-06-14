import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: () => import('./pages/Main'), name: 'main'},
        {path: '/article/:id', component: () => import('./pages/Article'), name: 'article'},
        {path: '/admin/profile', component: () => import('./pages/Admin'), name: 'admin'},
        {path: '/login', component: () => import('./pages/Login'), name: 'login'},
        {path: '/registration', component: () => import('./pages/Registration'), name: 'registration'},
        {path: '*', component: () => import('./pages/Main')},
    ]
})

export default route
