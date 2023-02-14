<template>
    <scroll-view enhanced scroll-y id="scrollView">
        <view class="viewport" :style="{ paddingTop: top + 'px' }">
            <!-- 顶部背景 -->
            <view class="navbar">
                <view class="title">我的</view>
            </view>
            <!-- 个人资料 -->
            <view class="profile">
                <view class="overview">
                    <navigator v-if="profile.token" url="/pages/my/profile" hover-class="none">
                        <image mode="aspectFill" class="avatar" :src="profile.avatar"></image>
                    </navigator>
                    <!-- 未登录：点击头像跳转登录页 -->
                    <navigator v-else url="/pages/my/profile" hover-class="none">
                        <image class="avatar" src="http://static.botue.com/erabbit/static/uploads/avatar_3.jpg"></image>
                    </navigator>
                    <view class="meta">
                        <view @tap="goToProfile" v-if="profile" class="nickname">
                            {{ profile.nickname }}
                        </view>
                        <!-- 未登录：点击文字跳转登录页 -->
                        <navigator v-else url="/pages/login/index" hover-class="none" class="nickname">
                            未登录
                        </navigator>
                        <view class="extra">
                            <text v-if="!profile" class="tips">点击登录账号</text>
                            <template v-else>
                                <text class="update">更新头像昵称</text>
                                <text class="relogin">切换账号</text>
                            </template>
                        </view>
                    </view>
                </view>
                <navigator class="settings" url="/pages/my/settings" hover-class="none">
                    设置
                </navigator>
            </view>
            <!-- 订单 -->
            <view class="orders">
                <view class="title">
                    我的订单
                    <navigator url="/pages/order/index?type=0" hover-class="none">
                        查看全部订单<text class="icon-right"></text>
                    </navigator>
                </view>
                <view class="section">
                    <navigator v-for="item in orderTypes" :key="item.text" :class="item.icon"
                        :url="'/pages/order/index?type=' + item.type" hover-class="none">{{ item.text }}</navigator>
                    <navigator class="icon-handset" url=" " hover-class="none">售后</navigator>
                </view>
            </view>
            <!-- 部件 -->
            <view class="widgets">
                <view class="tabs">
                    <text v-for="(item, index) in tabs" :key="item" :class="{ active: tabIndex === index }"
                        @click="tabIndex = index">{{ item }}</text>
                </view>
            </view>
            <!-- 商品列表 -->
            <CollectGoods :tab-index="tabIndex"></CollectGoods>
        </view>
    </scroll-view>
</template>

<script>
import CollectGoods from './components/CollectGoods.vue';
export default {
    components:{
        CollectGoods
    },
    computed:{
        top(){
            return this.$store.state.buttonArea.top+this.$store.state.buttonArea.height
        }
    },
    data() {
        return {
            orderTypes: [
                { text: "待付款", icon: "icon-currency", type: 1 },
                { text: "待发货", icon: "icon-gift", type: 2 },
                { text: "待收货", icon: "icon-check", type: 3 },
                { text: "待评价", icon: "icon-comment", type: 4 },
            ],
            tabs: ["我的收藏", "猜你喜欢", "我的足迹"],
            tabIndex: 0,
        }
    },
};
</script>

<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
    background-color: #f7f7f8;
}

#scrollView {
    height: 100%;
    overflow: hidden;
}

.viewport {}

.navbar {
    width: 750rpx;
    height: 380rpx;
    background-image: url(http://static.botue.com/erabbit/static/images/center_bg.png);
    background-size: contain;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    .title {
        height: 64rpx;
        line-height: 64rpx;
        text-align: center;
        color: #fff;
        font-size: 32rpx;
        opacity: 0;
        font-weight: bold;
    }
}

.profile {
    position: relative;
    z-index: 99;

    .overview {
        display: flex;
        width: 500rpx;
        height: 120rpx;
        padding: 0 36rpx;
        color: #fff;

        .avatar {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
        }

        .meta {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            line-height: 30rpx;
            padding: 16rpx 0;
            margin-left: 20rpx;
        }
    }

    .meta {
        .nickname {
            max-width: 180rpx;
            margin-bottom: 16rpx;
            font-size: 30rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .extra {
            display: flex;
            font-size: 20rpx;
        }

        .tips {
            font-size: 22rpx;
        }
    }

    .settings {
        position: absolute;
        top: 50%;
        right: 80rpx;
        line-height: 1;
        font-size: 30rpx;
        color: #fff;
        transform: translateY(-50%);
    }
}

.profile .meta .update,
.profile .meta .relogin {
    padding: 3rpx 10rpx 1rpx;
    color: rgba(255, 255, 255, 0.8);
    border: 1rpx solid rgba(255, 255, 255, 0.8);
    margin-right: 10rpx;
    border-radius: 30rpx;
}

.orders {
    position: sticky;
    top: 140rpx;
    z-index: 99;
    padding: 30rpx;
    margin: 50rpx 20rpx 0;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

    .title {
        height: 40rpx;
        line-height: 40rpx;
        font-size: 28rpx;
        color: #1e1e1e;

        navigator {
            font-size: 24rpx;
            color: #939393;
            float: right;
        }
    }

    .section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 40rpx 20rpx 10rpx;

        navigator {
            text-align: center;
            font-size: 24rpx;
            color: #333;

            &::before {
                display: block;
                font-size: 60rpx;
                color: #ff9545;
            }
        }
    }
}

/* 小部件 */
.widgets {
    padding: 20rpx 20rpx 0;
    background-color: #f7f7f8;
    position: relative;
    z-index: 1;

    .tabs {
        display: flex;
        justify-content: space-around;
        height: 80rpx;
        line-height: 80rpx;

        text {
            font-size: 28rpx;
            color: #333;
            position: relative;
        }

        .active {
            &::after {
                position: absolute;
                left: 50%;
                bottom: 12rpx;
                width: 60rpx;
                height: 4rpx;
                background-color: #27ba9b;
                content: "";
                transform: translate(-50%);
            }
        }
    }
}
</style>
