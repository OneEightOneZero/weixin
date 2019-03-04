// pages/ui/ui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    value1: 333,
    inputValue:"123",
    actions: [
      {
        name: '喜欢',
        color: '#fff',
        fontsize: '20',
        width: 100,
        icon: 'like',
        background: '#ed3f14'
      },
      {
        name: '返回',
        width: 100,
        color: '#80848f',
        fontsize: '20',
        icon: 'undo'
      }
    ]
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

  },
  changeValue1(e){
    console.log(e)
    this.setData({
      value1: e.detail.value
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  }
})