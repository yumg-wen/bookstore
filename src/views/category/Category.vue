<template>
  <!-- 頂部 -->
  <nav-bar>
    <template v-slot:default>我的分類</template>
  </nav-bar>
  <div class="main-box">
    <!-- 左側菜單欄利用插件(摺疊面板+側編導欄)分兩級 -->
    <van-sidebar v-model="activeKey" class="left-menu">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-for="item in categories" :key="item.id" :title="item.name" :name="item.name">
          <!-- 子級 -->
            <van-sidebar-item 
             v-for="sub in item.children" :key="sub.id" :title="sub.name"
             @click="getGoods(sub.id)"  />
        </van-collapse-item>
      </van-collapse>
    </van-sidebar>
    <!-- 上部選項利用Tab標籤頁 -->
    <div class="order-tab">
     <van-tabs v-model:active="active" @click="clickTab">
      <van-tab title="銷量排序"></van-tab>
      <van-tab title="價格排序"></van-tab>
     <van-tab title="評論排序"></van-tab>
     </van-tabs>
    </div>
    <!-- 使用better-scroll  good-list為外層固定高容器-->
    <div class="goodList">
      <div class="content">
        <van-card
        v-for="item in showGoods" :key="item.id"
        @click="itemClick(item.id)"
        :num="item.comments_count "
        :tag="item.comments_count >=3?'流行':'推薦'"
        :price="item.price"
        :desc="item.updated_at"
        :title="item.title"
        :thumb="item.cover_url"
        :lazy-load="true"
        />
      </div>
    </div>
   <!-- 底部出現向上箭頭 -->
   <back-top v-show="isBackTop" @click="backTop"></back-top>
  </div>
   
    
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import backTop from 'components/common/backtop/backTop.vue'
import {getCategory,getCategoryGoods} from 'network/category.js'
import {useRouter} from 'vue-router'
import {ref,reactive,onMounted, computed,watchEffect,nextTick}from 'vue'
import BScroll from 'better-scroll'
export default {
  name:'CateGory',
  components:{navBar,backTop},
  setup(){
    const router =useRouter()
    let isBackTop=ref(false)
    let categories= ref ([])
    // 默認值以vant設定為主
    let activeKey=ref(0)
    let activeName=ref(1)
    let active=ref(1)

    //當前排序條件(默認sales)
    let currentOrder=ref('sales')
    //當前分類的id(默認0)
    let currentId=ref(0)

    //數據模型(上拉加載、sales、price...等數據)
    const goods=reactive({
      sales:{page:1,list:[]},
      price:{page:1,list:[]},
      comments_count:{page:1,list:[]},
    })
    //通過計算屬性，order-tab顯示相對應的數據
    const showGoods=computed(()=>{
      //點擊選項卡顯示對應數據 
      return goods[currentOrder.value].list
    })

    //通過初始化 getCategoryGoods獲取細項數據
    const init=()=>{
      getCategoryGoods('sales',currentId.value).then(res=>{
       goods.sales.list=res.goods.data})
      getCategoryGoods('price',currentId.value).then(res=>{
       goods.price.list=res.recommend_goods})
      getCategoryGoods('comments_count',currentId.value).then(res=>{
       goods.comments_count.list=res.recommend_goods})
     
    }
    let bscroll=reactive({});

    onMounted(()=>{
      getCategory().then(res=>{
          // console.log(res)
        categories.value=res.categories
      })
      //頁面加載所有值後調用 init()
      init()

      //創建BScroll
      let goodList=document.querySelector('.goodList')
      bscroll = new BScroll(goodList ,{
        probeType:3,  //只要運行滾動就會觸發
        click:true,  //商品的連結允許可點擊 預設為false
        pullUpLoad:true,  //上拉加載更多  預設為false
      })
    
      //註冊滾動事件
      bscroll.on('scroll',(position)=>{
       isBackTop.value=(-position.y)>800
      })

      //螢幕上滑(pillingUp)到底時，數據加載更多
      bscroll.on('pullingUp',()=>{
        // console.log("加載更多成功")
        const page=goods[currentOrder.value].page+1

        getCategoryGoods(currentOrder.value,currentId.value).then(res=>{
          //用push()新增頁往後加而非取代前頁
           goods[currentOrder.value].list.push(...res.goods.data)
           goods[currentOrder.value].page+=1
        
      })  
        //上拉到底後，須等數據加載完，呈現新數據
        bscroll.finishPullUp()

        nextTick(()=>{
         //高度一有變化，立馬重新計算高度(refresh)
        // bscroll &&  bscroll.refresh()
       bscroll && bscroll.refresh()
        console.log('計算成功')
      })
        // //一滾動，就重新計算高度
        // bscroll.refresh()
        //content高度
         console.log('當前高度'+document.querySelector(".content").clientHeight)
         console.log("當前類型"+currentOrder.value+",當前頁面"+page)
      })
    })
    //點選項卡排列
    const clickTab=(index)=>{
      let orders=['sales','price','comments_count']
      currentOrder.value=orders[index]
      getCategoryGoods('sales',currentId.value).then(res=>{
       goods.sales.list=res.goods.data})

       bscroll && bscroll.refresh()
      
    }
    
    //通過分類(子級)得到商品
    const getGoods=(id)=>{currentId.value=id
      //點擊選項卡後調用init()
      init()
      // console.log('當前分類id:'+currentId.value)
      // console.log('排列序號:'+currentOrder.value)
    }

    //監聽高度變化
     watchEffect(()=>{
      //等整個dom元素加載完(nextTicket)才重新計算
      nextTick(()=>{
         //高度一有變化，立馬重新計算高度(refresh)
        // bscroll &&  bscroll.refresh()
       bscroll && bscroll.refresh()
        console.log('計算成功')
      })

     })
     const backTop=()=>{
        bscroll.scrollTo(0,0,300)
     }
    return{activeKey,categories,activeName,active,isBackTop,backTop,
    clickTab,currentOrder,currentId,getGoods,goods,showGoods,bscroll,
    itemClick:(id)=>{
      router.push({path:"/detail",query:{id}})
    }}
  }
}


</script>

<style lang='less' scoped>
.main-box{
   display: flex;
   margin-top: 3.125rem;
   .order-tab{
    position: fixed;
    top: 2.5rem;
    right: 0;
    width:15.625rem;
    height: 1.875rem;
    z-index: 10;
  }
  .left-menu{
    position: fixed;
    top: 5.9375rem;
    left: 0;
    height: auto;
    width:auto;
  }

  .goodList{
    font: .0625rem;
    position: absolute;
    top:6.875rem;
    right: 0;
    width:15.625rem;
    height: 100vh;
   .content{
     padding-top: 5.3125rem;
     
   }
   
  } 
}
@media (mix-width:750px) {
  .main-box .order-tab {
    width: 60rem;
    position: fixed;
    left: 12.5rem !important;
    font-size: 1.25rem;
  }
  .goodList .content{
    width: 50rem;
  }
  
}
</style>