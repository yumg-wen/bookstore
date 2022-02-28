<template>
<div class="recommend">
   <div class="recommend-item" 
      v-for="item in recommends.slice(0,4)" :key="item.id">
    <a href="" @click.prevent="goD(item.id)">
      <img v-lazy="item.cover_url" >
      <div>{{item.title}}</div>
    </a>

  </div>
  

  
 
</div>
 
</template>

<script>
import {useRouter} from 'vue-router'
export default {
   name:'RecommendView',
   props:{
     recommends:{
       type:Array,
       default(){
         return []
       }
     }
   },
   setup(){
     const router = useRouter()
     const goD=(id)=> {
       router.push({ path: '/detail', query: { id } })
     }
      return { goD }
   }
}

</script>

<style lang="less" scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: .9375rem 0 1.875rem;
  border-bottom: 8px solid #eee;
  font-size: .625rem;
  .recommend-item{
    flex: 1;
    img{
      width: 3.75rem;
      height: 4.375rem;
      margin-bottom: .625rem;
    }
  }
}

</style>