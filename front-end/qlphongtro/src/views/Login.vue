<template>
   <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <!-- <img src="../../assets/images/logo.svg"> -->
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3" @submit.prevent="submit">
                  <div class="form-group">
                    <input 
                        type="email" 
                        class="form-control form-control-lg" 
                        id="exampleInputEmail1" 
                        placeholder="Email"
                        v-model="chutro.email"    
                    >
                  </div>
                  <div class="form-group">
                    <input 
                        type="password" 
                        class="form-control form-control-lg" 
                        id="exampleInputPassword1" 
                        placeholder="Password"
                        v-model="chutro.password"    
                    >
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">Đăng Nhập</button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> Lưu mật khẩu </label>
                    </div>
                    <a href="#" class="auth-link text-black">Quên Mật khẩu?</a>
                  </div>
                  <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Don't have an account? <a href="register.html" class="text-primary">Tạo mới</a>
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
  name:"login",
  data:function(){
    return {
      chutro:{
         email:"",
         password:''
      }
     
    }   
  },
  methods: {
    
    submit (){
     this.$store.dispatch('LOGIN',this.chutro).then(()=>{
       this.$router.push({ name: "Home"})
     })
    }
  }
}
</script>

<style>

</style>