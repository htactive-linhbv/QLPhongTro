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
                        <td>{{bd.khuTro_id?bd.khuTro_id.tenKhuTro:'Khu trọ đã bị xoá'||''}}</td>
                        <td>{{bd.phongTro_id?bd.phongTro_id.tenPhongTro:'Phòng trọ đã bị xoá'||''}}</td>
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
                            >
                              <span
                                v-if="btnLoanding"
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span> Tác vụ
                            </button>
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
    <ModalGet></ModalGet>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import Narbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import ModalGet from './BaiDang/Modal_GetBaiDang'
export default {
  name: "baidang",
  data() {
    return {
      baiDangs: null,
      onLoading: false,
      btnLoanding: false
    };
  },
  mounted() {
    this.getNewData();
  },

  components: {
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalGet
  },
  methods: {
    showModalGet(id) {
      const baiDang = this.baiDangs.find(item => item._id == id);
      this.$modal.show("getBaiDang", { baiDang: baiDang });
    },
    getNewData() {
      this.onLoading = true;
      axios
        .get("/baidang/baidang/all")
        .then(response => {
          this.baiDangs = response.data.data;
          this.onLoading = false;
        })
        .catch(() => {
          this.onLoading = false;
        });
    },
    remove(id) {
      const result = confirm("Bạn có muốn bài đăng này");
      if (result) {
        this.btnLoanding = true;
        axios
          .delete(`/baidang/${id}/delete`)
          .then(() => {
            alert("Delete thành công");
            this.getNewData();
            this.btnLoanding = false;
          })
          .catch(() => {
            alert("delete thất bại");
            this.btnLoanding = false;
          });
      }
    }
  }
};
</script>
