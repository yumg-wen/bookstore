<template>

<!-- <router-view v-slot="{ Component }">
  <transition >
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view> -->


     <router-view></router-view>

     <!-- 底部固定區 -->
     <div id="nav">
       <router-link class="table-bar-item" to="/">
         <div class="icon">
           <i class="fa-solid fa-house"></i>
         </div>
         <div>首頁</div>
       </router-link>
  
       <router-link class="table-bar-item" to="/category">
         <div class="icon">
           <i class="fa-solid fa-table"></i>
         </div>
         <div>分類</div>
       </router-link>
  
       <router-link class="table-bar-item" to="/shopcar">
         <div class="icon">
           <van-badge :content="$store.state.user.carCount" max="9">
              <i class="fa-solid fa-cart-shopping"></i>
          </van-badge>
         </div>
         <div>購物車</div>
       </router-link>
  
       <router-link class="table-bar-item" to="/profile">
         <div class="icon">
           <i class="fa-solid fa-user"></i>
         </div>
         <div>我的</div>
       </router-link>
      </div>
     
   
</template>

<script>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
export default {
   name:'app',
   setup(){
     const store=useStore()
     onMounted(()=>{
       //讓購物車數量狀態一直維持
      store.dispatch('updateCar')
     })
     
     
    return {
    
    }
   }
}


</script>





<style >
@import 'assets/css/base.css';

#nav{
  background: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -0.1875rem .625rem rgba(100, 100, 100, .3);
  z-index: 9; 
}

 .table-bar-item{
   flex: 1;
   text-align: center;
   height: 3.125rem;
   color: rgb(90, 80, 80);
  
 }
 .table-bar-item:hover{
    color: #42bBaa;
    font-weight: 900;
 }
 
 .icon>i{
   display: inline-block;
    font-size: 1.125rem;
    margin: .2rem;
    
  }
  @media (mix-width:750px) {
    html{
      font-size: 20px;
    }
    
    .main-box .order-tab {
    width: 60rem;
    position: fixed;
    left: 13rem ;
    font-size: 1.25rem;
  }
  .goodList .content{
    width: 50rem;
  }
  }


</style>
