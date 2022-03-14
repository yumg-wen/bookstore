import { Notify } from 'vant'
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'



const Home = () => import('views/home/home')
const category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
const Profile = () => import('views/profile/profile')
const ShopCar = () => import('views/shopcar/shopCar')
const Register =()=> import('views/profile/register')
const Login =()=> import('views/profile/login')
const Address =()=> import('views/profile/address')
const addressEdit =()=> import('views/profile/addressEdit')
const createOrder =()=>import('views/order/createOrder')



const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:'圖書商城'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'圖書商城'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta:{
      title:'圖書商城-分類'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta:{
      title:'圖書商城-商品詳情'
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title:'圖書商城-個人中心',
      isAuthRequired:true
    }
  },
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component: ShopCar,
    meta:{
      title:'圖書商城-購物車',
      isAuthRequired:true
    }
  }, 
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:'圖書商城-註冊中心'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'圖書商城-登入中心',
      isAuthRequired:true
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta:{
      title:'地址管理',
      isAuthRequired:true
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: addressEdit,
    meta:{
      title:'編輯地址',
      isAuthRequired:true
    }
  },
  {
    path: '/createOrder',
    name: 'createOrder',
    component: createOrder,
    meta:{
      title:'訂單預覽',
      isAuthRequired:true
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  //如果沒有登錄，到Login
  if(to.meta.isAuthRequired && store.state.user.isLogin===false ){
    Notify("尚未登入，請先登入")
    if(to.path=='/login'){
      next()
    }else{
    next('/login')}
    //若直接寫next('/login)會造成死循環，所以必須使用if/else避免死循環
  } 
  else{next()}

  document.title=to.meta.title
})
export default router
