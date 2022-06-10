import Vue from 'vue'
import Index from "./Index";
import {BootstrapVue} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Index
    }
})

Vue.use(BootstrapVue)
