<template>
  <modal name="createHoaDon" :scrollable="true" height="auto" width="80%">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('createHoaDon')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm Mới Hoá đơn</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khu trọ<sup style="color:#e17055">(*)</sup></label>
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
                    <label class="col-sm-3 col-form-label">Phòng trọ<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="phongTro_id"
                        name="phongTro_id"
                        @change="setTienPhong"
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
                    <label class="col-sm-3 col-form-label">Khách Thuê<sup style="color:#e17055">(*)</sup></label>
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
                    <label class="col-sm-3 col-form-label">Tên Hoá đơn<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="tenHoaDon"  name="tenHoaDon" @change="$v.tenHoaDon.$touch()"/>
                    </div>
                     <div
                        class="alert alert-danger"
                        v-if="$v.tenHoaDon.$error"
                        role="alert"
                      >Tên hoá đơn không được trống</div>
                  </div>
                </div>
              </div>
              <p class="card-description">Dịch vụ</p>
              <div class="row border border-primary">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Danh sách dv</label>
                    <div class="col-sm-9">
                      <div class="form-group">
                        <div class="form-check" v-for="dv in dichVus" :key="dv._id">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              @change.prevent="getInput"
                              class="form-check-input"
                              :value="dv._id"
                              v-model="dichVu_ids"
                            />
                            {{dv.tenDV}}
                          </label>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group row" v-for="dvu in dichvusInput" :key="dvu._id">
                    <label class="col-sm-3 col-form-label">{{dvu.tenDV}}</label>
                    <div class="col-sm-4" v-if="dvu.quyTacTinhTien==='3'">
                      <input
                        type="text"
                        class="form-control"
                        v-model="dvu.soCu"
                        @input="getInput"
                        placeholder="Nhập số củ"
                      />
                      <div
                        v-if="dvu.soCu===''"
                        class="alert alert-danger"
                        role="alert"
                      >không được trống</div>
                    </div>
                    <div class="col-sm-5" v-if="dvu.quyTacTinhTien==='3'">
                      <input
                        type="text"
                        class="form-control"
                        v-model="dvu.soMoi"
                        name="soMoi"
                        @input="getInput"
                        placeholder="Nhập số mới"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="dvu.soMoi===''"
                        role="alert"
                      >không được trống</div>
                      <div
                        class="alert alert-danger"
                        v-if="dvu.soCu > dvu.soMoi "
                        role="alert"
                      >Số mới Phải lớn hơn số củ</div>
                    </div>

                    <div class="col-sm-9" v-if="dvu.quyTacTinhTien==='1'">
                      <p class="text-primary">Có {{phong.khachThue_ids.length}} Khách thuê</p>
                    </div>
                    <div class="col-sm-9" v-if="dvu.quyTacTinhTien==='4'">
                      <p class="text-primary">Dịch Vụ Miễn phí</p>
                    </div>
                    <div class="col-sm-9" v-if="dvu.quyTacTinhTien==='2'">
                      <p class="text-primary">Dịch Vụ Theo Phòng</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">nội dung</label>
                    <div class="col-sm-9">
                      <textarea type="text" v-model="noiDung" class="form-control" rows="7" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tổng tiền</label>

                    <div class="col-sm-9 input-group-prepend">
                      <span class="input-group-text">
                        {{ new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "VND"
                        }).format(tongTien)}}
                      </span>
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
                        @click.prevent="$modal.hide('createHoaDon')"
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
const { required } = require("vuelidate/lib/validators");
//import DateDropdown from "vue-date-dropdown";
import axios from "axios";
export default {
  created() {
    this.getDataKhu();
    this.getKhachThue();
    this.getDichVu();
  },
  data: function() {
    return {
      phongTros: "",
      khuTros: "",
      khachThues: "",
      dichVu_ids: [],
      tenHoaDon: null,
      dichVus: null,
      khachThue_id: null,
      khuTro_id: null,
      phongTro_id: null,
      dichvusInput: [],
      dichvusCreate: null,

      phong: null,
      tienPhong: null,
      tongTien: null,
      noiDung: null,
      onLoading: false
    };
  },
  components: {
    //  DateDropdown
  },
  validations: {
    khachThue_id: {
      required
    },
    khuTro_id: {
      required
    },
    phongTro_id: {
      required
    },
    tenHoaDon: {
      required
    },
    dichVu_ids: {
      required
    }
  },
  methods: {
    create() {
      if (!this.$v.$invalid) {
        this.onLoading = true;
        axios
          .post("/hoadon/", {
            tenHoaDon: this.tenHoaDon,
           
            noiDung: this.noiDung,
            khuTro_id:this.khuTro_id,
            khachThue_id:this.khachThue_id,
            phongTro_id:this.phongTro_id,
            dichVu_ids:this.dichVu_ids,
            tongTien:Number(this.tongTien),
           
          })
          .then(() => {
            this.onLoading = false;
            alert("Thêm mới thành công");
            this.$emit("createSuccess");
            this.$modal.hide("createHoaDon");
          })
          .catch(() => {
            this.onLoading = false;
            alert("Thêm mới thất bại");
          });
      } else {
        this.$v.$touch();
      }
    },
    setTienPhong() {
     
      this.$v.phongTro_id.$touch();
      let phong = this.phongTros.find(item => item._id == this.phongTro_id);
      this.phong = phong;
      this.noiDung = ` Tiền phòng: ${new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(phong.giaPhong)} `;
      this.tienPhong = phong.giaPhong;
      this.setTongTien();
    },
    getInput() {
      
      this.dichvusInput = [];
      this.dichVu_ids.forEach(id => {
        let dv = this.dichVus.find(item => item._id == id);
        this.dichvusInput.push(dv);
      });
      this.noiDung = ` Tiền phòng: ${new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(this.tienPhong)} `;
      this.dichvusInput.forEach(item => {
        if (item.quyTacTinhTien == "1") {
          let phong = this.phongTros.find(x => x._id == this.phongTro_id);
          item.tongTien =
            Number(phong.khachThue_ids.length) * Number(item.donGia);
          this.noiDung = `${this.noiDung}
          ${item.tenDV}:
                 Số người/phòng: ${phong.khachThue_ids.length} 
                 Giá tiền/người: ${new Intl.NumberFormat("it-IT", {
                   style: "currency",
                   currency: "VND"
                 }).format(item.donGia)}
                 tổng: ${new Intl.NumberFormat("it-IT", {
                   style: "currency",
                   currency: "VND"
                 }).format(item.tongTien)}
                 `;
        }
        if (item.quyTacTinhTien == "3") {
          item.tongTien =
            (Number(item.soMoi) - Number(item.soCu)) * Number(item.donGia);
          this.noiDung = `${this.noiDung}
          ${item.tenDV}: 
                Số củ: ${item.soCu},
                Số mới: ${item.soMoi},
                số sử dụng:${Number(item.soMoi) - Number(item.soCu)}
                Đơn giá  ${new Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND"
                }).format(item.donGia)};
                tổng:${new Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND"
                }).format(item.tongTien)}
          `;
        }
        if (item.quyTacTinhTien == "2") {
          item.tongTien = Number(item.donGia);
          this.noiDung = `${this.noiDung}
             ${item.tenDV}: 
                    Tổng:${new Intl.NumberFormat("it-IT", {
                      style: "currency",
                      currency: "VND"
                    }).format(item.tongTien)}
            `;
        }
        if (item.quyTacTinhTien == "4") {
          item.tongTien = 0;
          this.noiDung = `${this.noiDung}
             ${item.tenDV}: Dịch vụ miễn phí
                    
            `;
        }
      });
      this.setTongTien();
    },
    setTongTien() {
      this.tongTien = 0;
      this.tongTien = Number(this.tienPhong);
      this.dichvusInput.forEach(item => {
        this.tongTien = Number(this.tongTien) + Number(item.tongTien);
      });
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
    getDichVu() {
      this.onLoading = true;
      axios.get("/dichvu/").then(response => {
        this.dichVus = response.data.data;
        

        this.onLoading = false;
      });
    },
   
  }
};
</script>

<style>
</style>