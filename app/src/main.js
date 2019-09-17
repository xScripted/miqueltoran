import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDraggable from 'vue-draggable'
/* ICONS */
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/check' 
import 'vue-awesome/icons/times'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('v-icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
