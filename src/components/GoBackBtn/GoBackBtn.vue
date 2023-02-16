<template>
    <view class="back icon-left" @click="onTap"></view>
  </template>

<script>
export default {
  methods:{
    onTap(){
      uni.navigateBack()
    }
  }
};
</script>

<style>
.back {
  position: absolute;
  left: 50rpx;
  top: 50rpx;
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  font-size: 23px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
