<template>
  <modal name="createKhachThue" :scrollable="true" height="auto" width="80%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('createKhachThue')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm mới khách thuê</h4>
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
                       default="1995-01-14"
                      name='ngaySinh'
                        v-model="data.ngaySinh"
                        @change="$v.data.ngaySinh.$touch()"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12s"
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
                      name='ngayCapCMND'
                        v-model="data.ngayCapCMND"
                        @change="$v.data.ngayCapCMND.$touch()"
                        months-names="Tháng 1, Tháng 2, Tháng 3, Tháng 4, Tháng 5, Tháng 6, Tháng 7, Tháng 8, Tháng 9, Tháng 10, Tháng 11, Tháng 12s"
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
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh đại diện<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload1()"
                        ref="anhDaiDien"
                        name="anhDaiDien"
                      />
                    </div>
                    <div class="col-sm-12 text-center  overflow: hidden;" v-if="urlAnhDaiDien">
                      <img  :src='urlAnhDaiDien' class="img-fluid" alt="..." />
                    </div>
                  </div>
                  
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt trước<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload2()"
                        ref="anhCMNDTruoc"
                        name="anhCMNDTruoc"
                      />
                    </div>
                     <div class="col-sm-12 text-center  overflow: hidden;" v-if="ulrAnhTruoc">
                      <img  :src='ulrAnhTruoc' class="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt sau<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-12">
                      <input
                        type="file"
                        class="form-control"
                        @change="onChangeFileUpload3()"
                        ref="anhCMNDSau"
                        name="anhCMNDSau"
                      />
                    </div>
                    <div class="col-sm-12 text-center  overflow: hidden;" v-if="urlAnhSau">
                      <img  :src='urlAnhSau' class="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-description"></p>
              <div class="row">
                <button class="btn btn-gradient-primary mr-2" @click.prevent="create">Thêm Mới <span v-if="onLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                <button class="btn btn-light">Cancel</button>
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
import DateDropdown from "vue-date-dropdown";


const { required, numeric } = require("vuelidate/lib/validators");
export default {
  created() {},
  data: function() {
    return {
      onLoading:false,
      data: {
        
        tenKhachThue: null,
        sdtKhachThue: null,
        ngaySinh: null,
        soCMND: null,
        ngayCapCMND: null,
        noiCapCMND: null,
        ngheNghiep: null,
        gioiTinh: null,
        hoKhau: null,
        noiCongTac: null,
        hoTenBoMe: null,
        sdtBoMe: null,
        ghiChu: null
      },
      urlAnhDaiDien:null,
      urlAnhSau:null,
      ulrAnhTruoc:null,
      anhDaiDien: "",
      anhCMNDTruoc: "",
      anhCMNDSau: ""
    };
  },
  components: {
    DateDropdown
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
    getData(){
       this.data={};
         this.urlAnhDaiDien=null,
      this.urlAnhSau=null,
      this.ulrAnhTruoc=null,
      this.anhDaiDien= "",
      this.sanhCMNDTruoc= "",
      this.anhCMNDSau= ""
    },
    onChangeFileUpload1() {
      this.anhDaiDien = this.$refs.anhDaiDien.files[0];
      this.urlAnhDaiDien = URL.createObjectURL(this.anhDaiDien)
    },
    onChangeFileUpload2() {
      this.anhCMNDTruoc = this.$refs.anhCMNDTruoc.files[0];
       this.ulrAnhTruoc = URL.createObjectURL(this.anhCMNDTruoc)
    },
    onChangeFileUpload3() {
      this.anhCMNDSau = this.$refs.anhCMNDSau.files[0];
      this.urlAnhSau = URL.createObjectURL(this.anhCMNDSau)
    },
    create() {
      this.onLoading=true;
      let formData = new FormData();
      formData.append("anhDaiDien", this.anhDaiDien);
      formData.append("anhCMNDTruoc", this.anhCMNDTruoc);
      formData.append("anhCMNDSau", this.anhCMNDSau);

      for (let key in this.data) {
        formData.append(key, this.data[key]);
      }
      if (!this.$v.data.$invalid) {
        axios
          .post("/khachthue/", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(() => {
            this.onLoading=false
            alert("Thêm mới thành công");
            this.$emit("createSuccess");
            this.$modal.hide("createKhachThue");
          })
          .catch(() => {
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