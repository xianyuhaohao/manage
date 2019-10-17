import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

axios.defaults.headers['Content - Type'] = 'application / x - www - form - urlencoded'
service.interceptors.request.use(function (config) {

    config.headers['version'] = 'v1.0';
    if (localStorage.getItem("user - token")) {
        config.headers['user - token'] = localStorage.getItem("user - token");
    }
    if (localStorage.getItem("access - token")) {
        config.headers['access - token'] = localStorage.getItem('access - token') || '';
    }
    config.headers['plat - form'] = 2;
    return config
}, function (error) {
    return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
    /**
    
    下面的注释为通过在response里，自定义code来标示请求状态
    当code返回如下情况则说明权限有问题，登出并返回到登录页
    如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
    */
    response => {
        const res = response.data
    }
    return response
},
// response => {
// const res = response.data
// if (res.code !== 20000) {
// })
// // 50008:非法的token; 50012:其他客户端登录了; 50014:Token 过期了;
// if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
// }).then(() => {
// })
// })
// }
// return Promise.reject('error')
// } else {
// return response.data
// }
// },

function (error) {
    console.log('err' + error)
    Message({
        Message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})
export default {
    //get请求
    get(url, params) {
        //promise示例
        // axios.post('/user', {
        // firstName: 'Fred',
        // lastName: 'Flintstone'
        // })
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params,
            }).then(res => { //axios返回的是一个promise对象
                resolve(res) //resolve在promise执行器内部
            }).catch(err => {
                console.log(err, '异常')
            })

        })
        1
    },
    //post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url,
                data: param,
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err, '异常')
            })
        })
    }
}
export {
    post,
    get,
    service
}


————————————————
版权声明：本文为CSDN博主「Huang_John」的原创文章，遵循 CC 4.0 BY - SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Huang_John/article/details/96427468