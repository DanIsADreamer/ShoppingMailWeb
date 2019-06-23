import Vue from 'vue'
import App from './App'
import router from './router'

//导入Axios
import  Axios from 'axios'
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
