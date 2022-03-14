<template>
  <nav-bar>
    <template v-slot:default>購物車
     ( <span style="color:red"> {{$store.state.user.carCount}} </span> )</template>
  </nav-bar>
  <div class="car-box">
    <div class="car-body">
      <!-- 購物車 -->
      <van-checkbox-group  ref="checkboxGroup" @change="boxChange" v-model="result">
        <van-swipe-cell :right-width="50"
        v-for="(item,index) in list" :key="index">
          <div class="good-item">
            <van-checkbox :name="item.id"/>
            <div class="good-img">
              <img :src="item.goods.cover_url" alt="">
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{item.goods.title}}</span>
                <span>X{{item.goods.stock}}</span>
              </div>
              <div class="good-btn">
                <div class="price"><small>$</small>{{item.goods.price}}</div>
                <van-stepper 
                integer :min="1" :max="item.goods.stock" :model-value="item.num" :name="item.id" async-change
                @change="onChange" />
              </div>
            </div>
          </div>
         <template #right>
            <van-button square type="danger" icon="delete" class="delete-button" @click="deleteGood(item.id)"/>
         </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar class="submit-all" :price="total*100" button-text="結算" @submit="onSubmit" >
      <van-checkbox v-model:checked="checkAll" @click='allCheck'>全選</van-checkbox>
    </van-submit-bar>

    <!-- 若購物車為空(list.length=0)，則顯示此列表 -->
    <div class="empty" v-if="!list.length">
      <img src="~assets/imgs/logo.jpg" alt="空購物車" class="empty-cart">
      <div class="title">請添加商品</div>
      <van-button round color="#1baeae" type="primary" block @click="goto">前往選購</van-button>
    </div>
  </div>
  
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import {useRouter} from 'vue-router'
import {ref,reactive,toRefs,onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {Toast} from 'vant'
import {modifyCar,checked,getCar,deleteCarItem}from 'network/car.js'
export default {
  name:'ShopCar',
  components:{navBar},
  setup(){
    const router=useRouter()
    const store =useStore()
    // 購物車數據狀態
    const state=reactive({
      list:[],
      result:[],
      checkAll:false
    })
    //購物車數據初始化  forbidClick:禁止點擊
    const init=()=>{
      Toast.loading({message:"加載中...",forbidClick:true})
      getCar('include=goods').then(res=>{
        // 取得數據就可將數據放入列表中
        state.list=res.data
        // console.log(res.data)
        Toast.clear()
        //數據結果
        state.result=res.data.filter(n=>n.is_checked==1).map(item=>item.id)
        console.log(state.result)
      })
    }
    
    onMounted(()=>{
      //獲取相關數據
      init()
    })
     //異步改變購物車數量
     const onChange=(value,detail)=>{
        Toast.loading({message:"修改中",forbidClick:true})
       console.log(value,detail.name)
      //  modifyCar(id,data)  data={num:1}
      modifyCar(detail.name,{num:value}).then(res=>{
           //onMounted中的list中的num也要改變
           state.list.forEach(item=>{
             if(item.id==detail.name){
               item.num=value
             }
           })
            Toast.clear()
      })

     }
     //選擇框改變處理事件
     const boxChange=(result)=>{
       console.log(result)
       if(result.length==state.list.length){
         state.checkAll=true
       }else{
         state.checkAll=false
       }
       state.result=result
       //改變數據表中選中的狀態
       checked({cart_ids:result})
     }
     //全選狀態
     const allCheck=()=>{
       if(!state.checkAll){
         state.result=state.list.map(item=>item.id)
         state.checkAll=true
       }else{
         state.result=[]
         state.checkAll=false
       }
     }
    //前往購物
    const goto=()=>{
      router.push({
        path:'/home'
      })
    } 
    //刪除事件
    const deleteGood=(id)=>{
      deleteCarItem(id).then(res=>{
        init()//重新初始化
        store.dispatch('updateCar')//改變vuex中的狀態數量
      })
    }
    //通過計算屬性 計算總價
    const total=computed(()=>{
      let sum=0
      state.list.filter(item=>state.result.includes(item.id)).forEach(item=>{
        sum+=parseInt(item.num)*parseFloat(item.goods.price)
      })
      return sum
    })

    //創建訂單
    const onSubmit=()=>{
      if(state.result.length==0){
        Toast.fail('請選擇商品')
        return
      }else{
        router.push({path:'/createOrder'})
      }
    }
    return{
      ...toRefs(state),goto,onChange,boxChange,allCheck,deleteGood,total,onSubmit
    }
  }

}
</script>

<style scoped lang='less'>
.car-box{
  .car-body{
    margin: 60px 0 100px 0;
    padding-left: 10px;
    .good-item{
      display: flex;
      .good-img{
        img{
          width: 100px;
          height: auto;
        }
      }
    }
    .good-desc{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1px;
      padding: 20px;
     .good-title{
       display: flex;
       justify-content:space-between;
     }
     .good-btn{
       display: flex;
       justify-content: space-between;
       .price{
         font-size: 16px;
         color: red;
        line-height: 28px;
       }
       .van-icon-delete{
         font-size: 20px;
         margin-top: 40px;
       }
     }
    }}
    .delete-button{
      width: 50px;
      height: 100%;
    }
    .empty{
      width: 50%;
      margin: 0 auto;
      text-align: center;
      margin-top: 20px;
      .empty-cart{
        width: 150px;
        margin-bottom: 20px;
      }
      .van-icon-smile-o{
        font-size: 50px;
      }
      .tittle{
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .submit-all{
      margin-bottom: 60px;
    .van-checkbox{
      margin-left: 0;
    }
    .van-submit-bar_text{
      margin-right: 10px;
    }
    .van-submit-bar_button{
      background: red;
    }
    }
    .van-checkbox_icon--checked .van-icon{
      background: red;
      border-color: red;
    }
}

</style>