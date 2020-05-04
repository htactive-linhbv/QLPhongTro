<template>
  <modal name="getHoaDon" :scrollable="true" height="auto" @before-open="getData" width="50%">
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
              
              <h3 class="bg-warning text-white" v-if="hoaDon.trangThai">
                Đã thanh toán hết. 
              </h3>
              <h3 class="bg-warning text-white" v-else>
                Số tiền còn lại: {{new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND"
                }).format(hoaDon.tongTien-hoaDon.tienThanhToan)}}
              </h3>
            </div>
          </div>
          <div class="row">
           <div class="col-md-8"></div>
            <div class="col-md-4 float-right">
              <button class="btn btn-success" @click.prevent="$modal.hide('getHoaDon')">Đóng </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data: function() {
    return {
      hoaDon: {},
      tenKhuTro: "",
      tenPhongTro: "",
      tenKhachThue: ""
    };
  },

  methods: {
    getData(event) {
      this.hoaDon = event.params.hoaDon;
      this.tenKhuTro = event.params.hoaDon.khuTro_id.tenKhuTro;
      this.tenPhongTro = event.params.hoaDon.phongTro_id.tenPhongTro;
      this.tenKhachThue = event.params.hoaDon.khachThue_id.tenKhachThue;
    }
  }
};
</script>

<style>
</style>