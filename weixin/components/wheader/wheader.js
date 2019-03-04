// components/wheader/wheader.js
import store from '../../utils/store.js'
import bus from '../../utils/bus.js'
import vuexStore from '../../utils/vuexStore.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    skill: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'default', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替（这样会有更强的功能和更好的性能）
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'组件'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    testTap(){
      console.log(this.data.name)
      // 发布
      bus.$emit('sendDataToFooter', 'hello footer')
    }
  },
  ready(){
    console.log(store)
    store.author = 'Lemon'
    console.log(store)
    console.log(this)
    console.log(bus)
    console.log(vuexStore.$store.state.age)
    vuexStore.$store.dispatch("setAge",18)
    
  }
})
