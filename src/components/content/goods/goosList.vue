<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item" 
    :product="item"></goods-list-item>
      <!-- 把值再傳給子組件 product-->
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem'
export default {
  name:'goodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
  
}
</script>

  
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: .3125rem;
}

</style>