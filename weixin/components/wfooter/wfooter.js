// components/wfooter/wfooter.js
import store from '../../utils/store.js'
import bus from '../../utils/bus.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  ready() {
    console.log(store)
    // 订阅者
    bus.$on('sendDataToFooter',(data)=>{
      console.log(data)
    })
  }
})
