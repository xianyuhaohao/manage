// pages/detail/detail.js

Page({
  edit(){
    wx.navigateTo({
      url: '../edit/edit',
    })
  },
  state(e){
    console.log(e)
    this.setData({
      index:e.detail.value
    })
  },
  mail(){
    let flag = !this.data.mailcheck
    this.setData({
      mailcheck:flag
    })
  },
  apply(){
    this.setData({
      invoice:true
    })
  },
  cancle() {
    this.setData({
      invoice: false
    })
  },
  courseInfo(){
    this.setData({
      infoShow:false
    })
  },
  courseOn(e) {
    this.setData({
      course_on: e.currentTarget.dataset.idx
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    invoice:false,
    mailcheck:false,
    infoShow:true,
    second:false,
    course_on:0,
    array: ['跟进中', '分期付款', '已成交', '无意向','无法联系']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})