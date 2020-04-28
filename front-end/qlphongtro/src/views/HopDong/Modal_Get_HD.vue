<template>
  <modal name="getHopDong" :scrollable="true" height="auto" width="80%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('getHopDong')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Chi tiết Hợp đồng</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khu trọ</label>
                    <div class="col-sm-9">

                       <input type="text" class="form-control" v-model="khuTro_id" readonly/>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" v-if="phongTros">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Phòng trọ</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="phongTro_id" readonly/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khách Thuê</label>
                    <div class="col-sm-9">
                       <input type="text" class="form-control" v-model="khachThue_id" readonly />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Loại hợp đồng</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="loaiHopDong" readonly/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tên Hợp Đồng</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="tenHopDong"
                        name="tenHopDong"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Thời hạn</label>
                    <div class="col-sm-9">
                     <input
                        type="text"
                        class="form-control"
                        v-model="thoiHan"
                        name="thoiHan"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Bắt đầu</label>
                    <div class="col-sm-9">
                     <input type="text" class="form-control" v-model="ngayBatDau" readonly>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Kết thúc</label>
                    <div class="col-sm-9">
                       <input type="text" class="form-control" v-model="ngayKetThuc" readonly>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tiền cọc</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập tiền cọc"
                          v-model="tienCoc"
                          name="tienCoc"
                          readonly
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nội dung</label>
                    <div class="col-sm-9">
                      <textarea rows="8" type="text" class="form-control" v-model="noiDung" readonly />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7"></div>
                <div class="col-md-4">
                  <div class="row">
                    
                    <div class="col-md-6">
                      <button
                        class="btn btn-light"
                        @click.prevent="$modal.hide('getHopDong')"
                      >Đóng</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  created() {
   this.getDataKhu;
   this.getKhachThue;
  },
  data: function() {
    return {
      hopDong: "",
      tienCocF: "",
      phongTros: "",
      khuTros: "",
      khachThues: "",
      tenHopDong: null,
      loaiHopDong: null,
      khachThue_id: null,
      khuTro_id: null,
      phongTro_id: null,
      thoiHan: null,
      ngayBatDau: null,
      ngayKetThuc: null,
      tienCoc: null,
      noiDung: null,
      onLoading: false
    };
  },

  methods: {
    getData(event) {
      this.hopDong = event.params.hopDong;
      this.tenHopDong =this.hopDong.tenHopDong;
      this.loaiHopDong = this.hopDong.loaiHopDong;
      this.khachThue_id = this.hopDong.khachThue_id.tenKhachThue;
      this.khuTro_id = this.hopDong.khuTro_id.tenKhuTro;
      this.phongTro_id = this.hopDong.phongTro_id.tenPhongTro;
      this.thoiHan = this.hopDong.thoiHan;
      this.ngayBatDau = this.hopDong.ngayBatDau;
     
      this.ngayKetThuc = this.hopDong.ngayKetThuc;
     
      this.tienCoc = this.hopDong.tienCoc;
      this.noiDung = this.hopDong.noiDung;
    },
    changeTienCoc() {
      this.tienCocF = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(this.tienCoc);
    }
  }
};
</script>

<style>
</style>