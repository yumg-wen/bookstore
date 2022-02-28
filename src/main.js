import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入自適應
// import "lib-flexible-computer";
// import 'postcss-px2rem'

import 'vant/lib/index.css'
import { Swipe, SwipeItem, Lazyload,Badge,Sidebar, SidebarItem,Collapse, CollapseItem,Tab, Tabs,Card,Image as VanImage ,Button ,Tag,Form, Field, CellGroup} from 'vant'



// import '@/assets/css/base.css'/*引入公共样式*/
// import './libs/rem.js';

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

.mount('#app')

