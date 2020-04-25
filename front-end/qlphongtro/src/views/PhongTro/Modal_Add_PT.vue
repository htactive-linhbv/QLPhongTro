<template>
  <modal
    name="addPhongTro"
    :scrollable="true"
    height="auto"
    width="70%"
    @before-open="getData"
    :delay="500"
  >
    <div class="row" style="margin-top:20px">
      <div class="col-md-11"></div>
      <div class="col-md-1">
        <button
          class="btn btn-inverse-primary btn-rounded btn-icon"
          @click="$modal.hide('addPhongTro')"
        >
          <i class="mdi mdi-window-close" style="font-size:20px"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-center" v-if="onLoading">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <h4 class="card-title">Thêm Khách thuê</h4>
            <form class="form-sample">
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-group">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center list-group-item-info"
                    >Khách Đang thuê</li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      v-if="khachThue_ids.length==0"
                    >Phòng đang trống</li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      v-for="khach in khachThue_ids"
                      :key="khach._id"
                    >
                      {{khach.tenKhachThue}}
                      <button class="btn btn-danger">xoá</button>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <div v-if="mesage" class="alert alert-danger" role="alert">{{mesage}}</div>
                  <ul class="list-group">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center list-group-item-info"
                    >Khách chưa có phòng</li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      v-if="khachThues.length==0"
                    >
                      Không có khách thuê trống
                      <button
                        class="btn btn-success btn-icon-text"
                      >Thêm mới khách thuê</button>
                    </li>

                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      v-for="khach in khachThues"
                      :key="khach._id"
                    >
                      <button class="btn btn-success btn-icon-text" @click.prevent="add(khach._id)">
                        <i class="mdi mdi-arrow-left"></i>Thêm
                      </button>
                      {{khach.tenKhachThue}}
                    </li>
                  </ul>
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
  mounted() {
    this.onLoading = true;
    axios.get("/khachthue/getkhachthue/").then(response => {
      this.khachThues = response.data.data;
      this.onLoading = false;
    });
  },
  data: function() {
    return {
      phongTros: null,
      khachThue_ids: [],
      khachThues: [],
      mesage: "",
      onLoading: true,
      phongTro_id: ""
    };
  },
  methods: {
    getData(event) {
      this.onLoading = true;
      axios
        .get(`/phongtro/${event.params.id}/chitietkhachthue`)
        .then(response => {
          this.phongTros = response.data.data;
          this.phongTro_id = event.params.id;
          this.khachThue_ids = response.data.data.khachThue_ids;
          this.onLoading = false;
        });
    },
    getNewData() {
      this.onLoading = true;
      axios
        .get(`/phongtro/${this.phongTro_id}/chitietkhachthue`)
        .then(response => {
          this.phongTros = response.data.data;
          this.khachThue_ids = response.data.data.khachThue_ids;
          this.deleteLoading = false;
          this.onLoading = false;
        });
    },
    getNewData2() {
      this.onLoading = true;
      axios.get("/khachthue/getkhachthue/").then(response => {
        this.khachThues = response.data.data;
        this.onLoading = false;
      });
    },
    add(id) {
      this.onLoading = true;
      if (this.phongTros.slNguoiToiDa == this.khachThue_ids.length) {
        this.mesage = "Phòng này đã đủ số người quy định";
        this.onLoading = false;
        setTimeout(() => {
          this.mesage = "";
        }, 3000);
      } else {
        axios
          .post("/phongtro/addkhachthue", {
            phongTro_id: this.phongTros._id,
            khachThue_id: id
          })
          .then(() => {
            this.getNewData();
            this.getNewData2();
            this.onLoading = false;
          })
          .catch(() => {
            this.mesage = "Thêm mới thất bại";
            this.onLoading = false;
            setTimeout(() => {
              this.mesage = "";
            }, 3000);
          });
      }
    }
  }
};
</script>

<style>
</style>