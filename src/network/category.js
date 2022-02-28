import {request} from './request.js'

// 獲取分類所有資訊 getCategory()
export function getCategory(){
 return request({
     url:'/api/goods',
     
  })
}

// 獲取選項卡分類"細項"資訊 getCategoryGoods(銷量排序，分類搜索，分頁)帶參數
export function getCategoryGoods(order="sales",id=0,page=1){
  return request({
      url:`/api/goods?category_id=${id}&page=${page}&order=${order}`
     
   })
 }