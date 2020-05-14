<template>
  <nav class="sidebar sidebar-offcanvas" :class="menu?'active':''" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <a href="#" class="nav-link">
          
         <div class="nav-profile-text d-flex flex-column">
            <h1 class="font-weight-bold mb-2 text-info">ADMIN</h1>
            <!-- <span class="text-secondary text-small">Manager</span> -->
          </div>
        
        </a>
      </li>

      <router-link tag="li" class="nav-item" to="/admin/chitietchutro" active-class="active">
        <a class="nav-link">
          <span class="menu-title">Quản Danh Sách Chủ trọ</span>
          <i class="mdi mdi-account-key menu-icon"></i>
        </a>
      </router-link>
      
       <router-link class="nav-item" tag="li" to="/admin/danhsachbaidang" active-class="active">
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