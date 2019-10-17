const utilMd5 = require('./md5.js');
const apiUrl = 'https://oatest.chinanurse.cn';
// const apiUrl = 'https://api.chinanurse.cn';
//封装header参数
function header() {
  var sginArr = {
    'device-type': 'wxapp',
    'ts': Date.parse(new Date()) / 1000,
    'version': '1.0.1',
    'salt': 'chinanursecn!@#$'
  };
  let tempStr = '';
  for (let i in sginArr) {
    tempStr += i + '=' + sginArr[i];
  }
  tempStr = utilMd5.hexMD5(tempStr);
  var sign = tempStr.substr(tempStr.length - 8) + tempStr.substr(8, tempStr.length - 16) + tempStr.substr(0, 8);
  sginArr.sign = sign;
  sginArr.device_type = 'wxapp';
  return sginArr
}
//发送验证码
function code(that) {
  var currentTime = that.data.currentTime;
  that.setData({
    time: currentTime + 'S后重发',
    disabled: true
  })
  var interval = setInterval(function() {
    that.setData({
      time: (currentTime - 1) + 'S后重发'
    })
    currentTime--;
    if (currentTime <= 0) {
      clearInterval(interval)
      that.setData({
        time: '重新获取',
        currentTime: 59,
        disabled: false
      })
    }
  }, 1000)
  return interval
}

function api(url, data, callback) {
  let signObj = header();
  // setTimeout(function() {
  //   wx.getNetworkType({
  //     success(res) {
  //       let networkType = res.networkType;
  //       console.log(networkType)
  //       if (networkType == 'none') {
  //         wx.showLoading({
  //           title: '请检查您的网络...',
  //           icon: 'none',
  //         })
  //       } else {
  //         clearTimeout()
  wx.request({
    url: apiUrl + url,
    method: 'post',
    data: data,
    header: {
      'device-type': signObj.device_type,
      'ts': signObj.ts,
      'version': signObj.version,
      'token': wx.getStorageSync('token'),
      'sign': signObj.sign,
    },
    success: function(res) {
      // wx.hideLoading();
			if (res.data.code == 10000){
				wx.setStorageSync('token', '');
				wx.showToast({
					title: '请重新登录',
					icon:'none',
					duration:1500
				})
				setTimeout(function(){
					wx.reLaunch({
						url: '/pages/login/login',
					})
				},1000);
				return false;
			}else{
				return typeof callback == "function" && callback(res.data);
			}
    },
    fail: function() {
      return typeof callback == "function" && callback(false);
    }
  });
  // }
  // },
  //     fail: function(err) {
  //       console.log(err)
  //       wx.showLoading({
  //         title: '请检查您的网络...',
  //         icon: 'none',
  //       })
  //     }
  //   })
  // }, 3000)

}

var config = {
  code: code,
  header: header,
  api: api,
  apiUrl: apiUrl
};

module.exports = config //有了这句话，就代表着，这个页面的内容可以被外部引用，很关键的哦。