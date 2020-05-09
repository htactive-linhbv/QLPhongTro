<template>
  <modal name="updateKhachThue" :scrollable="true" height="auto" width="80%" @before-open="getData"  :delay="1000">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('updateKhachThue')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">update khách thuê</h4>
            <form class="form-sample">
              <p class="card-description">Thông tin Cá Nhân</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Họ tên Khách<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Tên khách Thuê"
                        v-model="data.tenKhachThue"
                        name="tenKhachThue"
                        @change="$v.data.tenKhachThue.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.tenKhachThue.$error"
                        role="alert"
                      >tên không được trống!</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số điện thoại<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        name="sdtKhachThue"
                        placeholder="Nhập số điện thoại"
                        v-model="data.sdtKhachThue"
                        @change="$v.data.sdtKhachThue.$touch()"
                      />
                      <div
                        v-if="$v.data.sdtKhachThue.$error"
                        class="alert alert-danger"
                        role="alert"
                      >
                        <p
                          v-if="!$v.data.sdtKhachThue.required"
                          style="margin:0px"
                        >không được bỏ trống</p>
                        <p
                          v-if="!$v.data.sdtKhachThue.numeric"
                          style="margin:0px"
                        >số điện thoại không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Giới tính<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="data.gioiTinh"
                        name="gioiTinh"
                        @change="$v.data.gioiTinh.$touch()"
                      >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.gioiTinh.$error"
                        role="alert"
                      >Chọn giới tính!</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Sinh<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <date-dropdown
                       min="1940"
                       max="2030" 
                      name="ngaySinh"
                       :default="ngaySinhF"
                        v-model="data.ngaySinh"
                        @change="$v.data.ngaySinh.$touch()"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12"
                      ></date-dropdown>
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.ngaySinh.$error"
                        role="alert"
                      >ngày Sinh ko được trống</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số CMND/CCCD<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập CMND/CCCD"
                        name="soCMND"
                        @change="$v.data.soCMND.$touch()"
                        v-model="data.soCMND"
                      />
                      <div v-if="$v.data.soCMND.$error" class="alert alert-danger" role="alert">
                        <p v-if="!$v.data.soCMND.required" style="margin:0px">không được bỏ trống</p>
                        <p v-if="!$v.data.soCMND.numeric" style="margin:0px">số CMND không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày cấp CMND<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <date-dropdown
                       min="1940"
                       max="2030"
                      name="ngayCapCMND"

                       :default="ngayCapCMNDF"
                        v-model="data.ngayCapCMND"
                        @change="$v.data.ngayCapCMND.$touch()"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12"
                      ></date-dropdown>
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.ngayCapCMND.$error"
                        role="alert"
                      >Ngày cấp CMND ko được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nơi cấp CMND<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Nơi cấp CMND"
                        v-model="data.noiCapCMND"
                        name="noiCapCMND"
                        @change="$v.data.noiCapCMND.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.noiCapCMND.$error"
                        role="alert"
                      >Nơi cấp không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Hộ Khẩu<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập hộ khẩu"
                        v-model="data.hoKhau"
                        name="hoKhau"
                        @change="$v.data.hoKhau.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.hoKhau.$error"
                        role="alert"
                      >Hộ khẩu không được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nghề nghiệp<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="data.ngheNghiep"
                        name="ngheNghiep"
                        @change="$v.data.ngheNghiep.$touch()"
                      >
                        <option value="Sinh Viên">Sinh Viên</option>
                        <option value="Người Đi Làm">Người Đi Làm</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.ngheNghiep.$error"
                        role="alert"
                      >không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nơi làm việc</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập trường học/Nơi làm việc"
                        v-model="data.noiCongTac"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-description">Thông tin người thân</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tên Người thân</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Tên người thân"
                        v-model="data.hoTenBoMe"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số điện thoại<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập số điện thoại liên hệ"
                        v-model="data.sdtBoMe"
                        name="sdtBoMe"
                        @change="$v.data.sdtBoMe.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.data.sdtBoMe.$error"
                        role="alert"
                      >số ĐT liên hệ không được trống</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ghi chú</label>
                    <div class="col-sm-9">
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Nhập Mô tả"
                        v-model="data.ghiChu"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-description">Ảnh</p>
              <!-- <div class="row">
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh đại diện</label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload1()"
                        ref="anhDaiDien"
                        name="anhDaiDien"
                      />
                    </div>
                    <div class="col-sm-12 text-center">
                      <img src class="rounded" alt="..." />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt trước</label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload2()"
                        ref="anhCMNDTruoc"
                        name="anhCMNDTruoc"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt sau</label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload3()"
                        ref="anhCMNDSau"
                        name="anhCMNDSau"
                      />
                    </div>
                  </div>
                </div>
              </div>-->
              <p class="card-description"></p>
              <div class="row">
                <button class="btn btn-gradient-primary mr-2" @click.prevent="update()">Update <span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                <button class="btn btn-light" @click.prevent="$modal.hide('updateKhachThue')">Cancel</button>
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
import axios from "axios";
const { required, numeric } = require("vuelidate/lib/validators");
import DateDropdown from "vue-date-dropdown";
export default {
  data: function() {
    return {
      data: {
        ngaySinh:"",
        ngayCapCMND:""
        
      },
      idKthue: null,
      onLoading:false
      //   anhDaiDien: "",
      //   anhCMNDTruoc: "",
      //   anhCMNDSau: ""
    };
  },
  validations: {
    data: {
      tenKhachThue: {
        required
      },
      sdtKhachThue: {
        required
      },
      ngaySinh: {
        required
      },
      soCMND: {
        required,
        numeric
      },
      ngayCapCMND: {
        required
      },
      noiCapCMND: {
        required
      },
      ngheNghiep: {
        required
      },
      gioiTinh: {
        required
      },
      hoKhau: {
        required
      },

      sdtBoMe: { required }
    }
  },
  methods: {
    // onChangeFileUpload1() {
    //   this.anhDaiDien = this.$refs.anhDaiDien.files[0];
    // },
    // onChangeFileUpload2() {
    //   this.anhCMNDTruoc = this.$refs.anhCMNDTruoc.files[0];
    // },
    // onChangeFileUpload3() {
    //   this.anhCMNDSau = this.$refs.anhCMNDSau.files[0];
    // },
    getData(event) {
      axios.get(`/khachthue/${event.params.id}/chitiet`).then(response => {
        this.idKthue = event.params.id;
        this.data = response.data.data;
        
      });
    },

    update() {
     
      if (!this.$v.$invalid) {
        this.onLoading=true;
        axios
          .patch(`khachthue/${this.idKthue}/update`, this.data)
          .then(() => {
            this.onLoading=false;
            alert("cập nhâp thành công");
            this.$emit("updateSuccess");
            this.$modal.hide("updateKhachThue");
          })
          .catch(() => {
            this.onLoading=false
            alert("cập nhập thất bại");
          });
      } else {
        this.$v.$touch();
      }
    }
  },
  components:{
    DateDropdown
  },
  computed:{
    ngaySinhF(){
      const dateF = this.data.ngaySinh.split('.');
      return `${dateF[2]}-${dateF[1]}-${dateF[0]}`
    },
    ngayCapCMNDF(){
      const dateF = this.data.ngayCapCMND.split('.');
      return `${dateF[2]}-${dateF[1]}-${dateF[0]}`
    }
  }
};
</script>

<style>

</style>