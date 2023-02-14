<template>
    <view class="viewport">
      <!-- 地址信息 -->
      <view class="form">
        <view class="form-item">
          <text class="label">姓名</text>
          <input
            v-model="form.receiver"
            placeholder-style="color: #888"
            placeholder="请填写收货人姓名"
          />
        </view>
        <view class="form-item">
          <text class="label">手机号码</text>
          <input
            v-model="form.contact"
            placeholder-style="color: #888"
            placeholder="请填写收货人手机号码"
          />
        </view>
        <view class="form-item">
          <text class="label">省/市/县 (区)</text>
          <picker @change="regionChange" mode="region">
            <view v-if="form.fullLocation" class="region">
              {{ form.fullLocation }}
            </view>
            <view v-else class="placeholder"> 请填写收货人所在城市 </view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">详细地址</text>
          <input
            v-model="form.address"
            placeholder-style="color: #888"
            placeholder="街道、楼牌号信息"
          />
        </view>
        <view class="form-item">
          <text class="label">设置默认地址</text>
          <switch
            @change="isDefaultChange"
            :checked="form.isDefault === 1"
            color="#27ba9b"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <view class="button" @tap="submitForm">
       保 存
      </view>
    </view>
  </template>

<script>
export default {
    data() {
    return {
      form: {
        /**
         * 详细地址
         */
        address: "",
        /**
         * 地址标签,以英文逗号分割
         */
        addressTags: "",
        /**
         * 所在城市编码
         */
        cityCode: "",
        /**
         * 联系方式
         */
        contact: "",
        /**
         * 所在区/县编码
         */
        countyCode: "",
        /**
         * 是否为默认，1为是，0为否
         */
        isDefault: 0,
        /**
         * 邮政编码
         */
        postalCode: "",
        /**
         * 所在省份编码
         */
        provinceCode: "",
        /**
         * 收货人姓名
         */
        receiver: "",
        fullLocation: "",
      }
    };
  },
}
</script>


<style lang="scss">
page {
  background-color: #f4f4f4;
}
.form {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
  .form-item {
    display: flex;
    min-height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    &:last-child {
      border: none;
    }
    .label {
      width: 200rpx;
      color: #333;
    }
    input {
      flex: 1;
      display: block;
      height: 46rpx;
    }
    switch {
      position: absolute;
      right: -10rpx;
      transform: scale(0.7) translateY(-8px);
    }
    picker {
      flex: 1;
    }
    .region {
      color: #333;
    }
    .placeholder {
      color: #888;
    }
  }
}
.button {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>