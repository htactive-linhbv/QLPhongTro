<template>
  <modal name="createHopDong" :scrollable="true" height="auto" width="80%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('createHopDong')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm Mới Hợp đồng</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Khu trọ
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="khuTro_id"
                        @change="getDataPhong"
                        name="khuTro_id"
                      >
                        <option
                          v-for="khu in khuTros"
                          :key="khu._id"
                          :value="khu._id"
                        >{{khu.tenKhuTro}}</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.khuTro_id.$error"
                        role="alert"
                      >khu trọ không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" v-if="phongTros">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Phòng trọ
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="phongTro_id"
                        name="phongTro_id"
                        @change="$v.phongTro_id.$touch()"
                      >
                        <option
                          v-for="phong in phongTros"
                          :key="phong._id"
                          :value="phong._id"
                        >{{phong.tenPhongTro}}</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.phongTro_id.$error"
                        role="alert"
                      >Tên phòng không được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Khách Thuê
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="khachThue_id" name="khachThue_id">
                        <option
                          v-for="khach in khachThues"
                          :key="khach._id"
                          :value="khach._id"
                        >{{khach.tenKhachThue}}</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.khachThue_id.$error"
                        role="alert"
                      >khách thuê không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Loại hợp đồng</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="loaiHopDong" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Tên Hợp Đồng
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="tenHopDong"
                        name="tenHopDong"
                        placeholder="Nhập tên hợp đồng"
                        @change="$v.tenHopDong.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.tenHopDong.$error"
                        role="alert"
                      >Tên Hợp đồng không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Thời hạn
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="thoiHan" name="thoiHan">
                        <option value="1 tháng">1 Tháng</option>
                        <option value="3 tháng">3 Tháng</option>
                        <option value="6 tháng">6 Tháng</option>
                        <option value="12 tháng">12 Tháng</option>
                        <option value="Khác">khác</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.thoiHan.$error"
                        role="alert"
                      >Thời hạn không được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Ngày Bắt đầu
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <date-dropdown
                        min="2019"
                        max="2030"
                        name="ngayBatDau"
                        v-model="ngayBatDau"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12s"
                      ></date-dropdown>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Ngày Kết thúc
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <date-dropdown
                        min="2019"
                        max="2030"
                        name="ngayBatDau"
                        v-model="ngayKetThuc"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12"
                      ></date-dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Tiền cọc
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập tiền cọc"
                          v-model="tienCoc"
                          name="tienCoc"
                          @change="$v.tienCoc.$touch()"
                          @input="changeTienCoc()"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">{{tienCocF}}</span>
                        </div>
                      </div>
                      <div v-if="$v.tienCoc.$error" class="alert alert-danger" role="alert">
                        <p
                          v-if="!$v.tienCoc.required"
                          style="margin:0px"
                        >Tiền cọc không được bỏ trống</p>
                        <p v-if="!$v.tienCoc.numeric" style="margin:0px">Tiền cọc không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Nội dung
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        rows="8"
                        type="text"
                        class="form-control"
                        v-model="noiDung"
                        placeholder="Nhập nội dung hợp đồng"
                        @change="$v.noiDung.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.noiDung.$error"
                        role="alert"
                      >Nội dung không được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7"></div>
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn btn-success" @click.prevent="create()">Thêm mới</button>
                    </div>
                    <div class="col-md-6">
                      <button
                        class="btn btn-light"
                        @click.prevent="$modal.hide('createHopDong')"
                      >Cancel</button>
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
const { required, numeric } = require("vuelidate/lib/validators");
import DateDropdown from "vue-date-dropdown";
import axios from "axios";
export default {
  created() {
    this.getDataKhu();
    this.getKhachThue();
  },
  data: function() {
    return {
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
  components: {
    DateDropdown
  },
  validations: {
    tenHopDong: {
      required
    },
    khachThue_id: {
      required
    },
    khuTro_id: {
      required
    },
    phongTro_id: {
      required
    },
    thoiHan: {
      required
    },

    tienCoc: {
      required,
      numeric
    },
    noiDung: {
      required
    }
  },
  methods: {
    getData() {
      (this.tienCocF = ""), (this.tenHopDong = null);
      this.loaiHopDong = null;
      this.khachThue_id = null;
      this.khuTro_id = null;
      this.phongTro_id = null;
      this.thoiHan = null;

      this.tienCoc = null;
      this.noiDung = null;
    },
    create() {
      if (!this.$v.$invalid) {
        this.onLoading = true;
        axios
          .post("/hopdong/", {
            tenHopDong: this.tenHopDong,
            loaiHopDong: this.loaiHopDong,
            khachThue_id: this.khachThue_id,
            khuTro_id: this.khuTro_id,
            phongTro_id: this.phongTro_id,
            thoiHan: this.thoiHan,
            ngayBatDau: this.ngayBatDau,
            ngayKetThuc: this.ngayKetThuc,
            tienCoc: Number(this.tienCoc),
            noiDung: this.noiDung
          })
          .then(() => {
            this.onLoading = false;
            alert("Thêm mới thành công");
            this.$emit("createSuccess");
            this.$modal.hide("createHopDong");
          })
          .catch(() => {
            this.onLoading = false;
            alert("Thêm mới thất bại");
          });
      } else {
        this.$v.$touch();
      }
    },
    getDataKhu() {
      this.onLoading = true;
      axios.get("/khutro/getphongtro").then(response => {
        this.khuTros = response.data.data;
        this.onLoading = false;
      });
    },
    getDataPhong() {
      this.$v.khuTro_id.$touch();
      this.phongTros = this.khuTros.find(
        item => item._id == this.khuTro_id
      ).phongTro_ids;
    },
    getKhachThue() {
      axios.get("/khachthue/getallkhachthue/").then(response => {
        this.khachThues = response.data.data;
      });
    },
    changeTienCoc() {
      this.tienCocF = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(this.tienCoc);
    },
   
  }
};
</script>

<style>
</style>