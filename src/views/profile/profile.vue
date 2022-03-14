<template>
<div id="box">
   <nav-bar>
    <template v-slot:default>個人中心</template>
  </nav-bar>
  <div class="user-box">
    <div class="user-info">
      <div class="info">
       <img src="~assets/imgs/7.jpg" alt="">
       <div class="user-desc">
         <span>暱稱:{{user.name}}</span>
         <span>登入名:{{user.mail}}</span>
         <span class="name">個性簽名:我的購物我做主!!</span>
       </div>
      </div>
    </div>
    <ul class="user-list">
      <li class="van-hairline--bottom" @click="goTo('/collect')">
        <span>我的收藏</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/order')">
        <span>我的訂單</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/settig')">
        <span>帳號管理</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/address')">
        <span>地址管理</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/about')">
        <span>關於我們</span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
  <div style="margin:16px">
     <van-button round  type="primary"
      color="var(--color-tint)"
      @click="toLogout"
     >退出</van-button>
  </div>
</div>
  
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import {logout,getUser} from 'network/user.js'
import { Toast } from 'vant'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {onMounted, reactive,toRefs} from 'vue'
export default {
  name:'Profile',
  components:{navBar},
  setup(){
    const router=useRouter()
    const store=useStore()
    // 個人訊息的狀態管理
    const state=reactive({
      user:{

      }
    })
     onMounted(()=>{
         getUser().then(res=>{
           state.user=res
         })
        })
    const toLogout=()=>{
      logout().then(res=>{
        if(res.status=='204'){
          Toast.success('已登出');
          //清除token
          window.localStorage.setItem('token',"")
          
          store.commit('setIsLogin',false)

          setTimeout(()=>{
              router.push({path:"/login"})
          },0)

        }
        })
    }
     //共同跳轉方法(path:路徑,query:參數)
        const goTo = (path,query)=>{
          router.push({path,query:query||{}})
        }
    return{toLogout,getUser,...toRefs(state),goTo}
  }

}
</script>

<style lang='less' scoped>
#box{
  background: #fcfcfc;
  height: 100vh;
  .user-box{
  margin-top: 65px;
  .user-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding: 0 44px;
    color: var(--color-tint);
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .user-name{
      font-size: 14px;
    }
  }
  .user-info{
    width: 94%;
    margin: 10px;
    height: 115px;
    background: linear-gradient(to right,#31c7a7,#A1c7c7);
    box-shadow: 0 2px 5px #269090;
    border-radius: 6px;
    margin-top: 50px;
    text-align: left;
    .info{
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      padding: 25px 20px;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-top: 4px;
      }
      .user-desc{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        line-height: 20px;
        font-size: 14px;
        color:rgb(73, 69, 69);
        span{
          display:inline-block;
          color: rgb(46, 44, 44);
          font-size: 14px;
          padding: 2px 0;
        }
      }
      .account-setting{
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 13px;
        color: #fff;
        .van-icon-setting-o{
          font-size: 16px;
          vertical-align: -3px;
          margin-right: 4px;
        }
      }
    }
  }
  .user-list{
    padding: 0 8px;
    margin-top: 40px;
    li{
      padding:0 5px;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content:space-between;
      font-size: 14px;
      .van-icon-arrow{
        margin-top: 13px;
      }
      margin: 20px 0 !important;
      background: #fff;
      border-radius: 3px;
    }
  }
}
}

</style>