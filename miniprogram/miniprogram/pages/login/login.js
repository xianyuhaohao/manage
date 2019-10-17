const request = require('../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function(e) {
    let username = e.detail.value.username,
      password = e.detail.value.password;
    if (username == "") {
      wx.showToast({
        title: '账号不能为空',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    if (password == "") {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    request.api('/api/admin/user/userLogin', {
      username,
      password
    }, (res) => {
      wx.showToast({
        title: res.msg,
        icon: 'none',
        duration: 1500
      })
      if (res.code == 1) {
        wx.setStorageSync('token', res.data.token);
        wx.setStorageSync('user_type', res.data.user_type);
				if (res.data.user_type == 1){	//超级管理
					wx.reLaunch({
						url: '/pages/admin/admin',
					})
				}else{
					wx.reLaunch({
						url: '/pages/index/index',
					})
				}
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (wx.getStorageSync('token')) {
			if (wx.getStorageSync('user_type') == 1) {//超级管理
        wx.reLaunch({
					url: '/pages/admin/admin',
        })
      } else {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})