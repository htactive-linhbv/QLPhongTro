<template>
  <modal name="getKhachThue" :scrollable="true" height="auto" width="80%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('getKhachThue')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thông tin chi tiết</h4>
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
                        
                        v-model="data.tenKhachThue"
                        readonly="readonly"
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
                       readonly="readonly"
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
                      <input
                        class="form-control"
                        v-model="data.gioiTinh"
                        name="gioiTinh"
                       readonly="readonly"
                      >
                        
                     
                      
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ngày Sinh</label>
                    <div class="col-sm-9">
                      <input
                        class="form-control"
                        
                        v-model="data.ngaySinh"
                        name="ngaySinh"
                      readonly="readonly"
                      />
                      
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
                        
                        name="soCMND"
                        readonly="readonly"
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
                        readonly="readonly"
                        name="ngayCapCMND"
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
                        readonly="readonly"
                        v-model="data.noiCapCMND"
                        name="noiCapCMND"
                       
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
                        readonly="readonly"
                        v-model="data.hoKhau"
                        name="hoKhau"
                        
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
                      <input
                        class="form-control"
                        v-model="data.ngheNghiep"
                        name="ngheNghiep"
                       readonly="readonly"
                      >
                       
                     
                      
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
                       readonly="readonly"
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
                       readonly="readonly"
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
                       
                        v-model="data.sdtBoMe"
                        name="sdtBoMe"
                        readonly="readonly"
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
                        readonly="readonly"
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
                     <img :src="'http://localhost:3000/'+data.anhDaiDien" alt="" class="img-thumbnail" height="500px" width="100%">
                    </div>
                   
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt trước</label>
                    <div class="col-sm-12">
                      <img :src="'http://localhost:3000/'+data.anhCMNDTruoc" alt="" class="img-thumbnail" height="500px" width="100%">
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group row">
                    <label class="col-sm-12 col-form-label">Ảnh CMND mặt sau</label>
                    <div class="col-sm-12">
                     <img :src="'http://localhost:3000/'+data.anhCMNDSau" alt="" class="img-thumbnail" height="500px" width="100%">
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-description"></p>
              <div class="row">
                <button class="btn btn-light"  @click.prevent="$modal.hide('getKhachThue')" >Cancel</button>
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

export default {
  
  data: function() {
    return {
        idKthue:null,
      data: {},
    };
  },
 
  methods: {
   
    getData(event) {
      axios.get(`/khachthue/${event.params.id}/chitiet`).then(response => {
        this.idKthue = event.params.id;
        this.data = response.data.data;
        
      });
    },
  }
};
</script>

<style>
</style>