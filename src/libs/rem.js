function remSize(){
  var deviceWidth =document.documentElement.clientWidth ||window.innerWidth;
  if (deviceWidth>=750){
    deviceWidth=750
  }
  if (deviceWidth<=320){
    deviceWidth=320
  }
  document.documentElement.style.fontSize = (deviceWidth/7.5)+"px"
//設計稿為750px，一半為375px。1rem==100px，所以一半就是37.5rem
document.querySelector('body').style.fontSize =16+'px'
}


remSize()

window.onresize =function(){
  remSize()
}