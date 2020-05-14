<template>
  <modal name="giaHanChuTro" :scrollable="true" height="auto" width="50%" @before-open="getData">
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('giaHanChuTro')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Gia Hạn Chủ trọ</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Họ và Tên:
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="chutro.hoVaTen"
                        name="hoVaTen"
                        readonly
                      />
                   
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Số ĐT liên hệ
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="chutro.soDienThoai"
                        name="soDienThoai"
                         readonly
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">
                      Email:
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="chutro.email"
                        name="email"
                      readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-info">
                      Gói:
                      <sup style="color:#e17055">(*)</sup>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="goi"
                        name="goi"
                        @change="$v.goi.$touch()"
                      >
                        <option value="1">Gói 1 Tháng</option>
                        <option value="3">Gói 3 Tháng</option>
                        <option value="6">Gói 6 Tháng</option>
                        <option value="12">Gói 12 Tháng</option>
                        <option value="18">Gói 18 Tháng</option>
                        <option value="24">Gói 24 Tháng</option>
                      </select>
                      <div
                        class="alert alert-danger"
                        v-if="$v.goi.$error"
                        role="alert"
                      >Chưa chọn Gói!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-7">
                      <button class="btn btn-success" @click.prevent="update()">Gia Hạn <span class="spinner-border spinner-border-sm" v-if="onLoading" role="status" aria-hidden="true"></span></button>
                    </div>
                    <div class="col-md-5">
                      <button
                        class="btn btn-light"
                        @click.prevent="$modal.hide('giaHanChuTro')"
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
   
  },
  data: function() {
    return {
    chutro:'',   
      goi: "1",
      onLoading:false
    };
  },
  components: {
    //  DateDropdown
  },
  validations: {
   
      goi: {
      required
    }
  },
  methods: {
      getData(event){
          this.chutro = event.params.chutro;
      },
    update() {
      if (!this.$v.$invalid) {
        this.onLoading = true;
        axios
          .patch(`/chutro/${this.chutro._id}/update`, {
            goi: Number(this.goi)
          })
          .then(() => {
            this.onLoading = false;
            alert(`Gia Hạn gói ${this.goi} thành công`);
            this.$emit("createSuccess");
            this.$modal.hide("giaHanChuTro");
          })
          .catch(() => {
               alert("Gia Hạn thất bại");
            this.onLoading = false;
          });
      } else {
        this.onLoading = false;
        this.$v.$touch();
      }
    }
  }
};
</script>

<style>
</style>