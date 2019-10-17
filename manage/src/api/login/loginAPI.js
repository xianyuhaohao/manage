import axios from '../axiosConfig';
import common from '../../common/js/common'
import utilMd5 from '../../common/js/md5'
import Qs from 'qs'

/**
 * 登录相关接口
 */
export default {
  header: function () {
    var sginArr = {
      'device-type': 'pc',
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
    sginArr.device_type = 'pc';
    return sginArr
  },
  // 登录
  login: function (params) {
    let signObj = header();
    var url = `${common.SIPOPAPI_Base.manage}/api/admin/user/userLogin`;
    return axios.post(url, params, {
      headers: {
        'device-type': signObj.device_type,
        'ts': signObj.ts,
        'version': signObj.version,
        'sign': signObj.sign,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      transformRequest: [function (data, headers) {
        return Qs.stringify(data);
      }],
    });
  },
  // 退出
  logout: function (params) {
    var url = `${common.SIPOPAPI_Base.manage}/admin/logout`;
    return axios.get(url, params);
  },
  // 获取用户详情
  me: function (params) {
    var url = `${common.SIPOPAPI_Base.manage}/admin/detail`;
    return axios.get(url, params);
  }
};
