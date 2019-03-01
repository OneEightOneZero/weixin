# 安装
[官方文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1474632113_xQVCl&token=&lang=zh_CN)
首先下载微信小程序的开发者工具[小程序开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，再下载[微信小程序DEMO源码](https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1476243262796)
![qq20161016-1](https://cloud.githubusercontent.com/assets/17243165/19417058/1c06387c-93d5-11e6-9dd3-86109bade9dd.png)
安装开发者工具，并解压DEMO源码，在开发者工具中导入源码项目

# 目录结构

- pages页面
  - index 页面组件
    - index.wxml .vue组件 template
    - index.wxss .vue组件 style
    - index.js   .vue组件 script
    - index.json （局部JSON文件）组件的一些局部参数
  - logs
- utils封装库
- app.js应用入口文件（应用的生命周期，全局参数等）
- app.json （全局JSON） 项目页面设置（路由，头部底部颜色，上拉刷新，下拉刷新）
- app.wxss（微信样式全局样式）
- project.config.json（微信开发者工具的参数）


# 注册

打开[微信公众平台](https://mp.weixin.qq.com/)，在里面注册账号选择小程序，用户体选择个人

# app.json(全局配置)

我们使用`app.json`文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多tab等

![image](https://user-images.githubusercontent.com/17243165/28761224-aa75ed5e-75df-11e7-9f0b-4580adb3e2ab.png)


## pages

如果学过其他框架，可以把它理解为路由，在`app.json`文件的`pages`属性里面定义路由和对应的组件，默认是在pages文件夹里面寻找xxx组件的xxx.js文件，当然没有后缀

> pages/index/index  => page文件夹下的index组件的文件夹下的所有资源

pages接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成，每一项代表对应页面的`路径+文件名`信息

* 数组的第一项代表小程序的初始页面，小程序中新增/减少页面，都需要对 pages 数组进行修改
* 文件名不需要写文件后缀，因为框架会自动去寻找路径`.json,.js,.wxml,.wxss`的四个文件进行整合

```javascript
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/test/test",
    "pages/text/text"
  ],
//code
}
```

## tabBar
tabBar其实就是配置底部的选项卡，在`app.json`文件的`tabBar`属性里面定义底部的选项卡的详细配置

![image](https://user-images.githubusercontent.com/17243165/28762283-ce3476c2-75e7-11e7-88f8-37c62d5d1a26.png)

如果我们的小程序是一个多 tab 应用(客户端窗口的底部或顶部有tab栏可以切换页面)，那么我们可以通过tabBar配置项指定tab栏的表现，以及tab切换时显示的对应页面

> 通过页面跳转`wx.navigateTo`或者页面重定向`wx.redirectTo`所到达的页面，即使它是定义在 tabBar 配置中的页面，也不会显示底部的tab栏

tabBar是一个数组，只能配置最少2个、最多5个tab，tab按数组的顺序排序
```javascript
{
//code
  "tabBar": {
    "color": "#666",
    "selectedColor": "#268dcd",
    "borderStyle": "white",
    "backgroundColor": "#fafafa",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "image/wscats.png",
        "selectedIconPath": "image/wscats.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "分类"
      }
      //code
    ]
  }
}
```

一般我们可以新建一个放图标的文件夹image，此文件夹跟pages同级，然后在里面我们可以放图标

![image](https://user-images.githubusercontent.com/17243165/28760687-5621cdda-75db-11e7-9fe4-7fff0295ea67.png)

我在文件夹里面放了两张图片`wscats.pn`g和`wscats-active.png`，我们就可以在`iconPat`h和`selectedIconPath`里面把图片引进来，设置的分别是切换选项卡时候出现的图标

|tabBar属性|作用|
|-|-|
|color|未选中时候文字颜色|
|selectedColor|选中时候文字颜色|
|borderStyle|边样式，可以设置颜色和粗细|
|backgroundColor|背景颜色|
|list|详情看下表|

list接受一个数组，数组中的每个项都是一个对象，其属性值如下
![image](https://user-images.githubusercontent.com/17243165/28762302-ff823b60-75e7-11e7-9825-d61c993bf155.png)

|list属性|作用|
|-|-|
|pagePath|跳转路由|
|iconPath|未选中时候的图标|
|selectedIconPath|选中时候的图标|
|text|文字描述|

## window

用于设置小程序的状态栏、导航条、标题、窗口背景色
![image](https://user-images.githubusercontent.com/17243165/28762164-bcb1810c-75e6-11e7-99a0-d2f9014a8477.png)

![image](https://user-images.githubusercontent.com/17243165/28762214-2bf86e0e-75e7-11e7-9522-f47a81816c94.png)

## networkTimeout

可以设置各种网络请求的超时时间

![image](https://user-images.githubusercontent.com/17243165/28762320-1c1b299e-75e8-11e7-8f3a-e04be02dec93.png)

## debug

可以在开发者工具中开启debug模式，在开发者工具的控制台面板，调试信息以info的形式给出，其信息有Page的注册，页面路由，数据更新，事件触发 。可以帮助开发者快速定位一些常见的问题

## page.json

每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。 页面的配置比app.json全局配置简单得多，只是设置app.json中的window配置项的内容，页面中配置项会覆盖app.json的window中相同的配置项

页面的.json只能设置window相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个键

如图，在logs组件里面的logs.json设置对应的参数，那就会覆盖app.json原有的配置项
![image](https://user-images.githubusercontent.com/17243165/28762425-02dc1622-75e9-11e7-9b8f-d6e04bab37ca.png)

# xxx.json(页面配置)

每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置

页面的配置只能设置`app.json`中部分`window`配置项的内容，页面中配置项会覆盖`app.json`的`window`中相同的配置项，示例如下

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

# 组件

可以建立一个`components`的目录

<img width="298" alt="2018-10-24 10 02 29" src="https://user-images.githubusercontent.com/17243165/47401770-3c713e00-d775-11e8-9661-552cfee0d38a.png">

在`tab-content1.wxml`写入以下代码，这里可以配合使用`<slot></slot>`让我们使用组件的时候插入片段
```html
<view>
  <!--components/tab-content1/tab-content1.wxml-->
  <text>components/tab-content1/tab-content1.wxml</text>
  <slot></slot>
</view>
```


里面新建一个目录为`tab-content1`的目录作为组件的放置位置，然后可以在`pages`目录下的`index.json`下写入以下代码
```json
{
  "usingComponents": {
    "tab-content1": "/components/tab-content1/tab-content1"
  }
}
```
然后在`pages`目录下的`index.wxml`下写入以下代码，来使用组件
```html
<view class="weui-tab__content" hidden="{{activeIndex != 0}}">
   <tab-content1>
       <view>这里是插入到组件slot中的内容</view>
   </tab-content1>
</view>
```

## 生命周期

组件里面有的生命周期，可以在这里做逻辑或者监听其他组件的逻辑来通信数据

|定义段 | 类型 | 是否必填 | 描述|
|- | - | - | -|
|created | Function | 否 | 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData |  
|attached | Function | 否 | 组件生命周期函数，在组件实例进入页面节点树时执行 |  
|ready | Function | 否 | 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 [SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) ）|  
|moved | Function | 否 | 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行 |  
|detached | Function | 否 | 组件生命周期函数，在组件实例被从页面节点树移除时执行|

## 组件通信

组件和组件之间的通信，我个人会用`$on`和`$emit`来实现，参考[发布订阅模式](https://github.com/Wscats/node-tutorial/issues/47)

父传子的数据通信

父组件在子组件的标签值上传递值
```js
<pannel channel="hot"></pannel>
```

子组件`<pannel>`用`properties`属性接受，逻辑中用`this.properties.channel`获取值，这种方法类似于vue和react中的`props`方法
```
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    channel: String
  }
}
```

## 模板语法

使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段，可以构建一个可复用的模板
```html
<template name="msgItem">
  <view> <text> {{index}}: {{msg}} </text> <text> Time: {{time}} </text> </view>
</template>
```
使用模板，先 import 对应模板的文件路径，使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入
```html
<import src="item.wxml" />
<template is="msgItem" data="{{text: 'forbar'}}" />
<template is="msgItem" data="{{...item}}" />
```
```js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
})
```
is 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板：
```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}" />
</block>
```

# WeUI

在Github下载[WeUI for 小程序 为微信小程序量身设计 Github仓库](https://github.com/Tencent/weui-wxss)

把`weui-wxss/dist/style/`目录中的weui.wxss放到程序根目录下，然后在app.wxss全局引用weui样式
```css
@import 'weui.wxss';
```
![image](https://user-images.githubusercontent.com/17243165/28765460-6afc6bc6-75fd-11e7-89c1-07b1924d5434.png)

然后就可以复制粘贴`src/example`文件夹里面的组件进行开发了

# 导航

导航相当于路由跳转，用`navigator`标签，然后在属性值上面放自己定义好的组件页面
```javascript
"pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/test/test",
    "pages/text/text",
    "pages/detail/detail"
  ],
```
比如要跳到详情页组件就写`url="/pages/detail/detail"`，如果要跳到主页那就写`url="/pages/index/index"`，根据pages属性值里面定义好的路由去改相应的链接地址
```javascript
<navigator url="/pages/detail/detail" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active"></navigator>
```

# 路由传参

我们在链接上带上哈希值，然后传递给详情页
```javascript
<navigator url="/pages/detail/detail?id={{index}}" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
```
在详情页中获取options中的哈希值
```js
Page({
  onLoad: function (options) {
    console.log(options)  
  }
})
```

# 获取视图输入值

input输入框显示自己输入的值，`bindinput`来对输入的值进行接受，再把值赋给一个变量
```javascript
<input name="user" value="{{user}}" bindinput="inputUser" type="text" />
```
`value="{{user}}"`显示绑定的值，bindinput绑定事件，在e中的detail属性中获取
```javascript
inputUser: function (e) {
    console.log(e.detail.value)
    this.setData({
      user: e.detail.value
    })
}
```

# 常用API

wx.request(Object object)
发起`HTTPS`网络请求，这个相当于微信小程序给我们封装好的`ajax`请求

在使用之前记得要去后台页面设置安全域名
<img width="1440" alt="2018-10-24 1 03 49" src="https://user-images.githubusercontent.com/17243165/47407374-65053200-d78d-11e8-929d-b7c599e240ac.png">

```js
wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})
```
<img width="1440" alt="2018-10-24 1 05 44" src="https://user-images.githubusercontent.com/17243165/47407422-a1d12900-d78d-11e8-893e-f11204d2f038.png">

当然如果只是测试可以勾选`不校验合法域名`

# bind

bind(事件名字)

# 指令

```html
<view wx:if="{{bool}}">
布尔值
</view>
<view hidden="{{!bool}}">
hidden
</view>
<button bindtap="toggle">切换状态</button>
```

# template

复用HTML和CSS
```html
<!-- 模板 -->
<template name="msgItem">
  <view>
    <text>{{index}}: {{msg}}</text>
    <text>Time: {{time}}</text>
  </view>
</template>
<template is="msgItem" data="{{index:1,msg:'hello',time:'abc'}}" />
<template is="msgItem" data="{{index:2,msg:'hello',time:'abc'}}" />
<template is="msgItem" data="{{index:3,msg:'hello',time:'abc'}}" />
<template is="msgItem" data="{{index:4,msg:'llll',time:'abc'}}" />
```