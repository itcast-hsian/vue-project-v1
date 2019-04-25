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

router.beforeEach((to, from, next) => {

  if(to.path == "/login"){
    if(localStorage.getItem("username")){
      return next("/")
    }else{
      return next();
    }
  }

  // 用户是否登录
  if(!localStorage.getItem("username")){
    axios({
      url: axios.defaults.baseURL + "/admin/account/islogin",
      withCredentials: true
    }).then((res) => {
      const {code} = res.data;
 
      if(code == "nologin"){
        return next(`/login?returnUrl=${to.path}`);
        //return next(`/login`);
      }
      next();
    })
  }else{
    next();
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')