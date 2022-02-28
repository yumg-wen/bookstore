<template>
  <div class="goods-item" @click="itemClick">
    <!-- itemClick不用傳參(product.id)是因為已經有是因為已經有product資訊 -->
    <img v-lazy="product.cover_url" >
    <div class="goods-info">
      <p>{{product.title}}</p>
      <span class="price"> <small>$</small> {{product.price}}</span>
      <span class="collect"><i class="fa-solid fa-star"></i>{{product.collects_count}}</span>
    </div>
  </div>
</template>

<script>
import {routeLocationKey, useRouter} from 'vue-router'
export default {
 name:"goodListItem",
 props:{
    product:Object,
      default(){
          return{
            
            }
          } 
  },
  setup(props){
    const router=useRouter()
    return{itemClick:()=>{
              router.push({path:'/detail',query:{id:props.product.id}})}
    }
   }
}
</script>

<style lang="less" scoped>
  .goods-item{
    width: 45%;
    padding-bottom: 1.125rem;
    position: relative;
    img{
      width: 100%;
      border-radius: .3125rem;
    }
    .goods-info{
      font-size: 1rem;
      // position: absolute;
      left: 0;
      right: 0;
      overflow: hidden;
      text-align: center;
      p{
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: .125rem 0;
      }
      .price{
      color: #ff0000;
      font-weight: 900;
      margin-right: 1.25rem;
      margin-bottom: .1875rem;
      }
      .collect{
      position: relative;
      i{
        font-size: 18px;
        padding-right: .375rem;
      }
     
      }
     }
  } 
  

</style>