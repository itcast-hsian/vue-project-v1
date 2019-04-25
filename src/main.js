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
// 添加请求拦截器
let loading;
axios.interceptors.request.use(function (config) {
  loading = ElementUI.Loading.service({
    body: true,
    text: "加载中",
  })
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loading.close();
  return response;
});

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
    return next(`/login?returnUrl=${to.path}`);
  }else{
    next();
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')