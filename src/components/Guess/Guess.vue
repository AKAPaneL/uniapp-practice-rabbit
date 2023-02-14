<template>
    <view class="guess-wrap">
      <view class="caption">
        <text class="text">猜你喜欢</text>
      </view>
      <view class="guess">
        <navigator
          class="navigator"
          v-for="item in homeGoodsGuessLike"
          :key="item.id"
          :url="`/pages/goods/index?id=${item.id}`"
        >
          <image class="image" mode="aspectFill" :src="item.picture"></image>
          <view class="name">{{ item.name }}</view>
          <view class="price">
            <text class="small">¥</text>
            {{ item.price }}
            <text class="small">.00</text>
          </view>
        </navigator>
      </view>
      <VirtualList></VirtualList>
      <!-- 没有更多数据了 -->
      <view
        class="loading"
        v-if="homeGoodsGuessLikeTotal !== homeGoodsGuessLike.length"
        >正在加载...</view
      >
    </view>
  </template>
  
  <script>
  export default {
    props: ["homeGoodsGuessLike", "homeGoodsGuessLikeTotal"],
  };
  </script>
  
  <style lang="scss">
  /* 分类标题 */
  
  .caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    color: #262626;
    .text {
      display: block;
      padding: 0 28rpx 0 30rpx;
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 6rpx;
        width: 20rpx;
        height: 20rpx;
        background-image: url(http://static.botue.com/erabbit/static/images/bubble.png);
        background-size: contain;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
  }
  
  /* 猜你喜欢 */
  .guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;
    .navigator {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
    }
    .image {
      height: 260rpx;
    }
    .name {
      height: 75rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      line-height: 1;
      padding-top: 4rpx;
      color: #cf4444;
      font-size: 26rpx;
    }
    .small {
      font-size: 80%;
    }
  }
  </style>