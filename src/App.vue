<script>
export default {};
</script>

<style lang="scss">
@import "./static/fonts.scss";
view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
}
button {
  &::after {
    border: none;
  }
}
swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 加载提示 */
.loading {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding-bottom: 16rpx;
}
.popup-root {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  view {
    height: auto;
    padding: 0;
  }
  .title {
    line-height: 1;
    padding: 40rpx 0;
    text-align: center;
    font-size: 32rpx;
    font-weight: normal;
    border-bottom: 1rpx solid #ddd;
    color: #444;
  }
  .close {
    position: absolute;
    right: 24rpx;
    top: 24rpx;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0 40rpx;
    font-size: 28rpx;
    color: #444;
    .button {
      flex: 1;
      height: 72rpx;
      text-align: center;
      line-height: 72rpx;
      margin: 0 20rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .primary {
      color: #fff;
      background-color: #27ba9b;
    }
    .secondary {
      background-color: #ffa868;
    }
  }
}
</style>
