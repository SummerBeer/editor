import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import './icons/index.js'
import '../node_modules/element-ui/packages/theme-chalk/src/index.scss'

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
