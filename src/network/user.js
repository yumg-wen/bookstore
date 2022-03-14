import {request} from './request.js'

// 獲取註冊資訊 register()
export function register(data){
 return request({
     url:'/api/auth/register',
     method:'post',
     data,
    // 簡寫data:data
  })
}
// 返回狀態 (https://www.showdoc.com.cn/1207745568269674/6090123481636428)
// 狀態碼 201 創建成功
// 狀態碼 422 參數錯誤

// 獲取登入資訊 login() 
//  https://www.showdoc.com.cn/1207745568269674/6090123591593835
export function login(data){
  return request({
      url:'/api/auth/login',
      method:'post',
      data,
     // 簡寫data:data
   })
 }
 // 狀態碼 200 登入成功
 // 狀態碼 422 參數錯誤

 //退出
 export function logout(data){
  return request({
      url:'/api/auth/logout',
      method:'post',
      
   })
 }
 //用戶個人訊息  https://www.showdoc.com.cn/1207745568269674/6090133286102831
 export function getUser(data){
  return request({
      url:'/api/user',
      
      
   })
 }