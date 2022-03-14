import { createStore } from 'vuex'
import getters from './getters'
import mutations  from './mutations'
import actions from './actions'

const state ={
  user:{
    // isLogin:false vuex只是暫時性，一刷新又會恢復原設定
    isLogin:window.localStorage.getItem('token') ? true:false,
    //改設定存儲於本地，刷新存在為真，否則為假
    //購物車圖標數量(carCount)
    carCount:0,
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
