<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Bài Đăng</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý Bài Đăng</a>
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
            <div class="col-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh Sách</h4>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Tên Tiêu đề</th>
                        <th scope="col">Khu Trọ</th>
                        <th scope="col">Phòng</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="bd in baiDangs" :key="bd._id">
                        <td>{{bd.tieuDe}}</td>
                        <td>{{bd.khuTro_id.tenKhuTro||''}}</td>
                        <td>{{bd.phongTro_id.tenPhongTro||''}}</td>
                        <td>
                          <label v-if="bd.trangThai" class="badge badge-success">Mở</label>
                          <label v-else class="badge badge-danger">Đóng</label>
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
                            ><span v-if="btnLoanding" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Tác vụ</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalGet(bd._id)"
                              >Xem chi tiết</button>
                             
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="remove(bd._id)"
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
    <!-- <modal-update @updateSuccess="getNewData"></modal-update>-->
    <modal-get></modal-get>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_BaiDang.vue";
//import ModalUpdate from "./Modal_Update_HoaDon";
import ModalGet from './Modal_Get_BaiDang';

import axios from "axios";
export default {
  name: "baidang",
  data() {
    return {
      baiDangs: null,
      onLoading: false,
      btnLoanding:false
    };
  },
  mounted() {
    this.getNewData();
  },

  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalGet
    // ModalUpdate,
    // ModalGet
  },
  methods: {
    showModalCreate() {
      this.$modal.show("createBaiDang");
    },
    showModalUpdate(id) {
      const hoaDon = this.hoaDons.find(item => item._id == id);
      if (hoaDon.tinhTrang === true) {
        alert("Hoá đơn này đã thanh toán");
      } else {
        this.$modal.show("updateHoaDon", { hoaDon: hoaDon });
      }
    },
    showModalGet(id) {
      const baiDang = this.baiDangs.find(item => item._id == id);
      this.$modal.show("getBaiDang", { baiDang: baiDang });
    },
    getNewData() {
      this.onLoading = true;
      axios.get("/baidang/").then(response => {
        this.baiDangs = response.data.data;
        this.onLoading = false;
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn bài đăng này");
      if (result) {
        this.btnLoanding = true
        axios
          .delete(`/baidang/${id}/delete`)
          .then(() => {
            alert("Delete thành công");
            this.getNewData();
            this.btnLoanding=false
          })
          .catch(() => {
            alert("delete thất bại");
            this.btnLoanding=false
          });
      }
    }
  }
};
</script>
