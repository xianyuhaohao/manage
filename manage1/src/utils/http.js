import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = ''; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization


//请求拦截
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});
// 请求拦截
// axios.interceptors.request.use(
//     config => {
//         // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//         //config.data = JSON.stringify(config.data);
//         let token = localStorage.token;
//         //let token = 'xxx';
//         let appid = 'xxx';
//         let appID = decodeURIComponent(appid);
//         config.headers.token = token;
//         //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//         if (config.method == 'get') {
//             config.params.app_id = appID
//             config.params.token = token
//         }
//         if (config.method == 'post') {
//             config.data.token = token
//             config.data.app_id = appID
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(err);
//     }
// );

// get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

// post请求
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

// 调用
// this.$get(url).then((response) => {

// }
// })

// this.$post(url, data).then((response) => {

// }
// })