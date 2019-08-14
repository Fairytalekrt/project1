import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios';
import ElementUI from 'element-ui';
import "babel-polyfill";


import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(ElementUI,{
  size:'small'
});
Vue.prototype.$axios=axios;

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
