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
 * 
 */
export const getHomeCategoryMutli=()=>{
    return http({
        methods:'GET',
        url:'/home/category/mutli'
    })
}