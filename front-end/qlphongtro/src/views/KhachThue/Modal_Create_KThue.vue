<template>
  <modal name="createKhachThue" :scrollable="true" height="auto" width="80%">
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
                    <label class="col-sm-3 col-form-label">Họ tên Khách</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Tên khách Thuê"
                        v-model="data.tenKhachThue"
                        name="tenKhachThue"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số điện thoại</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập số điện thoại"
                        v-model="data.sdtKhachThue"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Giới tính</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="data.gioiTinh">
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Sinh</label>
                    <div class="col-sm-9">
                      <input class="form-control" placeholder="dd/mm/yyyy" v-model="data.ngaySinh" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số CMND/CCCD</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập CMND/CCCD"
                        v-model="data.soCMND"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày cấp CMND</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="dd/mm/yyyy"
                        v-model="data.ngayCapCMND"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nơi cấp CMND</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Nơi cấp CMND"
                        v-model="data.noiCapCMND"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Hộ Khẩu</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập hộ khẩu"
                        v-model="data.hoKhau"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nghề nghiệp</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="data.ngheNghiep">
                        <option value="Sinh Viên">Sinh Viên</option>
                        <option value="Người Đi Làm">Người Đi Làm</option>
                      </select>
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
                    <label class="col-sm-3 col-form-label">Số điện thoại</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập số điện thoại liên hệ"
                        v-model="data.sdtBoMe"
                      />
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
              </div>
              <p class="card-description"></p>
              <div class="row">
                <button class="btn btn-gradient-primary mr-2" @click="create">Thêm Mới</button>
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
const { required, numeric } = require("vuelidate/lib/validators")
export default {
  created() {},
  data: function() {
    return {
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

      anhDaiDien: "",
      anhCMNDTruoc: "",
      anhCMNDSau: ""
    };
  },
  validations: {
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
    hoKhau: null,
    noiCongTac: null,
    hoTenBoMe: {required},
    sdtBoMe: {required},
    ghiChu: null
  },
  methods: {
    onChangeFileUpload1() {
      this.anhDaiDien = this.$refs.anhDaiDien.files[0];
    },
    onChangeFileUpload2() {
      this.anhCMNDTruoc = this.$refs.anhCMNDTruoc.files[0];
    },
    onChangeFileUpload3() {
      this.anhCMNDSau = this.$refs.anhCMNDSau.files[0];
    },
    create() {
      let formData = new FormData();
      formData.append("anhDaiDien", this.anhDaiDien);
      formData.append("anhCMNDTruoc", this.anhCMNDTruoc);
      formData.append("anhCMNDSau", this.anhCMNDSau);

      for (var key in this.data) {
        formData.append(key, this.data[key]);
      }

      // if (!this.$v.$invalid) {
      axios
        .post("/khachthue/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          alert("Thêm mới thành công");
          this.$emit("createSuccess");
          this.$modal.hide("createKhuTro");
        })
        .catch(() => {
          alert("Thêm mới thất bại");
        });
      // } else {
      //   this.$v.$touch();
      // }
    }
  }
};
</script>

<style>
</style>