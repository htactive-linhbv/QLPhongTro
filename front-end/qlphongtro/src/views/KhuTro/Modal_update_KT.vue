<template>
  <modal name="updateKhuTro" :scrollable="true" height="auto" width="60%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('updateKhuTro')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Update khu trọ</h4>

            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputUsername1">Tên khu trọ<sup style="color:#e17055">(*)</sup></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Tên khu trọ"
                  name="tenKhuTro"
                  v-model="tenKhuTro"
                  @change="$v.tenKhuTro.$touch()"
                />
                <div
                  v-if="$v.tenKhuTro.$error"
                  class="alert alert-danger"
                  role="alert"
                >Tên khu trọ không được trống
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Tỉnh/Thành phố<sup style="color:#e17055">(*)</sup></label>

                    <select class="form-control" v-model="Tinh" name="Tinh" @change="$v.Tinh.$touch()">
                      <option value="Đà Nẵng" selected="selected">Đà Nẵng</option>
                    </select>
                    <div v-if="$v.Tinh.$error" class="alert alert-danger" role="alert"> không được để trống </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Quận/Huyện<sup style="color:#e17055">(*)</sup></label>

                    <select class="form-control" v-model="Quan" name="Quan" @change="$v.Quan.$touch()">
                      <option value="Hải Châu" selected="selected">Quận Hải Châu</option>
                      <option value="Cẩm Lệ" selected="selected">Quận Cẩm Lệ</option>
                      <option value="Thanh Khê" selected="selected">Quận Thanh Khê</option>
                      <option value="Liên Chiểu" selected="selected">Quận Liên Chiểu</option>
                      <option value="Ngũ Hành Sơn" selected="selected">Quận Ngũ Hành Sơn</option>
                      <option value="Sơn Trà" selected="selected">Quận Sơn Trà</option>
                      <option value="Hòa Vang" selected="selected">Huyện Hòa Vang</option>
                      <option value="Hoàng Sa" selected="selected">Huyện Hoàng Sa.</option>
                    </select>
                      <div v-if="$v.Quan.$error" class="alert alert-danger" role="alert"> không được để trống </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label for="exampleInputUsername1">Đường<sup style="color:#e17055">(*)</sup></label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputUsername1"
                      placeholder="số nhà và địa chỉ"
                      name="Duong"
                      v-model="Duong"
                      @change="$v.Duong.$touch()"
                    />
                    <div
                      v-if="$v.Duong.$error"
                      class="alert alert-danger"
                      role="alert"
                    >Địa chỉ không được trống</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">số tầng<sup style="color:#e17055">(*)</sup></label>
                <div class="input-group">
                  <input
                    type="text"
                    name="soTang"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    v-model="soTang"
                    placeholder="Số Tầng"
                    @change="$v.soTang.$touch()"
                  />
                </div>
                <div v-if="$v.soTang.$error" class="alert alert-danger" role="alert">
                  <p v-if="!$v.soTang.required" style="margin:0px">Số tầng ko được bỏ trống</p>
                  <p v-if="!$v.soTang.numeric" style="margin:0px">Số tầng phải là number</p>
                </div>
              </div>

              <div class="form-group">
                <label>Trang Thái<sup style="color:#e17055">(*)</sup></label>

                <select class="form-control" v-model="trangThai" name="trangThai">
                  <option value="1" selected="selected">bình thường</option>
                  <option value="0">Tạm dừng</option>
                </select>
                 <div v-if="$v.trangThai.$error" class="alert alert-danger" role="alert"> không được để trống </div>
              </div>
              <div class="form-group">
                <label for="mota">mô tả</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="mota"
                  rows="6"
                  placeholder="Mô Tả"
                  v-model="mota"
                />
              </div>

              <button @click.prevent="update()" class="btn btn-gradient-primary mr-2">Cập nhập <span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
              <button @click.prevent="$modal.hide('updateKhuTro')" class="btn btn-light">Đóng</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
const { required, numeric } = require("vuelidate/lib/validators");
import axios from "axios";
export default {
  data: function() {
    return {
      idKV:null,
      tenKhuTro: null,
      Tinh: null,
      Quan: null,
      Duong: null,
      mota: null,
      soTang: null,
      trangThai: null,
      onLoading:false
    };
  },
  validations: {
    tenKhuTro: {
      required
    },
    Tinh: {
      required
    },
    Quan: {
      required
    },
    Duong: {
      required
    },
    mota: {
      required
    },
    soTang: {
      required,
      numeric
    },
    trangThai:{
      required
    }
  },
  methods: {
     getData(event) {
       
      axios.get(`/khutro/${event.params.id}/chitiet`).then(response => {
        this.idKV = event.params.id;
      this.tenKhuTro= response.data.data.tenKhuTro;
      this.Tinh= response.data.data.diaChi.Tinh;
      this.Quan= response.data.data.diaChi.Quan;
      this.Duong= response.data.data.diaChi.Duong;
      this.mota= response.data.data.mota;
      this.soTang= response.data.data.soTang;
      this.trangThai= String(Number(response.data.data.trangThai));
      });
    },
    update() {
      
        if (!this.$v.$invalid) {
            this.onLoading=true;
        axios.patch(`/khutro/${this.idKV}/update`, {
          tenKhuTro:this.tenKhuTro,
          mota:this.mota,
          soTang:this.soTang,
          trangThai:Boolean(Number(this.trangThai)),
          diaChi:{
            Tinh:this.Tinh,
            Quan:this.Quan,
            Duong:this.Duong
          }
        })
        .then(() => {
          this.onLoading=false
          alert("update thành công");
          this.$emit("updateSuccess");
          this.$modal.hide("updateKhuTro");
        })
        .catch(() => {
          this.onLoading=false
          alert("update thất bại");
        })
        }else{
            this.$v.$touch();
        }
      
    }
  }
};
</script>

<style>
</style>