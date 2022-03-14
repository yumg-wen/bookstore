<template>
 <div class="address-box">
     <nav-bar>
    <template v-slot:default>地址管理</template>
  </nav-bar>
   <div v-show="list.length==0" >
    請添加地址
   </div>
   <div class="address-item">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
   </div>
 </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import { onMounted, reactive, ref, toRefs } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {getAddressList} from 'network/address'

export default {
  name:'Address',
  components:{navBar},
  setup() {
    const router=useRouter()
    const store=useStore()
    const state=reactive({
      chosenAddressId:1,
      list:[]
    })
    onMounted(()=>{
       getAddressList().then(res=>{
         if(res.data.length==0){
           state.list=[]
           return
         }
         state.list=res.data.map(item=>{
           return{
             id:item.id,
             name:item.name,
             tel:item.phone,
             address:`${item.province} ${item.city} ${item.address}`,
             isDefault:!!item.is_default
           }
         })
       })
    })
    

    const onAdd = () => {
      router.push({path:'/addressEdit',query:{type:'add'}})
    }
    const onEdit = (item) => {
      router.push({path:'/addressEdit',query:{type:'edit',addressId:item.id}})
    }
     const select = (item) => {
      router.push({path:'createOrder',query:{addressId:item.id}})
    }

    return {
      ...toRefs(state),
      onAdd,
      onEdit,
      select,
    };
  },
};
</script>

<style  >
.address-box{
  height: 300px;
}
.address-item{
    margin-top: 45px;
  }

.van-radio_icon{
    display: none;
  }
.van-address-list__bottom ,.van-safe-area-button{
    bottom: 120px ;
    left: 1px ; 
}
.van-button{
      background:var(--color-tint);
      border-color: var(--color-tint);
    }
    .van-address-list__add {
    height: 50px ;
    
}
</style>