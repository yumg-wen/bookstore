import {request} from './request.js'

// 獲取商品詳情資訊 getDetail()
export function getDetail(id){
 return request({
     url:'/api/goods/'+id,
  })
}

// 商品詳情
//https://www.showdoc.com.cn/1207745568269674/6090132930678400