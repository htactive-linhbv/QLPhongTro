<template>
  <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0  d-flex flex-row" >
    
  <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
   <a class="navbar-brand brand-logo" ><img src="/assets/images/logo/logo-1.png" style="height: 80px;" alt="logo" /></a>
    <a class="navbar-brand brand-logo-mini" ><img src="/assets/images/logo/logo-mini-1.png" style="height: 30px; width: 40px;" alt="logo" /></a>
  </div>
  <div class="navbar-menu-wrapper d-flex align-items-stretch">
    <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click.prevent="miniMenu">
      <span class="mdi mdi-menu"></span>
    </button>
    
    <div class="search-field d-none d-md-block">
      <form class="d-flex align-items-center h-100" action="#">
        <div class="input-group">
          <div class="input-group-prepend bg-transparent">
            <i class="input-group-text border-0 mdi mdi-magnify"></i>
          </div>
          <input type="text" class="form-control bg-transparent border-0" placeholder="Tìm Kiếm">
        </div>
      </form>
    </div>
    
    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item nav-profile dropdown">
        <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <div class="nav-profile-img">
          <img src="/assets/images/faces/avatar.png" alt="image"> 
            <span class="availability-status online"></span>
          </div>
          <div class="nav-profile-text" >
            <p class="mb-1 text-black">{{name}}</p>
          </div>
        </a>
        <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
           <router-link class="dropdown-item" to='/quantri/taikhoan'>
                  <i class="mdi mdi-cached mr-2 text-success"></i> Cài đặt tài khoản </router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="logout">
            <i class="mdi mdi-logout mr-2 text-primary"></i> Đăng Xuất </a>
        </div>
      </li>
      
      <li class="nav-item nav-settings d-none d-lg-block">
        <a class="nav-link" href="#">
          <i class="mdi mdi-format-line-spacing"></i>
        </a>
      </li>
    </ul>
    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" @click="hideMenu" >
      <span class="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
</template>

<script>
export default {
  data:function(){
    return{
      mini:false
    }
  },
  computed:{
    name (){
      return this.$store.state.auth.chuTroProfile.hoVaTen
    },
   
  },
  methods:{
    logout(){
       this.$store.dispatch('LOGOUT').then(()=>{
       this.$router.push({ path: '/quantri/login'})
     })
    },
    hideMenu(){
      this.$store.dispatch('onActive');
    },
    miniMenu(){
      this.menu = !this.menu;
       let sitebody = document.body;
        this.menu ? sitebody.classList.add("sidebar-icon-only") : sitebody.classList.remove("sidebar-icon-only");
    },
    
  }
}
</script>

<style>
  
</style>