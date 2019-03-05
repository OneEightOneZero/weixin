<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <navigator v-for="(topic, index) in topics" :key="index" :url="'/pages/detail/main?id='+topic.id" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
          <view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
              <image class="weui-media-box__thumb" :src="topic.author.avatar_url" />
          </view>
          <view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
              <view class="weui-media-box__title" v-text="topic.title"></view>
              <view class="weui-media-box__desc" v-text="topic.author.loginname"></view>
          </view>
      </navigator>
    </div>
  </div>
</template>
<script>
import bus from '../utils/bus.js'
export default {
  data () {
    return {
      topics: [],
      // 页数
      page: 1
    }
  },
  methods: {
    getTopics (type) {
      wx.request({
        url: 'https://cnodejs.org/api/v1/topics', // 仅为示例，并非真实的接口地址
        data: {
          page: this.page,
          limit: 10
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.page = this.page + 1
          let {data} = res.data
          // 停止下拉刷新
          wx.stopPullDownRefresh()
          switch (type) {
            // 下拉刷新
            case 'top':
              this.topics = data.concat(this.topics)
              break
            // 上拉刷新
            case 'bottom':
              this.topics = this.topics.concat(data)
              break
            // 页面第一次进入触发
            default:
              this.topics = this.topics.concat(data)
          }
          console.log(res.data)
        }
      })
    }
  },
  created () {
    this.getTopics()
    bus.$on('onPullDownRefresh', (type) => {
      this.getTopics(type)
    })
    bus.$on('onReachBottom', (type) => {
      this.getTopics(type)
    })
  }
}
</script>

