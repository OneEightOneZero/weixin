<template>
	<view class="content">
        <xlist2detaillist></xlist2detaillist>
	</view>
</template>

<script>
	// import xtabbar from '../../components/tabbar/tabbar.vue'
	import xlist2detaillist from '../../components/list2detail-list/list2detail-list.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			// xtabbar
			xlist2detaillist
		}
	}
</script>

<style>
	.content {
		height: 800upx;
	}
</style>
