Page({
  toggle(e) {
    console.log(e)
    this.setData({
      num: e.currentTarget.dataset.idx
    })
  },
  detail() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    topheight: 300,
    count: {
      "newCustomer": 0,
      "newReceipt": 1,
      "newPay": 3,
      "stagePay": 1
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },
  onPageScroll: function(e) {
    console.log(e)
    if (e.scrollTop >= this.data.topheight) {
      console.log('=======')
      this.setData({
        nav: true
      })
    } else {
      this.setData({
        nav: false
      })
    }
  }
})