import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueRouter from "vue-router";
import store from './store'

import routes from "./routes.config";

Vue.use(ElementUI);
Vue.use(VueRouter);

axios.defaults.baseURL = "http://127.0.0.1:8899"
Vue.prototype.$axios = axios


const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')