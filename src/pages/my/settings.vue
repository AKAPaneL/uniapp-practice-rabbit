<template>
    <view class="viewport">
      <!-- ð å·²ç»å½çç¨æ·æè½ä¿®æ¹æ¶è´§å°å -->
      <template v-if="1">
        <!-- æä½åè¡¨ -->
        <view class="list">
          <navigator url="./address/index" hover-class="none" class="item arrow"
            >æçæ¶è´§å°å</navigator
          >
        </view>
        <view class="list">
          <navigator url="./account" hover-class="none" class="item arrow"
            >è´¦æ·ä¸å®å¨</navigator
          >
        </view>
      </template>
      <view class="list">
        <button hover-class="none" class="item arrow" open-type="feedback">
          é®é¢åé¦
        </button>
        <button hover-class="none" class="item arrow" open-type="contact">
          èç³»æä»¬
        </button>
        <navigator hover-class="none" url=" " class="item arrow"
          >å³äºå°åé²å¿</navigator
        >
      </view>
    </view>
  </template>
  
  <script>
  // è®°å¾æ vuexä¸­çç¨æ·ä¿¡æ¯å¼è¿æ¥
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
  