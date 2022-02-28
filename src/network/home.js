import {request} from './request.js'

// 獲取首頁所有資訊 getHomeAllData()
export function getHomeAllData(){
 return request({
     url:'/api/index',
     method:'get',
  })
}

//獲取商品資訊
export function getHomeGoods(type='sales',page=1){
  return request({
    //  url:'api/index?'+type+'=1&page='+page,
    url:`api/index?${type}=1&page=${page}`,
     
   })
 }