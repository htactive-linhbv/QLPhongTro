<template>
  <div class="container-scroller custom">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <!-- <img src="../../assets/images/logo.svg"> -->
               

              </div>
              <h4>Xin Chào!</h4>
              <h5 class="">Đăng nhập để vào trang <strong style="color:#b66dff">ADMIN</strong> </h5>
              <div class="alert alert-danger" v-if="onMessage" role="alert">{{onMessage}}</div>
              <form class="pt-3" @submit.prevent="submit">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    v-model="admin.email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="admin.password"
                  />
                </div>
                <div class="mt-3">
                  <button
                    class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                  >
                    Đăng Nhập
                    <span
                      v-if="onLoading"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" /> Lưu mật khẩu
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Quên Mật khẩu?</a>
                </div>
              </form>
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
//import { AUTH_REQUEST } from "actions/auth";
export default {
  name: "login",
  data: ()=> {
    return {
      admin: {
        email: "",
        password: "",
        
      },
      onLoading: false,
        onMessage: ""
    };
  },
  methods: {
    submit() {
      this.onLoading = true;
      this.$store
        .dispatch("ADMINLOGIN", this.admin)
        .then(() => {
          this.onLoading = false;
          this.$router.push({ path:'/admin/chitietchutro' });
        })
        .catch(err => {
          this.onMessage = err.response.data.message;
          this.onLoading = false;
          setTimeout(() => {
            this.onMessage = "";
          }, 5000);
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@500&display=swap');
.custom{
font-family: 'Jura', sans-serif;
}

</style>