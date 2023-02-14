<template>
    <view class="masonry">
        <template v-if="tabIndex === 0">
            <view class="column">
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_1.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_6.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_6.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_8.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_7.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
            <view class="column">
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_5.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_7.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_2.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_5.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_3.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
        </template>
        <template v-if="tabIndex === 1">
            <view class="column">
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_7.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_8.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_1.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_6.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_6.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
            <view class="column">
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_2.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_5.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_5.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_7.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_3.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
        </template>
        <template v-if="tabIndex === 2">
            <view class="column">
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_6.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_8.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_1.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_6.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_7.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
            <view class="column">
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_7.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card topic">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/topic_2.jpg"></image>
                    <view class="name">忙里忙外，回家吃饭</view>
                    <view class="price">19.9元<text>起</text></view>
                    <view class="extra">
                        <text class="icon-heart">1220</text>
                        <text class="icon-preview">1000</text>
                    </view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_5.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
                <view class="card brand">
                    <view class="locate">
                        <text class="icon-locate"></text>中国
                    </view>
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/brand_logo_5.jpg">
                    </image>
                    <view class="name">小米优购</view>
                    <view class="alt">小米优购闪购嗨购</view>
                </view>
                <view class="card goods">
                    <image mode="widthFix" src="http://static.botue.com/erabbit/static/uploads/goods_big_3.jpg"></image>
                    <view class="name">彩色鹅卵石小清新防水防烫长方形餐桌圆桌布艺茶几垫电视柜盖布
                        鹅软石桌布yg056</view>
                    <view class="price">¥899</view>
                </view>
            </view>
        </template>
    </view>
</template>  
<script>
export default {
    props: ["tabIndex"],
    created(){
        console.log(this.tabIndex);
    }
};
</script>

<style lang="scss">
/* 瀑布流布局 */
.masonry {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;

    .column {
        width: 345rpx;

        .card {
            padding: 20rpx 15rpx;
            margin-bottom: 20rpx;
            border-radius: 8rpx;
            background-color: #fff;
        }
    }

    .card {
        .name {
            font-size: 24rpx;
            color: #333;
            margin-top: 10rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .price {
            line-height: 1;
            font-size: 22rpx;
            color: #cf4444;
        }

        .locate {
            text-align: left;
            color: #999;
            margin-bottom: 10rpx;
            font-size: 24rpx;
        }
    }

    .topic {
        .price {
            margin: 10rpx 0;

            text {
                color: #999;
            }
        }

        .extra {
            line-height: 1;
            font-size: 22rpx;
            color: #666;
        }
    }

    .extra {
        text {
            margin-right: 14rpx;

            &::before {
                margin-right: 4rpx;
            }
        }
    }

    .icon-preview {
        &:before {
            font-size: 25rpx;
        }
    }

    .goods {
        .price {
            margin-top: 10rpx;
        }
    }

    .brand {
        text-align: center;

        .name {
            margin: 10rpx 0 8rpx;
        }

        .alt {
            line-height: 1;
            color: #666;
            font-size: 24rpx;
        }
    }
}
</style>
