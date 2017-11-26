// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import VueTaber from 'vue-tabs'
import 'vue-tabs/vue-tabs.css'
import tabs from './tabs.js' 
import Promise from 'promise-polyfill'; 

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const vueTaber = new VueTaber({
    tabs,
    persist: false
})

vueTaber.beforeCreateEach((tab, next) => {
  // if (tab.name === 'setting') {
  //     next('home')
  // } else {
  //     next()
  // }
  next()
})
 
Vue.use(VueTaber)
Vue.use(Vuex);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  taber:vueTaber,
  template: '<App/>',
  components: { App }
})

