<template>
  <div class="create-order">
     <nav-bar>
       <template v-slot:default>訂單預覽</template>
     </nav-bar>
     <div class="address-wrap">
       <div class="name" @click="goTo">
         <span>{{address.name}}</span>
         <span>{{address.phone}}</span>
       </div>
       <div class="address">
        {{address.province}}{{address.city}}{{address.county}}{{address.address}}
       </div>
       <van-icon name="arrow" @click="goTo"/>
     </div>
     <div class="good">
       <div class="good-item" v-for="item,index in cartList" :key="index">
         <div class="good-img"><img v-lazy="item.goods.cover_url" alt=""></div>
         <div class="good-desc">
           <div class="good-title">
             <span>{{item.goods.title}}</span>
             <span>x1{{item.num}}</span>
           </div>
           <div class="good-btn">
             <div class="price"><small>$</small>{{item.goods.price}}</div>
           </div>
         </div>
       </div>
     </div>
  </div>
  <van-submit-bar 
      class="submit-all"
      :price="total*100" 
      button-text="提交訂單" 
      @submit="handleCreateOrder" >
    商品金額
  </van-submit-bar>

   <van-popup
       closeable
       :close-on-click-overlay='false'
       v-model:show="showPay"
       position="bottom"
       :style="{height:'40%'}"
       @close='close'
>
   <van-grid :border="false" :column-num="2">
     <van-grid-item>
       QRCode<br>
     <van-image width="150" height="150" :src="aliyun" />
    </van-grid-item>
    <van-grid-item>
       轉帳 <br>
      <van-image  width="150" height="150" :src="aliyun" />
    </van-grid-item>
 
</van-grid>

   </van-popup>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import {getOrderPreview,payOrder,payOrderStatus,createOrder} from 'network/order'
import {reactive,toRefs,ref,computed,onMounted} from'vue'
import {Toast} from 'vant'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
  name:'cerateOrder',
  components:{navBar},
  setup(){
    const store=useStore()
    const route=useRoute()
    const router=useRouter()
    const state=reactive({
      cartList:[],
      address:{},
      showPay:false,
      orderNo:'',
      aliyun:''
    })
    const init=()=>{
      Toast.loading({message:"加載中...",forbidClick:true})
      //獲取訂單數據
      getOrderPreview().then(res=>{
        // console.log(res)
        //獲取地址訊息
        let address=res.address.filter(n=>n.is_default=='1')
        if(address.length==0){
          state.address={
            address:"未有寄送地址，請選擇或添加地址"
          }
        }else{
          state.address=address[0]
        }
        //獲取購物車商品訊息
        state.cartList=res.carts
        Toast.clear()
      })
    }
    onMounted(()=>{
      init()
    })

    const goTo=()=>{
      router.push({path:'/address'})
    }
    const close=()=>{}
    const handleCreateOrder=()=>{
      const params={
        address_id:state.address.id
      }
        createOrder(params).then(res=>{
          Toast('創建成功')
          store.dispatch('updateCar')
          state.showPay=true
          //訂單id
          state.orderNo=res.id
          payOrder(state.orderNo,{type:'aliyun'}).then(res=>{
            state.aliyun=res.qr_code_url
            })

          //支付完成查看
          const timer=setInterval(()=>{
            payOrderStatus(state.orderNo).then(res=>{
              if(res==2){
                clearInterval(timer)
                router.push({path:'/order',query:{state:2}})
              }
            })
          },2000)
        })
    }

   //計算總價
   const total=computed(()=>{
     let sum=0
     state.cartList.forEach(item=>{
       sum+=parseInt(item.num)*parseFloat(item.goods.price)
     })
     return sum
   })
    return{
      ...toRefs(state),goTo,close,handleCreateOrder,total
    }
  }
}

</script>

<style lang='less'>
.create-order{
  background: #f9f9f9;
  .address-wrap{
    text-align: center;
    margin-bottom: 20px;
    background: #fff;
    position: relative;
    margin-top: 44px;
    font-size: 14px;
    padding: 15px;
    color: #222333;
    .name,.address{
      margin: 10px 0;
    }
    .arrow{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY((-50%));
      font-size: 20px;
    }
}
.good{
  margin-bottom: 120px;
}
.good-item{
  padding: 10px;
  background: #fff;
  display: flex;
  .good-img{
    width: 100%;
    height: auto;
  }
  .good-desc{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 20px;
    .good-title{
      display: flex;
      justify-content: space-between;
    }
    .good-btn{
      display: flex;
      justify-content: space-between;
      .price{
        font-size: 16px;
        color: red;
        line-height: 28px;
      }
      
    }
  }
}

}

</style>