<template>
<div id="home">
  <!-- 頂部固定區 文字變動插槽內容 -->
    <nav-bar>
      <template v-slot:default>圖書兄弟</template>
    </nav-bar>
  <!-- 到一定高度選項卡固定不動 -->
    <tab-control
      v-show="isTabFixd" 
      :titles="['暢銷','新書','精選']"
      @tabClick="tabClick"></tab-control>

  <!-- better-scroll套件使用 必須要有wrapper(固定高度).content包裹 -->
  <div class="wrapper">
    <div class="content">
      <!-- 計算高度isTabFixd=>banref   -->
     
      <div ref="banref">
          
           <!-- 輪播暫時替代區<div class="banners">
             <img src="@/assets/imgs/7.jpg" alt="">  
           </div>   -->
        <!-- 輪播圖 -->
         <home-swiper :banners='banners'></home-swiper>
      
        <!--推薦區   自定義一個陣列，傳給子組件 -->
        <recommend-view :recommends='recommends'></recommend-view> 
      </div>
      

  <!--選項卡 通過子級傳入的tabClick設置一個方法接收值 -->
    <tab-control 
      :titles="['暢銷','新書','精選']"
      @tabClick="tabClick"></tab-control>

  <!-- 商品列表 -->
    <goos-list :goods='showGoods' ></goos-list>  
      </div>
    </div>
  <!-- 底部出現向上箭頭 -->
   <back-top v-show="isBackTop" @click="backTop"></back-top> 
  </div>
  
   
</template>

<script>

import navBar from 'components/common/navbar/NavBar.vue'
import RecommendView from './children/RecommendView'
import TabControl from 'components/content/tableControl/TabControl.vue'
import GoosList from 'components/content/goods/goosList.vue'
import backTop from 'components/common/backtop/backTop.vue'
import HomeSwiper from './children/homeSwiper.vue'

import {getHomeAllData,getHomeGoods} from 'network/home.js'
import {ref,reactive,onMounted, computed, watchEffect, nextTick} from 'vue'

import BScroll from 'better-scroll'




export default {
  name:'Home',
  components:{navBar,RecommendView, TabControl, GoosList,backTop,
    HomeSwiper
  },
  setup(){
    
    //請求到的slides要渲染畫面中
    let banners=ref([])
    
    let isTabFixd=ref(false)
    let isBackTop=ref(false)
    let banref=ref(null)
    
   

    //渲染推薦區
    const recommends=ref([])

   
    
    //渲染商品資訊(商品列表數據模型)
    const goods=reactive({
      sales:{
        page:1,
        list:[]
      },
      recommend:{
        page:1,
        list:[]
      },
      new:{
        page:1,
        list:[]
      },
    })
    //查看當前顯示的數據  利用計算屬性
    let currentType=ref('sales')
    const showGoods=computed(()=>{
      return goods[currentType.value].list
    })
    
   
    //聲明在鉤子外，其他地方也可以用，不再僅限於鉤子內實現

   let bscroll=reactive({});
   

    onMounted(()=>{
      //所有首頁數據
      getHomeAllData().then(res=>{
        // console.log("推薦商品數據"+res.goods.data)
        recommends.value=res.goods.data
        console.log(res.slides)
        console.log(res.goods.data)
        banners.value=res.slides
      })

      //商品列表 (sales,recommend,new)
      getHomeGoods('sales').then(res=>{
        goods.sales.list=res.goods.data
       
      })
      getHomeGoods('recommend').then(res=>{
        goods.recommend.list=res.goods.data
      })
      getHomeGoods('new').then(res=>{
        goods.new.list=res.goods.data
      })
      //  console.log(goods)

      //創建BScroll
      let wrapper=document.querySelector('.wrapper')
        bscroll = new BScroll(wrapper ,{
        probeType:3,  //只要運行滾動就會觸發
        click:true,  //商品的連結允許可點擊 預設為false
        pullUpLoad:true,  //上拉加載更多  預設為false
      })
     //滾動時，y軸座標
      bscroll.on('scroll',(position)=>{
         
        // console.log(banref.value.offsetHeight)
        // console.log(-position.y)
        isBackTop.value = isTabFixd.value=(-position.y)>(banref.value.offsetHeight)
        
      })
      //螢幕上滑(pillingUp)到底時，數據加載更多
      bscroll.on('pullingUp',()=>{
        // console.log("加載更多成功")
        
        //獲取當前選項卡的頁數
        const page=goods[currentType.value].page+1
        // console.log(page)
        getHomeGoods(currentType.value,page).then(res=>{
          goods[currentType.value].list.push(...res.goods.data)
          goods[currentType.value].page+=1
        })
        //上拉到底後，須等數據加載完，呈現新數據
        bscroll.finishPullUp()
        //一拉動，重新計算高度
        bscroll.refresh()
        //content高度
        console.log('當前高度'+document.querySelector(".content").clientHeight)
         console.log("當前類型"+currentType.value+",當前頁面"+page)
      })
    })
    //切換選項卡，同時變更商品列表
      const tabClick=(index)=>{
       let types=["sales","new","recommend"]
       currentType.value=types[index]
      //  console.log(currentType.value)
       nextTick(()=>{
         //切換選項卡時，立馬重新計算高度(refresh)
         bscroll &&  bscroll.refresh()
      })

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
        // console.log('點擊回頂部(0,0)位置，0.5秒')
       bscroll.scrollTo(0,0,500)
     }
    return{recommends,tabClick,goods,showGoods,isTabFixd,banref,isBackTop,backTop
    ,banners}
    
  }

} 
</script>

<style scoped>

#home{
  height: 100vh;
  position: relative;
 
}
.wrapper{
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  bottom: 3.125rem;
  overflow: hidden;

}


</style>