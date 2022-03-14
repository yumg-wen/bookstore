import {getCar} from 'network/car'

const actions={
  updateCar({commit}){
    getCar().then(res=>{
      commit('addCar',{count:res.data.length||0})
    })
  }
}

export default actions

//action是異步處理時才使用