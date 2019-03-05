<template>
  <div class="weui-search-bar weui-search-bar_focusing" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        >
        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label @click="search" class="weui-search-bar__label" id="searchText">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
export default {
  methods: {
    search () {}
  }
}
</script>
<style scoped>
.weui-search-bar {
  position: relative;
  padding: 16rpx 20rpx;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 1rpx solid #ffffff;
  border-bottom: 1rpx solid #ffffff;
}
</style>


