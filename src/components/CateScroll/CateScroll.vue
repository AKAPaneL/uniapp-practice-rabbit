<template>
    <view class="category-head-mutli">
      <scroll-view scroll-x @scroll="handleCategory">
        <view class="scroll-wrap">
          <view class="category-head-mutli-item">
            <navigator v-for="item in categoryHeadMutli" :key="item.id">
              <image mode="widthFix" :src="item.icon"></image>
              <text>{{ item.name }}</text>
            </navigator>
          </view>
        </view>
      </scroll-view>
      <view class="scroll-bar">
        <view
          class="scroll-bar-inner"
          :style="{ left:scrollLeft }"
        ></view>
      </view>
    </view>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    props: ["categoryHeadMutli"],
    data() {
      return {
        scrollLeft: 0,
      };
    },
    computed:{
        ...mapState(['safeArea'])
    },
    methods: {
      handleCategory(e) {
        const {scrollLeft} =e.detail
        let rate =scrollLeft/this.safeArea.width * 80+'%'
        this.scrollLeft = rate
        console.log(rate);
      }
    },
  };
  </script>
  
  <style lang="scss">
  .category-head-mutli {
    background-color: #f7f7f8;
    position: relative;
    padding-bottom: 30rpx;
    .scroll-wrap {
      width: 200%;
    }
    .category-head-mutli-item {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      navigator {
        text-align: center;
        width: 20%;
        padding: 15rpx;
  
        image {
          width: 100rpx;
          display: block;
          margin: 0 auto;
        }
        text {
          font-size: 26rpx;
          color: #666;
        }
      }
    }
    .scroll-bar {
      position: absolute;
      bottom: 15rpx;
      left: 50%;
      transform: translateX(-50%);
      width: 100rpx;
      height: 8rpx;
      background-color: #e2e2e2;
      z-index: 200;
      .scroll-bar-inner {
        width: 20%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #00c09b;
      }
    }
  }
  </style>