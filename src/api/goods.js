import http from '@/utils/http'

// 根据id获取对应的商品详情页
export const getGoodsDetail = (id)=>{
    return http({
        url:'/goods',
        data:{
            id
        }
    })
}

// 获取商品详情页同类推荐
export function getGoodsRelevant(data){
    return http({
        url:'/goods/relevant',
        data
    })
}