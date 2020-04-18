import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ThietBi from '../views/ThietBi.vue'


//import ThietBiCreate from '../views/ThietBi/Create.vue'

Vue.use(VueRouter)

const checkLogin = (to, from, next) => {

  const loggedIn = localStorage.getItem('chutro-token');
  
  if (!loggedIn) {
    return next('/login');

  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: checkLogin,

  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/login',
    name: "Login",
    component: Login,

  },
  {
    path: '/thietbi',
    name: 'ThietBi',
    children:[
      {
        path:'create',
        name:'thietBiCreate',
        component:()=>import('../views/ThietBi/Create.vue'),
      },
      {
        path:'danhsach',
        name: 'thieBiDanhSach',
        component:()=>import('../views/ThietBi/danhsach.vue')
      },
    ],
    component:ThietBi,
  },
  {
    path :'/dichvu',
    name: 'dichvu',
    component:()=>import('../views/DichVu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
