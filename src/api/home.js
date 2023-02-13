// this is home api
import http from '@/utils/http'

// 获取banner图片
/**
 * 
 * @param {Number} distributionSite 1:默认值 首页banner图  2：商品分类页
 * @returns 
 */
export const getHomeBanner = (distributionSite=1)=>{
    return http({
        methods:'GET',
        url:'/home/banner',
        data:{
            distributionSite
        }
    })
}

/**
 * 获取前台分类
 */
export const getHomeCategoryMutli=()=>{
    return http({
        methods:'GET',
        url:'/home/category/mutli'
    })
}
/**
 * 获取 人气推荐 数据
 * @returns promise
 */
export const getHotMutli = ()=>{
    return http({
        url:'/home/hot/mutli'
    })
}

//获取新鲜好物 
export const getHomeNew = ()=>{
    return http({
        url:'/home/new'
    })
}

//获取猜你喜欢
export const gethomeGoodsGuessLike = (data)=>{
    return http({
        url:'/home/goods/guessLike',
        data
    })
}