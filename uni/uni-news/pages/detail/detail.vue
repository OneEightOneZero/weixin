<template>
	<view>
		<productlist></productlist>
		<video id="myVideo" src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" @error="videoErrorCallback"
		 :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
	</view>
</template>

<script>
	import productlist from '../../components/product-list/product-list.vue';
	export default {
		data() {
			return {
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				]
			};
		},
		methods: {
			videoErrorCallback: function(e) {
				console.log('视频错误信息:')
				console.log(e.target.errMsg)
			}
		},
		components: {
			productlist
		}
	}
</script>

<style>

</style>
