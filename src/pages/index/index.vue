<template>
    <view>
        <!-- 首页banner图片 -->
        <Navbar></Navbar>
        <!-- 轮播图 -->
        <Carousel :banners="banner" :height="height"></Carousel>
        <CateScroll :categoryHeadMutli="categoryHeadMutli"></CateScroll>
    </view>
    
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import { getHomeBanner,getHomeCategoryMutli } from '@/api/home';
import Carousel from '@/components/Carousel/Carousel.vue';
export default {
    components :{
    Navbar,
    Carousel
    },
    data(){
        return {
            banner:[],
            height:280,
            categoryHeadMutli:[]
        }
    },
    onLoad(){
        this.getHomeBanner()
        this.getHomeCategoryMutli()
    },
    
    computed:{

    },
    methods:{
        // 获取banner图片
        async getHomeBanner(){
           const res =  await getHomeBanner()
           this.banner = res.result
        },
        // 获取分类栏目
       async getHomeCategoryMutli(){
        const res =  await getHomeCategoryMutli()
        this.categoryHeadMutli = res.result
       }
    }
};
</script>

<style >

</style>
