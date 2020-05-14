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
                        <th>Khu Trọ</th>
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
                        <td>{{hd.khuTro_id?hd.khuTro_id.tenKhuTro:'Khu trọ này đã bị xoá'}}</td>
                        <td>{{hd.khachThue_id?hd.khachThue_id.tenKhachThue:'Khách đã bị xoá'}}</td>
                        <td>{{hd.phongTro_id?hd.phongTro_id.tenPhongTro:'Phòng này đã bị xoá'}}</td>
                        <td>{{hd.thoiHan}}</td>
                        <td>
                          {{new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND"
                          }).format(hd.tienCoc)}}
                        </td>
                        <td>
                          <div class="dropdown">
                            <button
                              class="btn btn-info btn-fw dropdown-toggle"
                              type="button"
                              id="dropdownMenu2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >Tác vụ</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalGet(hd._id)"
                              >Xem chi tiết</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalUpdate(hd._id,)"
                              >Chỉnh sửa</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="remove(hd._id)"
                              >Xoá</button>
                            </div>
                          </div>
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
    <modal-get></modal-get>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_HD";
import ModalUpdate from "./Modal_Update_HD";
import ModalGet from "./Modal_Get_HD";

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
    axios.get("/hopdong/").then(response => {
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
    ModalGet
  },
  methods: {
    showModalCreate() {
      this.$modal.show("createHopDong");
    },
    showModalUpdate(id) {
      const hopDong = this.hopDongs.find(item => item._id == id);
      this.$modal.show("updateHopDong", { hopDong: hopDong });
    },
    showModalGet(id) {
      const hopDong = this.hopDongs.find(item => item._id == id);
      this.$modal.show("getHopDong", { hopDong: hopDong });
    },
    getNewData() {
      this.onLoading = true;
      axios.get("/hopdong/").then(response => {
        this.hopDongs = response.data.data;
        this.onLoading = false;
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá Hợp Đồng");
      if (result) {
        axios
          .delete(`/hopdong/${id}/delete`)
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
