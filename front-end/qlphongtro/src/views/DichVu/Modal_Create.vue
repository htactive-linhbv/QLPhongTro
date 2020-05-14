<template>
  <modal name="createDichVu" :scrollable="true" height="auto" width="60%" @before-open="getData">
    <div class="row">
      <div class="col-md-11"></div>
      <button
        class="btn btn-inverse-primary btn-rounded btn-icon"
        @click="$modal.hide('createDichVu')"
      >
        <i class="mdi mdi-window-close"></i>
      </button>
    </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm mới dịch vụ</h4>

            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputUsername1">Tên dịch vụ<sup style="color:#e17055">(*)</sup></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Tên dịch vụ"
                  name="tenDV"
                  v-model="tenDV"
                  @change="$v.tenDV.$touch()"
                />
                <div
                  v-if="$v.tenDV.$error"
                  class="alert alert-danger"
                  role="alert"
                >Tên dịch vụ không được trống</div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Đơn Giá<sup style="color:#e17055">(*)</sup></label>
                <div class="input-group">
                  <input
                    type="text"
                    name="donGia"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    v-model="donGia"
                    placeholder="Đơn giá"
                    @change="$v.donGia.$touch()"
                    @input="changeGiaPhong()"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text">{{donGiaF}}</span>
                  </div>
                 
                </div>
                <div v-if="$v.donGia.$error" class="alert alert-danger" role="alert">
                  <p v-if="!$v.donGia.required" style="margin:0px">-Giá ko được để trống trống</p>
                  <p v-if="!$v.donGia.numeric" style="margin:0px">-Nhập số tiền không đúng</p>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Đơn vị<sup style="color:#e17055">(*)</sup></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Đơn vị"
                  name="donVi"
                  v-model="donVi"
                  @change="$v.donVi.$touch()"
                />
                <div
                  v-if="$v.donVi.$error"
                  class="alert alert-danger"
                  role="alert"
                >Đơn vị không được bỏ trống</div>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Quy tắc tính tiền<sup style="color:#e17055">(*)</sup></label>
              
                <select class="form-control" v-model="quyTacTinhTien" name="quyTacTinhTien"  @change="$v.quyTacTinhTien.$touch()">
                        <option value="1">Theo Số Người/Phòng</option>
                         <option value="2">Tính theo phòng</option>
                         <option value="3">Tính theo số tiêu thụ</option>
                         <option value="4">Dịch vụ Miễn phí</option>
                      </select>
                <div
                  v-if="$v.quyTacTinhTien.$error"
                  class="alert alert-danger"
                  role="alert"
                >Quy tắc tính không được trống</div>
              </div>
              <div class="form-group">
                <label>Trang Thái</label>

                <select class="form-control" v-model="trangThai">
                  <option value="1" selected="selected">bình thường</option>
                  <option value="0">Tạm dừng</option>
                </select>
              </div>
              <div class="form-group">
                <label for="mota">mô tả</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="mota"
                  rows="6"
                  placeholder="Mô Tả"
                  v-model="moTaDV"
                />
              </div>

              <button @click.prevent="create()" class="btn btn-gradient-primary mr-2">Thêm Mới<span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
              <button @click.prevent="$modal.hide('createDichVu')" class="btn btn-light">Đóng</button>
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
  mounted(){
  
  },
  data: function() {
    return {
      onLoading:false,
      tenDV: null,
      chuTro_id: null,
      moTaDV: null,
      donGia: null,
      donVi: null,
      quyTacTinhTien: null,
      trangThai: "true",
      trueFalse: null,
      donGiaF:null
    };
  },
  validations: {
    tenDV: {
      required
    },
    donGia: {
      required,
      numeric
    },
    donVi: {
      required
    },
    quyTacTinhTien: {
      required
    }
  },
  methods: {
    getData(){
   
      this.tenDV='',
      this.chuTro_id= null,
      this.moTaDV= null,
      this.donGia= null,
      this.donVi= null,
      this.quyTacTinhTien= null,
      this.trangThai= "1",
      this.trueFalse= null,
      this.donGiaF=null
      this.$v.$reset()
    },
    changeGiaPhong(){
      this.donGiaF = new Intl.NumberFormat('it-IT',{style:'currency', currency:'VND'}).format(this.donGia)  
    },
    create() {
      if (!this.$v.$invalid) {
        this.onLoading=true;
        axios
          .post("/dichvu/", {
            tenDV: this.tenDV,
            moTaDV: this.moTaDV,
            donGia: this.donGia,
            donVi: this.donVi,
            quyTacTinhTien: this.quyTacTinhTien,
            trangThai: Boolean(Number(this.trangThai))
          })
          .then(() => {
            this.onLoading=false;
            alert("Thêm mới thành công");
            this.$emit("createSuccess");
            this.$emit("createSuccess", "Thêm mới thành công");
            this.$modal.hide("createDichVu");
          })
          .catch(() => {
            this.onLoading=false;
            alert("Thêm mới thất bại");
          });
      } else {
        this.onLoading=false;
        this.$v.$touch();
      }
    }
  }
};
</script>

<style>
</style>