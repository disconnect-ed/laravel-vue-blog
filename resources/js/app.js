import Vue from 'vue'
import Index from "./Index";
import {BootstrapVue} from 'bootstrap-vue'
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./bootstrap');

Vue.use(BootstrapVue)

const app = new Vue({
    el: '#app',
    components: {
        Index
    },
    router
})
