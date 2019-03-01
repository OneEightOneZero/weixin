// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "我的页面测试",
    arr: [1, 2, 3],
    imgUrls: [
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=697729144,1502048920&fm=200&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1511461500,2536850263&fm=200&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2865672302,4153895132&fm=200&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    arr: [{
      name: 'lemon',
      age: 18
    }, {
      name: 'laoxie',
      age: 19
    }, {
      name: 'laotian',
      age: 17
    }],
    bool:false
  },

  toggle(){
    this.setData({
      bool: !this.data.bool
    })
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

  }
})