import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import CustomModal from './components/ui/Modal.vue';

Vue.component('CustomModal', CustomModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
