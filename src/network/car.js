import {request} from './request.js'

//新增購物車
export function addCar(data){
  return request({
    url:'/api/carts',
    method:'post',
    data
  })
}

//修改購物車 data={num:1}
export function modifyCar(id,data){
  return request({
    url:`/api/carts/${id}`,
    method:'put',
    data
  })
}

//選擇商品狀態   所有選中的id
export function checked(data){
  return request({
    url:'/api/carts/checked',
    method:'patch',
    data
  })
}

//購物車列表
export function getCar(data=""){
  return request({
    //api/carts?include=goods
    url:'/api/carts?'+data,
   
  })
}

//刪除購物車
export function deleteCarItem(id){
  return request({
    url:`/api/carts/${id}`,
    method:'delete',
   
  })
}