import { request } from "./request";

//添加地址
export function addAddress(params){
 return request({
   url:'/api/address',
   method:'post',
   params
 })
}

//編輯地址
export function editAddress(id,params){
  return request({
    url:`/api/address/${id}`,
    method:'put',
    params
  })
 }
//刪除地址
export function deleteAddress(id){
  return request({
    url:`/api/address/${id}`,
    method:'delete', 
  })
}
//地址列表
export function getAddressList(){
  return request({
    url:'/api/address',
     
  })
}
//地址詳情
export function getAddressDetail(){
  return request({
    url:'/api/address/',
  })
}
