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
    return next('/quantri/login');

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
    path: '/quantri/login',
    name: "QuanTri Login",
    component: Login,

  },
  {
    path: '/quantri/thietbi',
    name: 'ThietBi',
    children: [
      {
        path: 'create',
        name: 'thietBiCreate',
        component: () => import('../views/ThietBi/Create.vue'),
        meta: {title: 'QUANTRI | Thiết Bị'},
      },
      {
        path: 'danhsach',
        name: 'thieBiDanhSach',
        component: () => import('../views/ThietBi/danhsach.vue'),
        meta: {title: 'QUANTRI | Thiết Bị'},
      },
    ],
    component: ThietBi,
    beforeEnter: checkLogin,
    meta: {title: 'QUANTRI | Thiết Bị'},
  },
  {
    path: '/quantri/dichvu',
    name: 'dichvu',
    meta: {title: 'QUANTRI | Dịch Vụ'},
    component: () => import('../views/DichVu.vue'),
    beforeEnter: checkLogin,
   
  },
  {
    path: '/quantri/khutro',
    name: 'khutro',
    meta: {title: 'QUANTRI | Khu Trọ'},
    component: () => import('../views/KhuTro/KhuTro.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/khachthue',
    name: 'khachthue',
    meta: {title: 'QUANTRI | Khách Thuê'},
    component: () => import('../views/KhachThue/KhachThue.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/phongtro',
    name: 'phongtro',
    meta: {title: 'QUANTRI | Phòng Trọ'},
    component: () => import('../views/PhongTro/PhongTro.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/hopdong',
    name: 'hopdong',
    meta: {title: 'QUANTRI | Hợp Đồng'},
    component: () => import('../views/HopDong/HopDong.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/taikhoan',
    name: 'taikhoan',
    meta: {title: 'QUANTRI | Cài Đặt-Tài Khoản'},
    component: () => import('../views/ChuTro/ChuTro.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/hoadon',
    name: '/hoadon',
    meta: {title: 'QUANTRI | Hoá Đơn'},
    component: () => import('../views/HoaDon/HoaDon.vue'),
    beforeEnter: checkLogin,
  },
  {
    path: '/quantri/baidang',
    name: 'baidang',
    meta: {title: 'QUANTRI | Bài Đăng'},
    component: () => import('../views/BaiDang/BaiDang.vue'),
    beforeEnter: checkLogin,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
