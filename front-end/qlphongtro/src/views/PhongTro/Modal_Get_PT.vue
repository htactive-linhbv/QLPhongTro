<template>
  <modal
    name="getPhongTro"
    :scrollable="true"
    height="auto"
    width="80%"
    @before-open="getData"
    
  >
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('getPhongTro')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Thêm Mới phòng trọ</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khu trọ</label>
                    <div class="col-sm-9">
                      <select class="form-control" v-model="khuTro_id" name="khuTro_id" readonly>
                        <option
                          v-for="khu in khuTros"
                          :key="khu._id"
                          :value="khu._id"
                        >{{khu.tenKhuTro}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tên Phòng</label>
                    <div class="col-sm-9">
                      <input
                        class="form-control"
                        placeholder="Nhập Tên phòng trọ"
                        v-model="tenPhongTro"
                        name="tenPhongTro"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Tầng</label>
                    <div class="col-sm-9">
                      <input
                        class="form-control"
                        placeholder="Nhập Tên Tầng"
                        v-model="Tang"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Số người tối đa</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="slNguoiToiDa"
                        name="slNguoiToiDa"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Diện tích</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="dienTich"
                        name="dienTich"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Gác lững</label>
                    <div class="col-sm-9">
                      <input
                        v-if="gacLung==1"
                        class="form-control"
                        value="Có"
                        name="gacLung"
                        readonly
                      />
                      <input v-else class="form-control" value="Không" name="gacLung" readonly />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Giá phòng</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập giá phòng"
                          v-model="giaPhongF"
                          name="giaPhong"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Khách thuê</label>
                    <div class="col-sm-9">
                      <div class="list-group">
                        <a
                          class="list-group-item list-group-item-action list-group-item-danger"
                          v-if="khachThue_ids.length===0"
                        >Phòng trống</a>
                        <a
                          class="list-group-item list-group-item-action list-group-item-danger"
                          v-else v-for="khach in khachThue_ids" :key="khach._id"
                        >{{khach.tenKhachThue}}</a>
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
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                  <button class="btn - btn-danger" @click.prevent="$modal.hide('getPhongTro')">Đóng</button>
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
import axios from "axios";

export default {
  
  data: function() {
    return {
      khuTros: null,
      khuTro_id: null,
      tenPhongTro: null,
      slNguoiToiDa: null,
      dienTich: null,
      Tang: null,
      gacLung: null,
      giaPhong: null,
      moTa: null,
      idPhong: null,
      giaPhongF: null,
      khachThue_ids: []
    };
  },
  methods: {
    getData(event) {
      //   axios.get("/khutro/getkhutro/").then(response => {
      //   this.khuTros = response.data.data;
      // });
      axios.get(`/phongtro/${event.params.id}/chitiet`).then(response => {
        this.khuTros = event.params.khuTros;  
        this.idPhong = event.params.id;
        this.khuTro_id = event.params.khuTro_id;
        this.tenPhongTro = response.data.data.tenPhongTro;
        this.slNguoiToiDa = response.data.data.slNguoiToiDa;
        this.dienTich = response.data.data.dienTich;
        this.Tang = response.data.data.Tang;
        this.gacLung = String(Number(response.data.data.gacLung));
        this.giaPhong = response.data.data.giaPhong;
        this.moTa = response.data.data.moTa;
        this.khachThue_ids = response.data.data.khachThue_ids;
        this.giaPhongF = new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "VND"
        }).format(this.giaPhong);
      });
    }
  }
};
</script>

<style>
</style>