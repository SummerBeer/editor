import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import store from '@/store/index.js';
import './icons/index.js'
import '../node_modules/element-ui/packages/theme-chalk/src/index.scss'
import '@/directive/index.js';
import '@/assets/scss/index.scss';

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
