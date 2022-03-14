<template>
<div class="address-edit-box">
   <nav-bar>
    <template v-slot:default>{{title}}</template>
  </nav-bar>
  <van-address-edit
  :area-list="areaList"
  :address-info="addressInfo"
  :show-delete="type=='edit'"
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['請選擇', '請選擇', '請選擇']"
  @save="onSave"
  @delete="onDelete"
  
/>

</div>
  
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import { useRouter,useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { reactive, toRefs, onMounted,computed } from 'vue'
import {addAddress,editAddress,deleteAddress,getAddressList} from 'network/address'
import {tdist} from 'utils/address'
import { Toast } from 'vant'
export default {
  name:'addressEdit',
  components:{navBar},
  setup(){
    const route=useRoute()
    const router =useRouter()
    const store =useStore()
    const state=reactive({
      areaList:{
        province_list:{},
        city_list:{},
        county_list:{},

      },
      searchResult:[],
      addressInfo:{},
      type:'add',
      addressId:'',
      title:"",
    })
    onMounted(()=>{
      //縣市列表構造
      let _province_list={}
      let _city_list={}
      let _county_list={}
      // console.log(tdist.getLev1())
      tdist.getLev1().forEach(p => {
       _province_list[p.id]=p.text
       tdist.getLev2(p.id).forEach(c=>{
         _city_list[c.id]=c.text
         tdist.getLev3(c.id).forEach(q=>{
           _county_list[q.id]=q.text
          
         })
       })
             
     })
     
      state.areaList.province_list=_province_list
      state.areaList.city_list=_city_list
      state.areaList.county_list=_county_list

      //接收參數
      const {type,addressId}=route.query

      state.type=type
      state.addressId=addressId
      if(type=='edit'){
        getAddressDetail(addressId).then(res=>{
          const addressDetail=res

          let _areaCode=''
          const province=tdist.getLev1()
          Object.entries(state.areaList.county_list).forEach(([id,text])=>{
            //先找出當前對應的區
            if(text==addressDetail.county){
              //找出區對應的幾個省份
              const provinceIndex=province.findIndex(item=>item.id.substr(0,2)==id.substr(0,2))
              //找到區對應的市區
              //eslint-disable-next-Line no-unused-vars
              const cityItem=Object.entries(state.areaList.city_list).filter(([cityId,city])=>cityId.substr(0,4)==id.substr(0,4))
              //對比找到的省分和街口返回的省分是否相等，因為有一些區可能重名
              if(province[provinceIndex].text==addressDetail.province &&cityItem[1]==addressDetail.city){
                _areaCode=id
              }
            }
          })

          state.addressInfo={
            name:addressDetail.name,
            tel:addressDetail.phone,
            province:addressDetail.province,
            city:addressDetail.city,
            county:addressDetail.county,
            areaCode:addressDetail._areaCode,
            addressDetail:addressDetail.address,
            isDefault:!!addressDetail.is_default
          }
        })
      }

    })
    const title=computed(()=>{
      return state.type=='add'?"新增地址":"編輯地址"
    })

    const onSave=(content)=>{
      // console.log(content)
      const params={
        name:content.name,
        phone:content.tel,
        province:content.province,
        city:content.city,
        county:content.county,
        address:content.addressDetail,
        is_default:content.isDefault ? 1 : 0
      }

      if(state.type =='edit'){
        //修改數據
        editAddress(state.addressId,params)
      }else if(state.type=='add'){
         //調用接口，添加數據
      addAddress(params)
      }
      

      Toast.success('保存成功')
      setTimeout(()=>{
        router.back()
      },1000)
    }
    const onDelete=()=>{
      deleteAddress(state.addressId).then(res=>{
        Toast('刪除成功')
        setTimeout(()=>{
         router.back()
      },1000)
      })
      
    }
    return{
   ...toRefs(state),onSave,onDelete,title
  }
 }
 
}
</script>

<style scoped>
.address-edit-box{
  margin-top: 70px;
}

</style>