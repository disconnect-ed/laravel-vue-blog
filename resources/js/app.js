import Vue from 'vue'
import Index from "./Index";

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Index
    }
})
