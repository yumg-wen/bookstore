const mutations={
  setIsLogin(state,payload){
    state.user.isLogin=payload
  },
  addCar(state,payload){
    state.user.carCount=payload.count
  }
}

export default mutations