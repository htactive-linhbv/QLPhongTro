<template>
  <modal name="updateHoaDon" :scrollable="true" height="auto" @before-open="getData" width="50%">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body" style="
    padding-bottom: 0px">
            <h1 class="card-title text-center text-info">{{hoaDon.tenHoaDon}}</h1>
            <p class="card-description">
              Khu trọ :
              <code>&lt; {{ tenKhuTro}} &gt;</code>
            </p>
            <p class="card-description">
              Phòng trọ :
              <code>&lt; {{ tenPhongTro}} &gt;</code>
            </p>
            <p class="card-description">
              tên Khách đại diện:
              <code>&lt; {{ tenKhachThue}} &gt;</code>
            </p>
          </div>
          <div class="row">
            <div class="card-body col-sm-12">
              <h4 class="card-title">Nội Dung</h4>
              <textarea cols="90%" rows="10" v-model="hoaDon.noiDung" readonly></textarea>
              <h3 class="bg-info text-white">
                Tổng tiền: {{new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND"
                }).format(hoaDon.tongTien)}}
              </h3>
              <h3 class="bg-success text-white">
                Đã Thanh Toán: {{new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND"
                }).format(hoaDon.tienThanhToan)}}
              </h3>

              <h3 class="bg-warning text-white" v-if="hoaDon.trangThai">Đã thanh toán hết.</h3>
              <h3 class="bg-warning text-white" v-else>
                Số tiền còn lại: {{new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND"
                }).format(hoaDon.tongTien-hoaDon.tienThanhToan)}}
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <h4 class="card-title">Thanh Toán</h4>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Số Tiền Khách đưa</label>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <input type="text" class="form-control" v-model="tienThanhToan" />
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              {{new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "VND"
                              }).format(tienThanhToan)}}
                            </span>
                          </div>
                        </div>
                        <div
                          v-if="tienThanhToan>(hoaDon.tongTien-hoaDon.tienThanhToan)"
                          class="alert alert-success"
                          role="alert"
                        >Tiền Trả lại khách :  {{new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "VND"
                              }).format(tienThanhToan-(hoaDon.tongTien-hoaDon.tienThanhToan))}}</div>
                              <div
                          v-if="tienThanhToan<(hoaDon.tongTien-hoaDon.tienThanhToan)"
                          class="alert alert-warning"
                          role="alert"
                        >Tiền còn lại chưa thanh toán :  {{new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "VND"
                              }).format((hoaDon.tongTien-hoaDon.tienThanhToan)-tienThanhToan)}}</div>
                      </div>
                      <div class="col-md-3">
                        <button class="btn btn-success" @click.prevent="update">Thanh Toán  <span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4 float-right">
              <button class="btn btn-light" @click.prevent="$modal.hide('updateHoaDon')">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      hoaDon: {},
      tenKhuTro: "",
      tenPhongTro: "",
      tenKhachThue: "",
      tienThanhToan: "",
      tinhTrang:false,
      onLoading:false,
    };
  },

  methods: {
    getData(event) {
      this.hoaDon = event.params.hoaDon;
      this.tenKhuTro = event.params.hoaDon.khuTro_id.tenKhuTro;
      this.tenPhongTro = event.params.hoaDon.phongTro_id.tenPhongTro;
      this.tenKhachThue = event.params.hoaDon.khachThue_id.tenKhachThue;
      this.tienThanhToan =
        event.params.hoaDon.tongTien - event.params.hoaDon.tienThanhToan;
    },
    update() {
      this.onLoading = true;
      if(this.tienThanhToan>=(this.hoaDon.tongTien-this.hoaDon.tienThanhToan)){
        this.tinhTrang= true
        this.tienThanhToan=(this.hoaDon.tongTien-this.hoaDon.tienThanhToan);
      }
      axios.patch(`/hoadon/${this.hoaDon._id}/update`, {
          tienThanhToan:this.tienThanhToan,
          tinhTrang:Boolean( this.tinhTrang),
      }).then(()=>{
        this.onLoading=false;
         alert("Update thành công");
            this.$emit("updateSuccess");
            this.$modal.hide("updateHoaDon");
      }).catch(()=>{
        this.onLoading = false;
            alert("cập nhập thất bại");
      });
    }
  }
};
</script>

<style>
</style>