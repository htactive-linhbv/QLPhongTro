<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <router-link class="navbar-brand"  to="/">
       <img src="/assets/images/logo/logo-mini-1.png" width="30" height="30" class="d-inline-block align-top" alt="">
      KHUTRO
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link tag="li" class="nav-item" to="/" active-class="active">
        <a class="nav-link" >Trang Chủ <span class="sr-only">(current)</span></a>
      </router-link>
     <router-link tag="li" class="nav-item" to="/about" active-class="active">
        <a class="nav-link" >About <span class="sr-only">(current)</span></a>
      </router-link>
      
      <router-link tag="li" class="nav-item" to="/quantri/dichvu" active-class="active">
        <a class="nav-link" >Trang Quản trị <span class="sr-only">(current)</span></a>
      </router-link>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Tìm kiếm">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>