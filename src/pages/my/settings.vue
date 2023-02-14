<template>
    <view class="viewport">
      <!-- 🔔 已登录的用户才能修改收货地址 -->
      <template v-if="1">
        <!-- 操作列表 -->
        <view class="list">
          <navigator url="./address/index" hover-class="none" class="item arrow"
            >我的收货地址</navigator
          >
        </view>
        <view class="list">
          <navigator url="./account" hover-class="none" class="item arrow"
            >账户与安全</navigator
          >
        </view>
      </template>
      <view class="list">
        <button hover-class="none" class="item arrow" open-type="feedback">
          问题反馈
        </button>
        <button hover-class="none" class="item arrow" open-type="contact">
          联系我们
        </button>
        <navigator hover-class="none" url=" " class="item arrow"
          >关于小兔鲜儿</navigator
        >
      </view>
    </view>
  </template>
  
  <script>
  // 记得把 vuex中的用户信息引过来
  export default {};
  </script>
  
  <style lang="scss">
  page {
    background-color: #f4f4f4;
  }
  button {
    text-align: left;
    border-radius: 0;
    background-color: #fff;
    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }
  }
  .viewport {
    padding: 20rpx;
  }
  .arrow {
    &::after {
      position: absolute;
      top: 50%;
      content: "\e6c2";
      color: #ccc;
      font-family: "erabbit" !important;
      font-size: 32rpx;
      transform: translateY(-50%);
    }
  }
  .list {
    padding: 0 20rpx;
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    .item {
      line-height: 90rpx;
      padding-left: 10rpx;
      font-size: 30rpx;
      color: #333;
      border-top: 1rpx solid #ddd;
      position: relative;
      &:first-child {
        border: none;
      }
    }
  }
  .item {
    &::after {
      right: 5rpx;
    }
  }
  </style>
  