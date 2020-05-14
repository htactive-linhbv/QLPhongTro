<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel ">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Khu Trọ</h3>

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
                        <th>Tên Khu trọ</th>
                        <th>Địa chỉ</th>
                        <th>Số tầng</th>
                        <th>mô tả</th>
                        <th>trạng thái</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="kt in khuTros" :key="kt._id">
                        <td>{{kt.tenKhuTro}}</td>
                        <td>{{ `${kt.diaChi.Tinh} / ${kt.diaChi.Quan} / ${kt.diaChi.Duong}`}}</td>
                        <td>{{kt.soTang}}</td>
                        <td>{{kt.mota}}</td>
                        <td>
                          <label v-if="kt.trangThai" class="badge badge-success">Bình Thường</label>
                          <label v-else class="badge badge-danger">Bảo trì</label>
                        </td>
                        <td>
                          <button class="btn btn-info btn-icon" title="Cập nhập" @click="showModalUpdate(kt._id)">
                            <i class="mdi mdi-lead-pencil"></i>
                          </button>
                          <button class="btn btn-danger btn-icon" title="Xoá"  @click="remove(kt._id)">
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
    <modal-create
         @createSuccess="getNewData" 
    ></modal-create>
    <modal-update
     @updateSuccess="getNewData"
    ></modal-update>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_KT.vue";
import ModalUpdate from './Modal_update_KT.vue'
import axios from "axios";
export default {
  name: "KhuTro",
  data() {
    return {
      onLoading:false,
      khuTros: null,
      
    };
  },
  mounted() {
    this.onLoading=true;
    axios.get('/khutro/').then(response => {
      this.khuTros = response.data.data;
    
      this.onLoading=false
    }).catch(()=>{
      this.onLoading=false
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
      this.$modal.show("createKhuTro");
    },
    showModalUpdate(id){
        this.$modal.show('updateKhuTro',{id:id})
    },
    getNewData(){
      this.onLoading=true
      axios.get('/khutro/').then(response => {
      this.khuTros = response.data.data;
      this.onLoading = false
    });
    },
    remove(id){
       const khutro = this.khuTros.find(item => item._id == id);
      if (khutro.phongTro_ids.length > 0) {
          alert("Vẫn còn phòng trọ trong khu này... Hãy xoá phòng trọ trước!");
        } else {
         const result = confirm("Bạn có muốn xoá Khu Trọ");
      if (result) {
        this.onLoading=true;
        axios.delete(`/khutro/${id}/delete`).then(() => {
          alert("Delete thành công");
          this.onLoading=false;
         this.getNewData();
        }).catch(()=>{
          this.onLoading=false;
            alert('delete thất bại')
        });
      }}
    }
  },
};
</script>
