// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'

// import Home from './components/Home' //页面模块应放在Router中引入
import router from './router'

window.BURL = "http://47.104.80.104:8080/";
global.ART = "mcms/article/";
global.PIC = "upload/article/";


Vue.use(infiniteScroll)

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]
//
// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
