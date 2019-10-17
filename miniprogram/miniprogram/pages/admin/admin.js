const request = require('../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_number: 0,
    page_size: 1,
    total: 0,
		page_total:0,
    list: [
			{
				"id": 1,
				"name": "定的",
				"sex": 1,
				"phone": "13051588225",
				"province": "山西",
				"work": "3",
				"depart": "内科",
				"abroad": "36",
				"status": 1,
				"int_course": "护士管理师",
				"edu": "本科",
				"remark": "跟进中",
				"create_time": "1970-01-01 08:00"
			},
			// {
			// 	"id": 1,
			// 	"name": "哈哈",
			// 	"sex": 1,
			// 	"phone": "13051588225",
			// 	"province": "山西",
			// 	"work": "3",
			// 	"depart": "内科",
			// 	"abroad": "36",
			// 	"status": 1,
			// 	"int_course": "护士管理师",
			// 	"edu": "本科",
			// 	"remark": "跟进中",
			// 	"create_time": "1970-01-01 08:00"
			// },
			// {
			// 	"id": 1,
			// 	"name": "小hua2",
			// 	"sex": 1,
			// 	"phone": "13051588225",
			// 	"province": "山西",
			// 	"work": "3",
			// 	"depart": "内科",
			// 	"abroad": "36",
			// 	"status": 1,
			// 	"int_course": "护士管理师",
			// 	"edu": "本科",
			// 	"remark": "跟进中",
			// 	"create_time": "1970-01-01 08:00"
			// }
    ]
  },
  bottom:function(){
    console.log('aaaaaaaa')
  },
	getPendList:function(){
		console.log(this.data)
		wx.showLoading({
			title: '加载中',
		})
		let that = this; 
		let page_number = this.data.page_number +1;
		request.api('/api/admin/index/adminPendList', {
			page_number: page_number,
			page_size: this.data.page_size
		}, (res) => {
			wx.hideLoading();
			that.setData({
				page_number: res.data.page,
				page_total: res.data.page_total,
				total: res.data.total,
				list: [...that.data.list,...res.data.list]
			});
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
		this.getPendList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
	onPullDownRefresh:function(){
		this.setData({
			page_number: 0,
			page_total: 0,
			total: 0,
			list: []
		});
		this.getPendList();
		wx.stopPullDownRefresh()
	},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
		if (this.data.page_number < this.data.page_total) {
			this.getPendList();
		}
  }
})