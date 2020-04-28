<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 grid-margin stretch-card">
              <div class="card">
                <div class="d-flex justify-content-center" v-if="onLoading">
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Thông tin tài khoản</h4>
                  <p class="card-description"></p>
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td>Họ Và tên:</td>

                        <td class="text-info">{{chuTros.hoVaTen}}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>

                        <td class="text-info">{{chuTros.email}}</td>
                      </tr>
                      <tr>
                        <td>Số điện thoại:</td>

                        <td class="text-info">{{chuTros.soDienThoai}}</td>
                      </tr>
                      <tr>
                        <td>Ngày Hết hạn:</td>

                        <td class="text-info">{{chuTros.ngayHetHan}}</td>
                      </tr>
                      <tr>
                        <td>Mật Khẩu:</td>

                        <td><button class="btn btn-info" @click.prevent="$modal.show('changePass')">Đổi mật khẩu</button></td>
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
    <modal-change></modal-change>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar.vue";
import ModalChange from './Modal_ChangePass.vue'
import axios from "axios";
export default {
  name: "taikhoan",
  data: () => {
    return {
      onLoading: false,
      chuTros: "",
      mesage: ""
    };
  },
  components: {
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalChange

  },
  created() {
      this.onLoading=true
    axios
      .get("/chutro/getchutro")
      .then(response => {
        this.chuTros = response.data.data;
        this.onLoading=false;
      })
      .catch(() => {
        this.onMesage("Get thất bại");
      });
  },
  methods: {
    onMesage(text) {
      this.mesage = text;
      setTimeout(() => {
        this.mesage = "";
      }, 5000);
    }
  }
};
</script>
