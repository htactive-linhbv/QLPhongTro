<template>
  <modal name="changePass" :scrollable="true" height="auto" width="50%">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Đổi Mật khẩu<sup style="color:#e17055">(*)</sup></h4>
            <div class="col-md-12">
                <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
            <div class="col-md-12">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Mật khẩu hiện tại<sup style="color:#e17055">(*)</sup></label>
                <div class="col-sm-9">
                  <input type="password" class="form-control"  placeholder="Nhập mật khẩu hiện tại" v-model="password"/>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Mật khẩu mới<sup style="color:#e17055">(*)</sup></label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" name="newPassword" v-model="newPassword" @change="$v.newPassword.$touch()" placeholder="Nhập mật khẩu muốn đổi"/>
                  <div v-if="$v.newPassword.$error" class="alert alert-danger" role="alert">
                        <p
                          v-if="!$v.newPassword.required"
                          style="margin:0px"
                        >mật khẩu không được bỏ trống</p>
                        <p
                          v-if="!$v.newPassword.minLength"
                          style="margin:0px"
                        >Mật khẩu phải trên 6 ký tự</p>
                      </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Nhập lại mật khẩu mới</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" name="newPasswordConfirm" v-model="newPasswordConfirm" @change="$v.newPasswordConfirm.$touch()" placeholder="Nhập lại mật khẩu"/>
                  <div v-if="$v.newPasswordConfirm.$error" class="alert alert-danger" role="alert">
                        
                        <p
                          v-if="!$v.newPasswordConfirm.sameAs"
                          style="margin:0px"
                        >Nhập lại mật khẩu không đúng</p>
                      </div>
                </div>
              </div>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <button class="btn btn-success" @click.prevent="change" >Đổi mật khẩu   <span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                <button class="btn btn-light" @click.prevent="$modal.hide('changePass')" >Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>

const { required, sameAs, minLength } = require("vuelidate/lib/validators");
//import DateDropdown from "vue-date-dropdown";
import axios from "axios";
export default {
  created() {},
  data: function() {
    return {
        password:'',
        newPassword:'',
        newPasswordConfirm:'',
        message:'',
        onLoading:false
    };
  },

  validations: {
      newPassword:{
          required,
        minLength: minLength(6),
      },
      newPasswordConfirm:{
          sameAs: sameAs('newPassword'),
      }
  },
  methods: {
      onMesage(text){
          this.message=text;
          setTimeout(()=>{
              this.message=''
          },5000)
      },
      change(){
          this.onLoading=true
          axios.post('/login/chutro/changepassword',{
              password: this.password,
              newPassword: this.newPassword
          }).then(()=>{
              alert('Đổi mật khẩu thành công')
              this.onLoading=false
                this.$modal.hide('changePass')
          }).catch((err)=>{
                this.onMesage(err.response.data.message) 
              this.onLoading=false
              
          })
      }
  }
};
</script>

<style>
</style>