<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">Phòng trọ</h3>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Quản lý Phòng trọ</a>
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
                  <div class="col-md-6">
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Chọn Khu Trọ</label>
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          v-model="khuTro_id"
                          name="khuTro"
                          @change="getDataPhong()"
                        >
                          <option
                            v-for="khu in khuTros"
                            :key="khu._id"
                            :value="khu._id"
                          >{{khu.tenKhuTro}}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên Phòng Trọ</th>
                        <th>Tầng</th>
                        <th>số người tối đa</th>
                        <th>Diện tích</th>
                        <th>Gác lững</th>
                        <th>Trạng Thái</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="phong in phongTros" :key="phong._id">
                        <td>{{phong.tenPhongTro }}</td>
                        <td>{{phong.Tang}}</td>
                        <td>{{phong.slNguoiToiDa}}</td>
                        <td>{{phong.dienTich}}/m2</td>
                        <td>
                          <label v-if="phong.gacLung" class="badge badge-success">Có gác</label>
                          <label v-else class="badge badge-danger">Không</label>
                        </td>
                        <td>
                          <label
                            v-if="!phong.khachThue_ids.length===0"
                            class="badge badge-success"
                          >Đã được thê</label>
                          <label v-else class="badge badge-danger">Trống</label>
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
                              <button class="dropdown-item" type="button">Xem chi tiết</button>
                              <button class="dropdown-item" type="button">Thêm Khách thuê phòng</button>
                              <button class="dropdown-item" type="button" @click.prevent="showModalUpdate(phong._id,khuTro_id)" >Chỉnh sửa</button>
                              <button class="dropdown-item" type="button" @click.prevent="remove(phong._id,khuTro_id)" >Xoá</button>
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
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_PT.vue";
import ModalUpdate from "./Modal_Update_PT";
import axios from "axios";
export default {
  name: "KhuTro",
  data() {
    return {
      phongTros: null,
      khuTros: null,
      khuTro_id: ""
    };
  },
  created() {
    axios.get("/khutro/getkhutro/").then(response => {
      this.khuTros = response.data.data;
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
      this.$modal.show("createPhongTro");
    },
    showModalUpdate(id,khuTro_id) {
      this.$modal.show("updatePhongTro", { id: id,khuTro_id:khuTro_id });
    },
    getNewData() {
      axios.get(`/phongtro/${this.khuTro_id}/dataphong`).then(response => {
        this.phongTros = response.data.data.phongTro_ids;
        console.log(response.data.data.phongTro_ids);
      });
    },
    remove(id,khuTro_id) {
      const result = confirm("Bạn có muốn xoá dịch vụ");
      if (result) {
        axios
          .delete(`/phongtro/${id}/${khuTro_id}/delete`)
          .then(() => {
            alert("Delete thành công");
            this.getNewData();
          })
          .catch(() => {
            alert("delete thất bại");
          });
      }
    },
    getDataPhong() {
      axios.get(`/phongtro/${this.khuTro_id}/dataphong`).then(response => {
        this.phongTros = response.data.data.phongTro_ids;
        console.log(response.data.data.phongTro_ids);
      });
    }
  }
};
</script>
