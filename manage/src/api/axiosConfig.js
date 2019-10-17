require('es6-promise').polyfill();
import axios from 'axios';
import Vue from 'vue';
import { Loading ,Message,MessageBox} from 'element-ui';
import Qs from 'qs';

function isIE() { //ie?
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
}
var isIE=isIE();
var url=window.location.href;
var isurl=true;
if(url.indexOf('homePage')>0 ||url.indexOf('member')>0 ||url.indexOf('patentSearch')>0){
  isurl=false
}
//
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
// let loadingInstance;
// axios 配置

axios.defaults.timeout = 50000;
axios.defaults.paramsSerializer = function (params) {
  return Qs.stringify(params, { arrayFormat: 'indices',allowDots: true })
};
// axios.defaults.baseURL = 'http://101.201.56.225';
axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.transformRequest= [function (data,headers) {
    /*console.log(headers);*/

    return JSON.stringify(data);
}];
// http request 拦截器
axios.interceptors.request.use(
  config => {
    //在发送请求之前做某事，比如说 设置loading
    // if(!isIE && isurl){
    //   loadingInstance = Loading.service({
    //     lock:true,
    //     text: '加载中',
    //     background: 'rgba(0, 0, 0, 0.4)',
    //   })
    // };
    replacePathVars(config);
    return config;
  },
  err => {
    //请求错误做哪些事情
    if(!isIE && isurl){
      // loadingInstance.close();
    };

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    //对响应数据做些事，比如说把loading动画关掉
    if(!isIE && isurl){
      // loadingInstance.close();
    };
    return response;
    // //console.log(response.code)

  },
  error => {
    if(!isIE && isurl){
      // loadingInstance.close();
    };
    //请求错误
    if (error.response) {
      switch (error.response.status) {
        case 400:
          Message({
            message: "请求错误",
            type: 'error',
            duration: 3 * 1000
          });
          break

        case 401:
          MessageBox.confirm('您尚未登录，请先登录', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            window.location.href = '/login';
          }).catch(() => {

          });
          break

        case 403:
          Message({
            message: "拒绝访问",
            type: 'error',
            duration: 3 * 1000
          })
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          //error.message = '服务器内部错误'
        case 501:
          //error.message = '服务未实现'
        case 502:
          //error.message = '网关错误'
        case 503:
          //error.message = '服务不可用'
        case 504:
          //error.message = '网关超时'
        case 505:
          //error.message = 'HTTP版本不受支持'
        default:
          Message({
            message: "服务器内部错误，请稍后重试",
            type: 'error',
            duration: 5 * 1000
          });
      }

      /*if(isIE){
        if (error.response.status.toString().substr(0,1)=="4" || error.response.status.toString().substr(0,1)=="5") {
          if(error.response.status.toString()=="403"){
            if(error.response.data.code==2000){
              MessageBox.confirm('您尚未登录，请先登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                window.location.href = '/module/etc/login.html?backurl=' + window.location.href;
              }).catch(() => {

              });


            }else if(error.response.data.code == 3000 ){
              MessageBox.confirm('您没有权限', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                // window.location.href = '/module/etc/login.html?backurl=' + window.location.href;
              }).catch(() => {

              });
            }else if(error.response.data.code == 2017){
              Message({
                message: "您的账户已冻结,请您联系平台！",
                type: 'error',
                duration: 5 * 1000
              })
            }
          } else if(error.response.status.toString()=="401"){

            Message({
              message: "账户名和密码不符，请重新输入",
              type: 'error',
              duration: 5 * 1000
            })
          }else{
            Message({
              message: "服务器内部错误，请稍后重试",
              type: 'error',
              duration: 5 * 1000
            })
          }



        }
      }else{
        if (error.response.status.toString().startsWith('4') || error.response.status.toString().startsWith('5')) {
          if(error.response.status.toString()==403){
            if(error.response.data.code==2000){
              MessageBox.confirm('您尚未登录，请先登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                window.location.href = '/module/etc/login.html?backurl=' + window.location.href;
              }).catch(() => {

              });


            }else if(error.response.data.code == 3000 ){
              MessageBox.confirm('您没有权限', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                // window.location.href = '/module/etc/login.html?backurl=' + window.location.href;
              }).catch(() => {

              });
            }else if(error.response.data.code == 2017){
              Message({
                message: "您的账户已冻结,请您联系平台！",
                type: 'error',
                duration: 5 * 1000
              })
            }
          } else if(error.response.status.toString()==401){
            Message({
              message: "账户名和密码不符，请重新输入",
              type: 'error',
              duration: 5 * 1000
            })
          }else{
            Message({
              message: "服务器内部错误，请稍后重试",
              type: 'error',
              duration: 5 * 1000
            })
          }



        }
      }*/
    }
    return Promise.reject(error.response)
  });

function replacePathVars(config) {
  let params = config.params||{};
  // debugger;
  if (config.data != undefined) {
    params = config.data;
  }
  config.url = config.url.replace(/{([^{}]+)}/g, function (a, b, index, input) {
    let val = params[b];
    if (val != undefined && val != null) {
      delete params[b];
      return val;
    }
    return a;
  });
}

// $.each(['delete', 'get', 'head', 'options'], function (i, method) {
//   axios[method] = function (url, params, config) {
//     return axios.request($.extend({}, config || {}, {
//       method: method,
//       url: url,
//       params: params
//     }));
//   };
// });

export default axios;
