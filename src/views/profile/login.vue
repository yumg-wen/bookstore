<template>
   <nav-bar>
    <template v-slot:default>登入中心</template>
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
      v-model="email"
      name="電子信箱"
      label="電子信箱"
      placeholder="電子信箱 默認:aaaa@com"
      :rules="[{ required: true, message: '請輸入電子信箱' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密碼"
      label="密碼"
      placeholder="密碼至少為6個字 默認:123123"
      :rules="[{ required: true, message: '請輸入密碼' }]"
    />
    
  </van-cell-group>
   
  <div >
    <div class="link-login" 
    style="color:var(--color-tint); margin: 10px;text-align:center;" @click="$router.push({path:'/register'})">
      尚未有帳號 立即註冊
    </div>
   
    <van-button round block type="primary" color="var(--color-tint)" native-type="submit">
      登入
    </van-button>
  </div>
</van-form>



</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import { login} from 'network/user.js'
import { Notify,Toast } from 'vant'
import {ref,reactive,toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
  name:'Login',
  components:{navBar},
  setup(){
    const router =useRouter() 
    const store =useStore()
    const userInfo =reactive({
      email:"",
      password:"",
      
    })

   const onSubmit=()=>{
     login(userInfo).then(res=>{
       console.log(res.access_token)
       //將token保存在本地 window.LocationStorage  setItem(key,value) getItem(key)
       window.localStorage.setItem('token',res.access_token)
       //在vuex(刷新即消失) isLogin臨時保持一個狀態登入
       store.commit('setIsLogin',true)

       Toast.success('登入成功')
       userInfo.email=""
       userInfo.password=""
       setTimeout(()=>{
         router.go(-1)
       },500)
     })
   }
    return{...toRefs(userInfo),onSubmit}
  }
}
</script>

<style  scoped>
 

</style>