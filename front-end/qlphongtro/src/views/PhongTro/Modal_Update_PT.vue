<template>
  <modal name="updatePhongTro" :scrollable="true" height="auto" width="80%"  @before-open="getData"  :delay="1000">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('updatePhongTro')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Chỉnh sửa phòng trọ</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khu trọ<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="khuTro_id"
                        name="khuTro_id"
                        @change="$v.khuTro_id.$touch()"
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
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tên Phòng<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        class="form-control"
                        placeholder="Nhập Tên phòng trọ"
                        v-model="tenPhongTro"
                        name="tenPhongTro"
                        @change="$v.tenPhongTro.$touch()"
                      />
                      <div
                        class="alert alert-danger"
                        v-if="$v.tenPhongTro.$error"
                        role="alert"
                      >Tên phòng không được trống</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tầng</label>
                    <div class="col-sm-9">
                      <input class="form-control" placeholder="Nhập Tên Tầng" v-model="Tang" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số người tối đa<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập số người ở tối đa"
                        v-model="slNguoiToiDa"
                        name="slNguoiToiDa"
                        @change="$v.slNguoiToiDa.$touch()"
                      />
                      <div v-if="$v.slNguoiToiDa.$error" class="alert alert-danger" role="alert">
                        <p
                          v-if="!$v.slNguoiToiDa.required"
                          style="margin:0px"
                        >SỐ người tối đa không được bỏ trống</p>
                        <p
                          v-if="!$v.slNguoiToiDa.numeric"
                          style="margin:0px"
                        >số người tối đa không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Diện tích<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập Diện tích phòng"
                        v-model="dienTich"
                        name="dienTich"
                        @change="$v.dienTich.$touch()"
                      />
                      <div v-if="$v.dienTich.$error" class="alert alert-danger" role="alert">
                        <p
                          v-if="!$v.dienTich.required"
                          style="margin:0px"
                        >diện tích không được bỏ trống</p>
                        <p v-if="!$v.dienTich.numeric" style="margin:0px">diện tích không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Gác lững<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="gacLung"
                        name="gacLung"
                        @change="$v.gacLung.$touch()"
                      >
                        <option value="1">Có</option>
                        <option value="0">Không</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.gacLung.$error"
                        role="alert"
                      >Không được bỏ trống!</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Giá phòng<sup style="color:#e17055">(*)</sup></label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input  type="text"
                        class="form-control"
                        placeholder="Nhập giá phòng"
                        v-model="giaPhong"
                        name="giaPhong"
                        @change="$v.giaPhong.$touch()"
                        @input="changeGiaPhong()">
                        
                        <div class="input-group-append">
                          <span class="input-group-text">{{giaPhongF}}</span>
                        </div>
                      </div>
                      <div v-if="$v.giaPhong.$error" class="alert alert-danger" role="alert">
                        <p
                          v-if="!$v.giaPhong.required"
                          style="margin:0px"
                        >Giá phòng không được bỏ trống</p>
                        <p v-if="!$v.giaPhong.numeric" style="margin:0px">giá phòng không đúng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Mô tả</label>
                    <div class="col-sm-10">
                      <textarea
                        type="text"
                        class="form-control"
                        rows="4"
                        placeholder="Mô tả"
                        v-model="moTa"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                  <button class="btn btn-success" @click.prevent="update">Cập Nhập 
                  
                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                  <button class="btn - btn-danger"  @click.prevent="$modal.hide('updatePhongTro')">Huỷ bỏ</button>
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
import axios from "axios";

export default {
  created() {
   
  },
  data: function() {
    return {
         khuTros:null,
            khuTro_id:null,
            tenPhongTro:null,
            slNguoiToiDa: null,
            dienTich: null,
            Tang: null,
            gacLung: null,
            giaPhong: null,
            moTa: null,
            idPhong:null,
            giaPhongF:null,
            loading:false,
    };
  },

  validations: {
      khuTro_id: {
          required
      },
      tenPhongTro: {
          required
      },
      slNguoiToiDa: {
          required,
          numeric
      },
      dienTich: {
          required,
          numeric
      },
      
      gacLung: {
          required
      },
      giaPhong: {
          required,
          numeric
      },
  },
  methods: {
    getData(event) {
    //   axios.get("/khutro/getkhutro/").then(response => {
    //   this.khuTros = response.data.data;
    // });
      axios.get(`/phongtro/${event.params.id}/chitiet`).then(response => {
           this.khuTros = event.params.khuTros;
           this.idPhong = event.params.id;
            this.khuTro_id=event.params.khuTro_id;
            this.tenPhongTro=response.data.data.tenPhongTro;
            this.slNguoiToiDa= response.data.data.slNguoiToiDa;
            this.dienTich= response.data.data.dienTich;
            this.Tang= response.data.data.Tang;
            this.gacLung= String(Number(response.data.data.gacLung));
            this.giaPhong= response.data.data.giaPhong;
            this.moTa= response.data.data.moTa;
            this.giaPhongF=new Intl.NumberFormat('it-IT',{style:'currency', currency:'VND'}).format(this.giaPhong)  

      });
    },
    update() {

      if (!this.$v.$invalid) {
        this.loading=true;
        axios
          .patch(`/phongtro/${this.idPhong}/update`, {
            khuTro_id: this.khuTro_id,
            tenPhongTro: this.tenPhongTro,
            slNguoiToiDa: this.slNguoiToiDa,
            dienTich: this.dienTich,
            Tang: this.Tang,
            gacLung: Boolean(Number(this.gacLung)),
            giaPhong: this.giaPhong,
            moTa: this.moTa
          })
          .then(() => {
            this.loading=false;
            alert("Cập nhập thành công");
            this.$emit("updateSuccess");
            
            this.$modal.hide("updatePhongTro");
          })
          .catch(() => {
            alert("Cập nhập thất bại");
          });
      } else {
        this.$v.$touch();
      }
    },
    changeGiaPhong(){
      this.giaPhongF = new Intl.NumberFormat('it-IT',{style:'currency', currency:'VND'}).format(this.giaPhong)  
    }
  }
};
</script>

<style>
</style>