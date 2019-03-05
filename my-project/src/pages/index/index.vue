<template>
  <div>
    <Xsearch></Xsearch>
    <Xpannel></Xpannel>
  </div>
</template>

<script>
import card from '@/components/card'
import Xheader from '@/components/Xheader'
import Xsearch from '@/components/Xsearch'
import Xpannel from '@/components/Xpannel'

// 引入vuex实现下拉index页下拉刷新的时候触发Xpannel组件获取新数据
import bus from '../../utils/bus.js'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card,
    Xheader,
    Xsearch,
    Xpannel
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  },
  // 下拉刷新
  onPullDownRefresh () {
    bus.$emit('onPullDownRefresh', 'top')
    console.log('下拉刷新')
  },
  // 上拉刷新
  onReachBottom () {
    bus.$emit('onReachBottom', 'bottom')
    console.log('上拉刷新')
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
