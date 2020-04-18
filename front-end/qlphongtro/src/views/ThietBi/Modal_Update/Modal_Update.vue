<template>
  <modal
    transition="pop-out"
    width="60%"
    name="updateModal"
    @before-open="getData"
    :scrollable="true"
    height="auto"
  >
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card" id="cardCustom">
        <div class="card-body">
          <h4 class="card-title">Thêm mới Thiết bị</h4>

          <form class="forms-sample">
            <div class="form-group">
              <label for="exampleInputUsername1">Tên Thiết bị</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                placeholder="Tên Thiết Bị"
                name="tenThietBi"
                v-model="tenThietBi"
                @change="$v.gia.$touch()"
              />
              <div
                v-if="$v.tenThietBi.$error"
                class="alert alert-danger"
                role="alert"
              >Tên Thiết bị không được trống</div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Giá</label>
              <div class="input-group">
                <input
                  type="text"
                  name="gia"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  v-model="gia"
                  @change="$v.gia.$touch()"
                />
                <div class="input-group-prepend">
                  <span class="input-group-text">000</span>
                </div>
                <div class="input-group-prepend">
                  <span class="input-group-text">VND</span>
                </div>
              </div>
              <div v-if="$v.gia.$error" class="alert alert-danger" role="alert">
                <p v-if="!$v.gia.required" style="margin:0px">-Giá ko được để trống trống</p>
                <p v-if="!$v.gia.numeric" style="margin:0px">-Nhập số tiền không đúng</p>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1">Số Lượng</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                placeholder="Tên Thiết Bị"
                name="soLuong"
                v-model="soLuong"
                @change="$v.soLuong.$touch()"
              />
              <div v-if="$v.soLuong.$error" class="alert alert-danger" role="alert">
                <p
                  v-if="!$v.soLuong.required"
                  style="margin:0px"
                >-Số Lượng không được để trống trống</p>
                <p v-if="!$v.soLuong.numeric" style="margin:0px">-Số lượng phải là number</p>
              </div>
            </div>
            <div class="form-group">
              <label >Trang Thái</label>
              
                <select class="form-control" v-model="trangThai">
                  <option value="true">bình thường</option>
                  <option value="false">Bảo trì</option>
                </select>
              
            </div>
            <div class="form-group">
              <label for="mota">mô tả</label>
              <textarea
                type="text"
                class="form-control"
                id="mota"
                rows="6"
                placeholder="Mô Tả"
                v-model="moTa"
              />
            </div>
            <button @click.prevent="update()" class="btn btn-gradient-primary mr-2">Update</button>
            <button @click.prevent="reset()" class="btn btn-light">Reset</button>
          </form>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
const { required, numeric } = require("vuelidate/lib/validators");
export default {
  data() {
    return {
      id:null,
      tenThietBi: null,
      gia: null,
      soLuong: null,
      moTa: null,
      trangThai: null,
      zindex:""
    };
  },
  methods: {
    getData(event) {
        
      axios.get(`thietbi/${event.params.id}/chitiet`).then(response => {
        this.tenThietBi = response.data.data.tenThietBi;
        this.gia = response.data.data.gia;
        this.soLuong = response.data.data.soLuong;
        this.moTa = response.data.data.moTa;
        this.trangThai = response.data.data.trangThai;
        this.id=event.params.id;
        this.zindex =event.params.index;
      });
      console.log(event.params.index);
    },
    update(){
        axios.patch(`/thietbi/${this.id}/update`,{
            tenThietBi:this.tenThietBi,
            gia:this.gia,
            soLuong:this.soLuong,
            trangThai:this.trangThai,
            moTa : this.moTa,
        }).then(()=>{
            this.$emit('updateData')
            alert('update thành công');

        }).catch(err=>{
            console.log(err);
            this.$v.$touch();
        })
    }
  },
  validations: {
    tenThietBi: {
      required
    },
    gia: {
      required,
      numeric
    },
    soLuong: {
      required,
      numeric
    }
  }
};
</script>
<style>
</style>