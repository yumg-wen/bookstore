<template>
<div class="tab-control" >
   <div class="tab-control-item"
        v-for="(item,index) in titles" :key="index"
        @click="clickItem(index)"
        :class="{active:index==currentIndex}">
    <span>{{item}}</span> 
  </div>
</div>
  
</template>

<script>
import {ref} from 'vue'
export default {
  name:'TabControl',
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },
 
  setup(props,{emit}){
    let currentIndex=ref(0)
    const clickItem=(index)=>{
       currentIndex.value=index
       emit('tabClick',index)
    }
   
    return{currentIndex,clickItem}
  }
}
</script>

<style lang="less" scoped>
.tab-control{
  display: flex;
  text-align: center; 
  height: 2.5rem;
  line-height: 2.5rem;
  position: sticky;
  top:2.5rem;
  background: #ffffff;
  font-size: .875rem;
  font-weight: 900;
  z-index: 10;
  
  .tab-control-item{
  flex: 1;
    &:hover{
    color:#42bBaa ;
    span{
      border-bottom: 3px solid #42bBaa;
    }
  }
  span{
    padding: 5px;
  }
}

  
}


</style>