<template>
  <view v-if="visible" class="virtrual-container" ref="virtrual">
    <view class="first-list card-box">
        <view class="title"></view>
        <view class="content">
            <view v-for="item in 3" :key="item" class="content-item">
                <view class="avatar"></view>
                <view class="font">
                    <text class="up-font dp-block"></text>
                    <text class="down-font dp-block"></text>
                </view>
            </view>
        </view>
    </view>
    <view class="secend-list card-box">
        <view class="title"></view>
        <view class="content">
            <view class="datail" v-for="item in 3" :key="item">
                <view class="single-img"></view>
                <text class="dp-block"></text>
            </view>
        </view>
    </view>
    <view class="last-list card-box">
        <view class="title"></view>
        <view class="content">
            <view class="datail" v-for="item in 2" :key="item">
                <view class="single-img"></view>
                <text class="dp-block"></text>
            </view>
        </view>
    </view>
  </view>
</template>
<script>
export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        distance:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            
        }
    },
    mounted(){
        this.addObserver(this.distance)
    },
    methods:{
        // 添加监听器
        /**
         * @param {number} distributionSite number:距离视口底部距离多少时触发回调
         */
        addObserver(distance){
            this.createIntersectionObserver().relativeToViewport({bottom: distance}).observe('.virtrual-container',this.onEnterViewPort)
        },
        // 触发的回调函数
        onEnterViewPort:(res)=>{
            const { intersectionRatio } =res
            if(intersectionRatio>0){
                // 虚拟列表进入视图
                this.$emit('onEnterViewPort')
            }else{
                // 虚拟列表退出视图
                this.$emit('onExitViewPort')
            }
        }
    }
}
</script>
<style scoped lang="scss">
.virtrual-container{
    width: 100%;
    padding:0 2.5vw;
    background-color: #f1f2f6;
    border-top: 1px #f1f2f6;

    .title{
        background-color: #f1f2f6;
        border-radius: 1vw;
        height: 5vw;
        width: 30vw;
    }
}
.card-box{
    background-color: #fff;
    border-radius: 3vw;
    padding: 5.5vw;
}
.dp-block{
    display: block;
}
.first-list{
    .content{
        padding-top: 1vw;
        .content-item{
            margin-top: 2.5vw;
            display: flex;
            align-items: center;
            // padding: ;
        }
        .avatar{
            width: 12vw;
            height: 12vw;
            background-color: #f1f2f6;
            margin-right: 2.5vw;
            border-radius: 1.5vw;
        }
        .font{
            flex: 1;
            height: 100%;
            .up-font,.down-font{
                background-color: #f1f2f6;
            }
            .up-font{
                width: 50vw;
                height: 4vw;
                border-radius: 0.8vw;
            }
            .down-font{
                height: 3vw;
                width: 30vw;
                margin-top: 1.5vw;
                border-radius: 0.5vw;
            }
        }
    }
}

.secend-list,.last-list{
    margin-top: 2.5vw;
    .content{
        margin-top: 3.5vw;
        display: flex;
        justify-content: space-between;
    }
    .datail .single-img{
        width: 26vw;
        height: 26vw;
        background-color: #f1f2f6;
        border-radius: 2.5vw;
    }
    .datail text{
        height: 3vw;
        margin-top:4vw;
        background-color: #f1f2f6;
        border-radius: 0.8vw;
    }
}
.last-list{
    .datail .single-img{
        width: 40.5vw;
        height: 40.5vw;
        background-color: #f1f2f6;
        border-radius: 2.5vw;
    }
}
</style>