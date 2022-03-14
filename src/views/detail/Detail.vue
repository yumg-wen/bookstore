<template>
<div>
   <nav-bar>
      <template v-slot:default>商品詳情 {{id}}</template>
    </nav-bar>
    <!-- 封面圖 -->
    <van-image style="margin-top:1.875rem"
    width="100%" lazy-load :src="detail.cover_url" />
    <!-- 商品資訊(卡片) -->
   <van-card
     :num="detail.stock"
     :price="detail.price"
     :desc="detail.description"
     :title="detail.title"
   >
     <template #tags>
      <van-tag type="primary">{{detail.collects_count>3?"新書報到":""}}</van-tag>
      
      <van-tag style="margin-left:3px"  type="danger">{{detail.collects_count>5 ?"推薦":""}}</van-tag>

     </template>
     <template #footer>
       <van-button type="warning" @click="handleAddCar">加入購物車</van-button>
        <van-button type="danger" @click="buyNow">立即購買</van-button>
     </template>
    </van-card>
    <!-- 標籤頁 -->
    <van-tabs v-model:active="active">
  <van-tab title="概述">
    <div class="content" v-html="detail.details"></div>
  </van-tab>
  
    
 
  <van-tab title="相關圖書">
     <goos-list :goods='like_goods' ></goos-list> 
  </van-tab>
  
</van-tabs>

</div>
  
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import GoosList from 'components/content/goods/goosList.vue' 
import {getDetail} from 'network/detail.js' 
import {useRoute,useRouter} from 'vue-router'
import {ref,onMounted,reactive,toRefs} from 'vue'
import {addCar} from 'network/car.js'
import { Toast } from 'vant'
import {useStore} from 'vuex'
export default {
  name:'Detail',
  components:{navBar,GoosList},
  setup(){
    let active=ref(0)
    
    const route=useRoute()
    const router=useRouter()
    //router是指定路徑，路由器
    //route 是可帶參數 
    const store=useStore()
    let id=ref(0)
    id.value=route.query.id

    let book=reactive({
      detail:{},
      like_goods:[],
      
      
    })
    onMounted(()=>{
      getDetail(id.value).then(res=>{
        // console.log(res)
        book.detail=res.goods
        book.like_goods=res.like_goods        
      })
    })

    // 因為已有商品id，直接寫方法  加入購物車、立即購買
    const handleAddCar=()=>{
      addCar({goods_id:book.detail.id,num:1}).then(res=>{
        if(res.status=='201' || res.status=='204'){
           Toast.success('添加成功')
           //原本無數據的系統會返回201，已有數據則返回204，故有兩個狀態
           //設置store中carCount
           store.dispatch('updateCar')
        }
       console.log( res.status)
      })
    }

    const buyNow=()=>{
     addCar({goods_id:book.detail.id,num:1}).then(res=>{
        if(res.status=='201' || res.status=='204'){
           Toast.success('準備結帳囉!!')
           store.dispatch('updateCar')
           router.push({path:'/shopcar'})

        }
       console.log( res.status)
      })
    }
    return{id,...toRefs(book),active, handleAddCar,buyNow}
  }

}
</script>

<style lang="less" scoped>
.content{
  padding: 10px;
  
}


</style>