<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Hợp Đồng</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý Hợp đồng</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh Sách</li>
              </ol>
              <button class="btn btn-success" @click="showModalCreate()">Tạo mới</button>
            </nav>
          </div>
          <div v-if="onLoading" class="d-flex justify-content-center text-primary">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh Sách</h4>

                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên Hợp đồng</th>
                        <th>Loại hợp đồng</th>
                        <th>Tên Khách thuê</th>
                        <th>Phòng</th>
                        <th>Thời hạn</th>
                        <th>Tiền cọc</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="hd in hopDongs" :key="hd._id">
                        <td>{{hd.tenHopDong}}</td>
                        <td>{{hd.loaiHopDong}}</td>
                        <td>{{hd.khachThue_id.tenKhachThue}}</td>
                        <td>{{hd.phongTro_id.tenPhongTro}}</td>
                        <td>{{hd.thoiHan}}</td>
                        <td>{{hd.tienCoc}}</td>
                        <td>
                          <button
                            class="btn btn-primary btn-icon"
                            title="xem chi tiết"
                            @click="showModalGet(kthue._id)"
                          >
                            <i class="mdi mdi-mdi mdi-clipboard-text"></i>
                          </button>
                          <button
                            class="btn btn-info btn-icon"
                            title="Cập Nhập"
                            @click="showModalUpdate(kthue._id)"
                          >
                            <i class="mdi mdi-lead-pencil"></i>
                          </button>
                          <button
                            title="Xoá"
                            class="btn btn-danger btn-icon"
                            @click="remove(kthue._id)"
                          >
                            <i class="mdi mdi-delete-forever"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-create @createSuccess="getNewData"></modal-create>
    <modal-update @updateSuccess="getNewData"></modal-update>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_HD";
import ModalUpdate from "./Modal_Update_HD";

import axios from "axios";
export default {
  name: "KhuTro",
  data() {
    return {
      hopDongs: null,
      onLoading: false
    };
  },
  mounted() {
    this.onLoading = true;
    axios.get("/hopDongs/").then(response => {
      this.hopDongs = response.data.data;
      this.onLoading = false;
    });
  },

  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalUpdate,
    
  },
  methods: {
    showModalCreate() {
      this.$modal.show("createHopDong");
    },
    showModalUpdate(id) {
      this.$modal.show("updateHopDong", { id: id });
    },
    getNewData() {
      this.onLoading = true;
      axios.get("/khachthue/").then(response => {
        this.khachThues = response.data.data;
        this.onLoading = false;
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá khách thuê");
      if (result) {
        axios
          .delete(`/khachthue/${id}/delete`)
          .then(() => {
            alert("Delete thành công");
            this.getNewData();
          })
          .catch(() => {
            alert("delete thất bại");
          });
      }
    }
  }
};
</script>
