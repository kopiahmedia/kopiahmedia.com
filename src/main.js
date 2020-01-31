import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VModal from 'vue-js-modal';

Vue.use(VModal);

Vue.config.productionTip = false
Vue.component('header', './components/HeaderBar.vue');

new Vue({
  render: h => h(App),
}).$mount('#app')
