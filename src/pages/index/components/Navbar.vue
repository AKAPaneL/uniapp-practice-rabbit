<template>
    <!-- 导航条 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
      <!-- 文字logo -->
      <view class="logo">
        <image
          src="http://static.botue.com/erabbit/static/images/logo.png"
        ></image>
        <text>新鲜 · 亲民 · 快捷</text>
      </view>
      <!-- 搜索条 -->
      <view class="search">
        <text class="icon-search">搜索商品</text>
        <text class="icon-scan"></text>
      </view>
    </view>
  </template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['safeAreaInsets'])
    },
    created(){
      console.log(this.safeAreaInsets);
    }
};
</script>
<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.navbar {
  background-image: url(http://static.botue.com/erabbit/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  overflow: hidden;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    image {
      width: 166rpx;
      height: 39rpx;
    }
    text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
