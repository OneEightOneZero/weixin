// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 闪光灯的状态
    isFlash: 'off',
    src:""
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
    wx.request({
      url: 'https://10.3.143.180:3000',
      data: {
        message: '亲爱的',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })

    wx.setBackgroundColor({
      backgroundColor: '#666666', // 底部窗口的背景色为白色
    })
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
    wx.setBackgroundTextStyle({
      textStyle:"light"
    })
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
  ,
  switchTab(){
    wx.switchTab({
      url: '/pages/logs/logs'
    })
  },
  showToast(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'loading',
    //   duration: 2000
    // })
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showNavigation(){
    wx.showNavigationBarLoading({})
  },
  hideNavigation(){
    wx.hideNavigationBarLoading({})
  },
  // 红点
  showRedDot(){
    wx.showTabBarRedDot({
      index:1
    })
    // 数量
    wx.setTabBarBadge({
      index: 1,
      text: '99999'
    })
    wx.setTopBarText({
      text: 'hello, world!'
    })
  },
  takePhoto() {
    console.log('拍照')
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  scanCodeSuccess(e){
    console.log(e)
  },
  toggleFlash(){
    this.setData({
      isFlash: this.data.isFlash=='on'?'off':'on'
    })
  },
  scanCode(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  startRecord(){
    wx.startRecord({
      success(res) {
        console.log(res)
        const tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete() {
            console.log('play')
          }
        })
      }
    })
    // setTimeout(function () {
    //   wx.stopRecord() // 结束录音
    // }, 10000)
  },
  stopRecord(){
    wx.stopRecord() // 结束录音
  },
  openLocation(){
    // 获取经纬度
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log(res.latitude, res.longitude)
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  }
})