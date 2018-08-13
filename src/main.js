// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// import 'material-design-icons/iconfont/material-icons.css'
// import 'typeface-roboto/index.css'

import {
  store
} from './store'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {
    App
  },
  template: '<App/>',

})
