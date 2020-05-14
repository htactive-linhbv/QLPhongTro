<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">ADMIN HOME</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">ADMINHOME</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh Sách</li>
              </ol>
              <button class="btn btn-success" @click="showModalCreate()">Thêm mới</button>
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
                        <th scope="col">Tên Chủ Trọ</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số Điện thoại</th>
                        <th scope="col">Ngày Đăng ký</th>
                        <th scope="col">Ngày Hết Hạn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="chutro in chuTros" :key="chutro._id">
                        <td>{{chutro.hoVaTen}}</td>
                        <td>{{chutro.email}}</td>
                        <td>{{chutro.soDienThoai}}</td>
                        <td>{{changeDate(chutro.ngayDangKy) }}</td>
                        <td>{{changeDate(chutro.ngayHetHan) }}</td>
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
                                @click.prevent="showModalGet(chutro._id)"
                              >Gia hạn</button>

                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="remove(chutro._id)"
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
    <modal-create @createSuccess="createSuccess"></modal-create>
    <modal-gia-han @createSuccess='createSuccess'></modal-gia-han>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import Narbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import ModalCreate from "./Modal_AddChuTro";
import ModalGiaHan from "./Modal_GiaHan";
export default {
  data() {
    return {
      chuTros: null,
      onLoading: false
    };
  },
  mounted() {
    this.onLoading = true;
    axios.get("/chutro/").then(response => {
      this.chuTros = response.data.data;
      this.onLoading = false;
    }).catch(()=>{
      this.onLoading=true
    });
  },
  methods: {
    changeDate(date) {
      const dateF = date.split(".");
      return `${dateF[0]}-${dateF[1]}-${dateF[2]}`;
    },
    showModalCreate() {
      this.$modal.show("createChuTro");
    },
    createSuccess() {
      this.onLoading = true;
      axios.get("/chutro/").then(response => {
        this.chuTros = response.data.data;
        this.onLoading = false;
      }).catch(()=>{
       this.onLoading = false;
      });
    },
    showModalGet(id) {
      const tro = this.chuTros.find(item => item._id == id);
      this.$modal.show("giaHanChuTro", { chutro: tro });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá Chủ trọ này");
      if (result) {
        axios
          .delete(`/chutro/${id}/delete`)
          .then(() => {
            this.chuTros.splice(
              this.chuTros.findIndex(function(i) {
                return i._id == id;
              }),
              1
            );
            alert("Xoá thành công");
          })
          .catch(() => {
            alert("Xoá Thất bại");
          });
      }
    }
  },
  name: "Home",
  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalGiaHan
  }
};
</script>
