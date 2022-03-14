 import axios from "axios";
//公共用的請求
import { Notify,Toast } from 'vant'
import router from '../router'

 //要從外面接收數據  config
 export function request(config){
   //創建實例初始化
   const instance=axios.create({
       baseURL:'https://api.shop.eduwork.cn',
       //5秒請求失敗就不再請求
       timeout:5000
   })
  //初始化結束後，還須創建2個攔截  
  //1.請求攔截
 instance.interceptors.request.use((config)=>{{
     //接口需要認證，就在此統一設置(token)
     //用戶認證:使用JWT認證，需要認證的Api， 需要添加請求頭：
     const token=window.localStorage.getItem('token')
     if(token){
       config.headers.Authorization='Bearer '+ token
     }

     //直接放行
     return config
   }},(err)=>{
     //請求錯誤，一般不處理
   })


  
  //2.響應攔截
  instance.interceptors.response.use(res=>{
    //若有data則返回data，否則返回res
    // console.log(res)
    return res.data ? res.data : res
  },
  err=>{
    console.log(err)
    
    //若有需要授權才可以訪問的接口，統一跳轉到Login 
      if(err.response.status=='401'){
        Toast.fail("請先登入")
        router.push({path:'/login'})
      
      }
     
   
    // Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0])
    //服務器若返回錯誤，顯示錯誤訊息
  })


  return instance(config)

 }