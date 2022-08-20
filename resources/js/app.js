import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
    color: "blue",
    failedColor: "#874b4b",
    thickness: "6px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};


import './store/subscriber';

axios.defaults.baseURL = "/api/"

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(VueAxios, axios)
    app.use(VueProgressBar, options)
    app.mount('#app')
})