import Vue from 'vue'
import VueMaterial from 'vue-material'
import router from './router/index'
import App from './App.vue'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false;
Vue.use(VueMaterial)
/** Синхронизируем роутер и store **/
sync(store,router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
