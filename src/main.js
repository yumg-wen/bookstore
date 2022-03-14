import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入自適應
// import "lib-flexible-computer";
// import 'postcss-px2rem'

import 'vant/lib/index.css'
import { Swipe, SwipeItem, Lazyload,Badge,Sidebar, SidebarItem,Collapse, CollapseItem,Tab, Tabs,Card,Image as VanImage ,Button ,Tag,Form, Field, CellGroup,Checkbox, CheckboxGroup,SwipeCell,SubmitBar,Stepper,Icon,AddressEdit,AddressList,Popup,Grid, GridItem} from 'vant'
createApp(App)
.use(store).use(router)
// 首頁
.use(Lazyload,{loading:require('./assets/imgs/book.jpg')})
.use(Swipe).use(SwipeItem).use(Badge)
// 分類
.use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Tab)
.use(Tabs).use(Card)
//商品詳情
.use(VanImage).use(Button).use(Tag)
//註冊
.use(Form).use(Field).use(CellGroup)
//購物車
.use(Checkbox).use(CheckboxGroup).use(SwipeCell).use(SubmitBar).use(Stepper)
//個人中心
.use(Icon)
//地址編輯
.use(AddressEdit).use(AddressList)
//提交訂單
.use(Popup).use(Grid).use(GridItem)
.mount('#app')





