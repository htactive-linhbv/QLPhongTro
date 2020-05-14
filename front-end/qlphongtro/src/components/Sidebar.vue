<template>
  <nav class="sidebar sidebar-offcanvas" :class="menu?'active':''" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <a href="#" class="nav-link">
          
         <div class="nav-profile-text d-flex flex-column">
            <h1 class="font-weight-bold mb-2 text-info">Manager</h1>
            <!-- <span class="text-secondary text-small">Manager</span> -->
          </div>
        
        </a>
      </li>

      <!-- <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#ui-basic"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <span class="menu-title">Quản lý thiết bị</span>
          <i class="menu-arrow"></i>
          <i class="mdi mdi-mouse-variant menu-icon"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <router-link tag="li" class="nav-item" active-class="active" to="/thietbi/danhsach">
              <a class="nav-link">Danh Sách</a>
            </router-link>
            <router-link tag="li" class="nav-item" active-class="active" to="/thietbi/create">
              <a class="nav-link">Thêm Mới</a>
            </router-link>
          </ul>
        </div>
      </li> -->
      <router-link tag="li" class="nav-item" to="/quantri/dichvu" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý dịch vụ</span>
          <i class="mdi mdi-wifi menu-icon"></i>
        </a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/quantri/khutro" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý Khu trọ</span>
          <i class="mdi mdi-hospital-building menu-icon"></i>
        </a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/quantri/phongtro" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý Phòng Trọ</span>
          <i class="mdi mdi-home-map-marker menu-icon"></i>
        </a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/quantri/khachthue" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý Khách Thuê</span>
          <i class="mdi mdi-account-search menu-icon"></i>
        </a>
      </router-link>

      <router-link class="nav-item" tag="li" to="/quantri/hopdong" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý Hợp Đồng</span>
          <i class="mdi mdi-file-document-box menu-icon"></i>
        </a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/quantri/hoadon" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý Hoá đơn</span>
          <i class="mdi mdi-clipboard-outline menu-icon"></i>
        </a>
      </router-link>
       <router-link class="nav-item" tag="li" to="/quantri/baidang" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Lý bài đăng</span>
          <i class="mdi mdi-book-open-variant menu-icon"></i>
        </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.auth.chuTroProfile.hoVaTen;
    },
    menu() {
      return this.$store.state.menuActive.isActive;
    }
  }
};
</script>

<style>
</style>