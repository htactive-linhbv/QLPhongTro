<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Quản Lý Dịch vụ</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý dịch vụ</a>
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
                  <div v-if="onLoading" class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên Dịch vụ</th>
                        <th>Đơn Giá</th>
                        <th>Đơn Vị</th>
                        <th>Quy tắc tính tiền</th>
                        <th>Mô tả</th>
                        <th>Trạng thái</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="dv in dichVus" :key="dv._id">
                        <td>{{dv.tenDV}}</td>
                        <td>{{changDonGia(dv.donGia)}}</td>
                        <td>{{dv.donVi}}</td>
                        <td>{{quyTacTinh(dv.quyTacTinhTien) }}</td>
                        <td>{{dv.moTaDV}}</td>
                        <td>
                          <label v-if="dv.trangThai" class="badge badge-success">Bình Thường</label>
                          <label v-else class="badge badge-danger">Bảo trì</label>
                        </td>
                        <td>
                          <button class="btn btn-info btn-icon" @click="showModalUpdate(dv._id)">
                            <i class="mdi mdi-lead-pencil"></i>
                          </button>
                          <button class="btn btn-inverse-danger btn-icon" @click="remove(dv._id)">
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
import Narbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ModalCreate from "../views/DichVu/Modal_Create.vue";
import ModalUpdate from "../views/DichVu/Modal_Update.vue";
import axios from "axios";
export default {
  name: "DichVu",
  data() {
    return {
      dichVus: null,
      donGiaF: null,
      onLoading: false
    };
  },
  mounted() {
    this.onLoading=true;
    axios.get("/dichvu/").then(response => {
      this.dichVus = response.data.data;
      this.onLoading=false
    }).catch(()=>{
      this.onLoading=false
    });
  },
  computed: {
  },
  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalUpdate
  },
  methods: {
     quyTacTinh(quytac){
      if(quytac==='1'){
        return 'Theo Số Người/Phòng'
      }
      if(quytac==='2'){
        return 'Tính theo phòng'
      }
      if(quytac==='3'){
        return 'Tính theo số tiêu thụ'
      }
      if(quytac==='4'){
        return 'Dịch vụ Miễn phí'
      }
    },
    changDonGia(donGia) {
      return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND"
      }).format(donGia);
    },
    showModalCreate() {
      this.$modal.show("createDichVu");
    },
    showModalUpdate(id) {
      this.$modal.show("updateDichVu", { id: id });
    },
    getNewData() {
      this.onLoading=true
      axios.get("/dichvu/").then(response => {
        this.dichVus = response.data.data;
        this.onLoading=false
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá dịch vụ");
      if (result) {
        axios
          .delete(`/dichvu/${id}/delete`)
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
