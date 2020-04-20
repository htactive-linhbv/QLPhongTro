<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item nav-profile">
      <a href="#" class="nav-link">
        <div class="nav-profile-image">
          <img src="assets/images/faces/face1.jpg" alt="profile">
          <span class="login-status online"></span>
          <!--change to offline or busy as needed-->
        </div>
        <div class="nav-profile-text d-flex flex-column">
          <span class="font-weight-bold mb-2">{{name}}</span>
          <span class="text-secondary text-small"> Manager</span>
        </div>
        <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
      </a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
        <span class="menu-title">Quản lý thiết bị</span>
        <i class="menu-arrow"></i>
        <i class="mdi mdi-mouse-variant menu-icon"></i>
      </a>
      <div class="collapse" id="ui-basic">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item"> <router-link class="nav-link" to="/thietbi/danhsach">Danh Sách</router-link></li>
          <li class="nav-item"> <router-link class="nav-link" to="/thietbi/create">Thêm Mới</router-link></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <router-link to="/dichvu" class="nav-link" >
        <span class="menu-title">Quản Lý dịch vụ</span>
        <i class="mdi mdi-wifi menu-icon"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/khutro" class="nav-link">
        <span class="menu-title">Quản Lý Khu trọ</span>
        <i class="mdi mdi-hospital-building menu-icon"></i>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/khachthue" class="nav-link">
        <span class="menu-title">Quản Lý Khách Thuê</span>
        <i class="mdi mdi-hospital-building menu-icon"></i>
      </router-link>
    </li>
   
  </ul>
</nav>
</template>

<script>
export default {
  computed:{
    name(){
      return this.$store.state.auth.chuTroProfile.hoVaTen;
    }
  }
}
</script>

<style>

</style>