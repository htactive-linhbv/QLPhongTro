<template>
  <div class="content-wrapper">
    <div class="page-header">
      <h3 class="page-title">Quản Lý thiết bị</h3>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Quản lý Thiết bị</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Thêm Mới</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm mới Thiết bị</h4>

            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputUsername1">Tên Thiết bị</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Tên Thiết Bị"
                  name="tenThietBi"
                  v-model="tenThietBi"
                  @change="$v.tenThietBi.$touch()"
                />
                <div
                  v-if="$v.tenThietBi.$error"
                  class="alert alert-danger"
                  role="alert"
                >Tên Thiết bị không được trống</div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Giá</label>
                <div class="input-group">
                  <input
                    type="text"
                    name="gia"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    v-model="gia"
                    @change="$v.gia.$touch()"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text">000</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text">VND</span>
                  </div>
                </div>
                <div v-if="$v.gia.$error" class="alert alert-danger" role="alert">
                  <p v-if="!$v.gia.required" style="margin:0px">-Giá ko được để trống trống</p>
                  <p v-if="!$v.gia.numeric" style="margin:0px">-Nhập số tiền không đúng</p>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Số Lượng</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Tên Thiết Bị"
                  name="soLuong"
                  v-model="soLuong"
                  @change="$v.soLuong.$touch()"
                />
                <div v-if="$v.soLuong.$error" class="alert alert-danger" role="alert">
                  <p v-if="!$v.soLuong.required" style="margin:0px">-Số Lượng không được để trống trống</p>
                  <p v-if="!$v.soLuong.numeric" style="margin:0px">-Số lượng phải là number</p>
                </div>
              </div>
              <div class="form-group">
                <label for="mota">mô tả</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="mota"
                  rows="6"
                  placeholder="Mô Tả"
                  v-model="moTa"
                />
              </div>

              <button @click.prevent="create()" class="btn btn-gradient-primary mr-2">Thêm Mới</button>
              <button @click.prevent="reset()" class="btn btn-light">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { required, numeric } = require("vuelidate/lib/validators");
import axios from "axios";
export default {
  data: function() {
    return {
      tenThietBi: "",
      gia: "",
      chuTro_id: "",
      soLuong:"",
      moTa: ""
    };
  },
  validations: {
    tenThietBi: {
      required
    },
    gia: {
      required,
      numeric
    },
    soLuong:{
      required,
      numeric
    }
  },
  methods: {
    create() {
      if (!this.$v.$invalid) {
        axios
          .post("/thietbi", {
            tenThietBi: this.tenThietBi,
            gia: this.gia,
            moTa: this.moTa,
            soLuong: this.soLuong,
            chuTro_id: localStorage.getItem('chutro-profile-id'),

          })
          .then(() => {
            alert('Thêm Mới'+this.tenThietBi+" Thành Công");
            this.$router.push({path:'danhsach'});
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$v.$touch();
      }
    },
    reset() {
      this.tenThietBi = "";
      this.gia = "";
      this.$v.$reset();
    }
  }
};
</script>
    
<style>
</style>