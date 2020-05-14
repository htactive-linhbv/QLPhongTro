<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Hoá đơn</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý Hoá đơn</a>
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
                <div class="card-body ">
                  <h4 class="card-title">Danh Sách</h4>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Tên Hoá đơn</th>
                        <th scope="col">Khu Trọ</th>
                        <th scope="col">Tên Khách đại diện</th>
                        <th scope="col">Phòng</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Option</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="hd in hoaDons" :key="hd._id">
                        <td>{{hd.tenHoaDon}}</td>
                        <td>{{hd.khuTro_id?hd.khuTro_id.tenKhuTro:'Khu trọ đã xoá'}}</td>
                        <td>{{hd.khachThue_id?hd.khachThue_id.tenKhachThue:'Khách thuê đã bị xoá'||[]}}</td>
                        <td>{{hd.phongTro_id?hd.phongTro_id.tenPhongTro:'Phòng trọ đã bị xoá'||[]}}</td>
                        <td>
                          {{new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND"
                          }).format(hd.tongTien)}}
                        </td>
                          <td>
                          <label v-if="hd.tinhTrang" class="badge badge-success">Đã Thanh Toán</label>
                          <label v-else class="badge badge-danger">Chưa thanh toán</label>
                        </td>
                        <td>
                          <div class="dropdown" >
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
                                @click.prevent="showModalUpdate(hd._id)"
                              >Thanh Toán</button>
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
import ModalCreate from "./Modal_Create_HoaDon";
import ModalUpdate from "./Modal_Update_HoaDon";
import ModalGet from './Modal_Get_HoaDon';

import axios from "axios";
export default {
  name: "hoadon",
  data() {
    return {
      hoaDons:null,
      onLoading: false,
    };
  },
  mounted() {
    this.onLoading = true;
    axios.get("/hoadon/").then(response => {
      this.hoaDons = response.data.data;
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
  computed:{

  },
  methods: {
    showModalCreate() {
      this.$modal.show("createHoaDon");
    },
    showModalUpdate(id) {
      
        const hoaDon = this.hoaDons.find(item=>item._id==id);
        if(hoaDon.tinhTrang===true){
          alert('Hoá đơn này đã thanh toán');
        }else{
             this.$modal.show("updateHoaDon", { hoaDon: hoaDon });
        }
     
    },
     showModalGet(id) {
      const hoaDon = this.hoaDons.find(item=>item._id==id);
     this.$modal.show("getHoaDon", { hoaDon: hoaDon});
    },
    getNewData() {
      this.onLoading = true;
    axios.get("/hoadon/").then(response => {
      this.hoaDons = response.data.data;
      this.onLoading = false;
      });
    },
    remove(id) {
      const result = confirm("Bạn có muốn xoá Hoá đơn này");
      if (result) {
        axios
          .delete(`/hoadon/${id}/delete`)
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
