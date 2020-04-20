<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Khách Thuê</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý Khu Trọ</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh Sách</li>
              </ol>
              <button class="btn btn-success" @click="showModalCreate()">Thêm mới</button>
            </nav>
          </div>

          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh Sách</h4>

                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên Khách thuê</th>
                        <th>Số điện thoại</th>
                        <th>giới tính</th>
                        <th>Phòng</th>
                        
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="kthue in khuTros" :key="kthue._id">
                        <td>{{kthue.tenKhachThue}}</td>
                        <td>{{kthue.sdtKhachThue}}</td>
                        <td>{{kthue.gioiTinh}}</td>
                        <td>
                          <label v-if="!kthue==null" class="badge badge-success">{{kthue.tenPhongTro}}</label>
                          <label v-else class="badge badge-danger">Trống</label>
                        </td>
                        

                        <td>
                          <button class="btn btn-primary btn-icon" title="xem chi tiết">
                            <i class="mdi mdi-mdi mdi-clipboard-text"></i>
                          </button>
                          <button
                            class="btn btn-info btn-icon"
                            title="Cập Nhập"
                            @click="showModalUpdate(kt._id)"
                          >
                            <i class="mdi mdi-lead-pencil"></i>
                          </button>
                          <button
                            title="Xoá"
                            class="btn btn-danger btn-icon"
                            @click="remove(kt._id)"
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
import ModalCreate from "./Modal_Create_KThue.vue";
import ModalUpdate from "./Modal_Create_KThue.vue";
import axios from "axios";
export default {
  name: "KhuTro",
  data() {
    return {
      khachThues: null
    };
  },
  mounted() {
    axios.get("/khachthue/").then(response => {
      this.khachThues = response.data.data;
    });
  },

  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalUpdate
  },
  methods: {
    showModalCreate() {
      this.$modal.show("createKhachThue");
    },
    showModalUpdate(id) {
      this.$modal.show("updateKhachThue", { id: id });
    },
    getNewData() {
      axios.get("/khutro/").then(response => {
        this.khuTros = response.data.data;
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá dịch vụ");
      if (result) {
        axios
          .delete(`/khutro/${id}/delete`)
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
