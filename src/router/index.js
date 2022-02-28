import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/home')
const category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
const Profile = () => import('views/profile/profile')
const ShopCar = () => import('views/shopcar/shopCar')
const Register =()=> import('views/profile/register')
const Login =()=> import('views/profile/login')

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
      title:'圖書商城-個人中心'
    }
  },
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component: ShopCar,
    meta:{
      title:'圖書商城-購物車'
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
      title:'圖書商城-登入中心'
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  //如果沒有登錄，到Login
  next()
  document.title=to.meta.title
})
export default router
