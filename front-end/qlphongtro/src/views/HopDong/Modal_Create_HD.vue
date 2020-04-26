<template>
  <modal name="createHopDong" :scrollable="true" height="auto" width="80%">
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
                    <label class="col-sm-3 col-form-label">Khu trọ</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="khuTro_id" @change="getDataPhong">
                        <option
                          v-for="khu in khuTros"
                          :key="khu._id"
                          :value="khu._id"
                        >{{khu.tenKhuTro}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" v-if="phongTros">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Phòng trọ</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="phongTro_id">
                        <option
                          v-for="phong in phongTros"
                          :key="phong._id"
                          :value="phong._id"
                        >{{phong.tenPhongTro}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khách Thuê</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="khachThue_id">
                        <option
                          v-for="khach in khachThues"
                          :key="khach._id"
                          :value="khach._id"
                        >{{khach.tenKhachThue}}</option>
                      </select>
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
                    <label class="col-sm-3 col-form-label">Tên Hợp Đồng</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="tenHopDong" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Thời hạn</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="thoiHan">
                        <option value="1 tháng">1 Tháng</option>
                        <option value="3 tháng">3 Tháng</option>
                        <option value="6 tháng">6 Tháng</option>
                        <option value="12 tháng">12 Tháng</option>
                        <option value="Khác">khác</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Bắt đầu</label>
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
                    <label class="col-sm-3 col-form-label">Ngày Kết thúc </label>
                    <div class="col-sm-9">
                      <date-dropdown
                        min="2019"
                        max="2030"
                        name="ngayBatDau"
                        v-model="NgayKetThuc"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12s"
                      ></date-dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                 <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Giá phòng</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập giá phòng"
                          v-model="tienCoc"
                          name="tienCoc"
                         
                          @input="changeTienCoc()"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">{{tienCocF}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nội dung</label>
                    <div class="col-sm-9">
                      <textarea rows="8" type="text" class="form-control" v-model="tenHopDong" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-7"></div>
                  <div class="col-md-4">
                      <button class="btn btn-success">Thêm mới</button>
                      <button class="btn btn-success">Thêm mới</button>
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
//const { required, numeric } = require("vuelidate/lib/validators");
import DateDropdown from "vue-date-dropdown";
import axios from "axios";
export default {
  created() {
    this.getDataKhu();
    this.getKhachThue();
  },
  data: function() {
    return {
        tienCocF:'',
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
      NgayKetThuc: null,
      tienCoc: null,
      noiDung: null,
      onLoading: false
    };
  },
  components: {
    DateDropdown
  },
  validations: {},
  methods: {
    create() {
      if (!this.$v.$invalid) {
        this.onLoading = true;
        axios
          .post("/khutro/", {
            tenKhuTro: this.tenKhuTro,
            mota: this.mota,
            soTang: this.soTang,
            trangThai: Boolean(Number(this.trangThai)),
            diaChi: {
              Tinh: this.Tinh,
              Quan: this.Quan,
              Duong: this.Duong
            }
          })
          .then(() => {
            this.onLoading = false;
            alert("Thêm mới thành công");
            this.$emit("createSuccess");
            this.$modal.hide("createKhuTro");
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
        console.log(this.khuTros);
      });
    },
    getDataPhong() {
      // this.$v.khuTro_id.$touch()
      this.phongTros = this.khuTros.find(
        item => item._id == this.khuTro_id
      ).phongTro_ids;
    },
    getKhachThue() {
      axios.get("/khachthue/getallkhachthue/").then(response => {
        this.khachThues = response.data.data;
        console.log(this.khachThues);
      });
    },
    changeTienCoc() {
      this.tienCocF = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(this.tienCoc);
    }
  }
  }

</script>

<style>
</style>