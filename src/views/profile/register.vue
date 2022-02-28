<template>
   <nav-bar>
    <template v-slot:default>個人中心</template>
  </nav-bar>
  <div class="register">
    <div class="img">
     <img src="../../assets/imgs/logo.jpg" alt="logo" >
    </div>
  </div>
  <!-- 註冊資訊 -->
  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="name"
      name="使用者姓名"
      label="使用者姓名"
      placeholder="使用者姓名"
      :rules="[{ required: true, message: '請填寫姓名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密碼"
      label="密碼"
      placeholder="密碼至少為6個字"
      :rules="[{ required: true, message: '請輸入密碼' }]"
    />
     <van-field
      v-model="password_confirmation"
      type="password"
      name="確認密碼"
      label="確認密碼"
      placeholder="確認密碼"
      :rules="[{ required: true, message: '請填寫一致密碼' }]"
    />
     <van-field
      v-model="email"
      name="電子信箱"
      label="電子信箱"
      placeholder="請輸入正確電子信箱格式 @"
      :rules="[{ required: true, message: '請輸入電子信箱' }]"
    />
  </van-cell-group>
   
  <div style="margin: 16px;">
    <div class="link-login" 
    style="color:var(--color-tint); margin: 10px;text-align:center;" @click="$router.push({path:'/login'})">
      已有帳號 立即登入
    </div>
   
    <van-button round block type="primary" color="var(--color-tint)" 
    native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'

import { register} from 'network/user.js'
import { Notify,Toast } from 'vant'
import {ref,reactive,toRefs} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name:'Register',
  components:{navBar},
  setup(){
    const router =useRouter() 

    const userInfo =reactive({
      name:"",
      password:"",
      password_confirmation:"",
      email:""
    })

    const onSubmit=()=>{
     //先驗證
     if(userInfo.password != userInfo.password_confirmation){
      //  Notify('通知内容')
       Notify({ type: 'danger', message: '密碼不一致,請再次確認密碼' })
       //再提交服務器

     }
     else{
       register(userInfo).then(res=>{
        //  console.log(res);
         if(res.status=='201'){
           
            Toast.success('註冊完成')
            setTimeout(()=>{
              router.push({path:"/login"})
            },1000)
         }
         //註冊成功後，清空資訊
         userInfo.name="",
         userInfo.password="",
         userInfo.password_confirmation="",
         userInfo.email=""
       })
     }
      
    }
    return{...toRefs(userInfo),onSubmit}
  }
}
</script>

<style  scoped>
 link-login {
   color: red;
   margin-bottom: 10px;
 }

</style>