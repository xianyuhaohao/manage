// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import echarts from 'echarts';
import * as custom from '@/common/filters' 
import {get,post} from '@/utils/http' 
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/reset.css'
// 全局注册时间戳
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.prototype.bus=new Vue()
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$get = get
Vue.prototype.$post=post


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
