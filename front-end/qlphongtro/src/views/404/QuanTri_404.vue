<template>
  <div class="container-scroller error
" >
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center text-center error-page bg-primary">
          <div class="row flex-grow">
            <div class="col-lg-7 mx-auto text-white">
              <div class="row align-items-center d-flex flex-row">
                <div class="col-lg-6 text-lg-right pr-lg-4">
                  <h1 class="display-1 mb-0">404</h1>
                </div>
                <div class="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                  <h2>XIN LỖI!</h2>
                  <h3 class="font-weight-light">KHÔNG TÌM THẤY TRANG.</h3>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 text-center mt-xl-2">
                  <h4 class="font-weight-light font-err">Trang bạn đã yêu cầu không thể dc hiện thị. Trang không tồn tại, đã bị xoá hoặc do lỗi tạm thời của máy chủ </h4>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 text-center mt-xl-2">
                  <router-link class="text-white font-weight-medium" to="/quantri/dichvu">Trở về trang chủ</router-link>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 mt-xl-2">
                  <p class="text-white font-weight-medium text-center">Copyright &copy; 2020 All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.font-err{
font-family: 'Oswald', sans-serif;
}

</style>