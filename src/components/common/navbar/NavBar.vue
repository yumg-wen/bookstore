<template>
  <div class="nav-bar" @click="goBack">
    <div class="left"><slot name="left">
      <i class="fa-solid fa-angle-left"></i></slot></div>
    <div class="center"><slot>圖書商城</slot></div>
    <div class="right"><slot name="right">
      
      </slot></div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
   name:'navBar',
   setup(){
     const router = useRouter();
     const goBack=()=>{
       router.go(-1)
     }
    return {
      goBack
    }
   }
}
</script>

<style scoped>

.nav-bar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  background:var(--color-tint);
  color: #ffffff;
  font-size:1rem;
  height: 2.5rem;
  line-height:2.5rem;
  box-shadow:0 5px
   0 rgba(100, 100, 100, .1);
  text-align: center;
}
.left,.right{
  width: 50px;
  font-size: 16px;
  
}
.center{
  flex: 1;
}

</style>