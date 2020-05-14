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
              <button class="btn btn-success" @click="showModalCreate(khuTros)">Thêm mới</button>
            </nav>
          </div>

          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Danh Sách</h4>
                  <div class="row">
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
                    <div class="col-md-4">
                      <div v-if="loading" class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
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
                        <td>{{phong.slNguoiToiDa}} Người/Phòng</td>
                        <td>{{phong.dienTich}}/m2</td>
                        <td>
                          <label v-if="phong.gacLung" class="badge badge-success">Có gác</label>
                          <label v-else class="badge badge-danger">Không</label>
                        </td>
                        <td>
                          <label
                            v-if="!phong.khachThue_ids.length==0"
                            class="badge badge-success"
                          >Đã được thuê</label>
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
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalGet(phong._id,khuTro_id,khuTros)"
                              >Xem chi tiết</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="traPhong(phong._id)"
                              >Trả Phòng</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalAdd(phong._id)"
                              >Thêm xoá Khách thuê phòng</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="showModalUpdate(phong._id,khuTro_id,khuTros)"
                              >Chỉnh sửa</button>
                              <button
                                class="dropdown-item"
                                type="button"
                                @click.prevent="remove(phong._id,khuTro_id)"
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
    <modal-add @createSuccess="getNewData"></modal-add>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";
import ModalCreate from "./Modal_Create_PT.vue";
import ModalUpdate from "./Modal_Update_PT.vue";
import ModalGet from "./Modal_Get_PT.vue";
import ModalAdd from "./Modal_Add_PT.vue";
import axios from "axios";
export default {
  name: "KhuTro",
  data() {
    return {
      phongTros: null,
      khuTros: null,
      khuTro_id: "",
      loading: false
    };
  },
  created() {
    this.loading = true;
    axios.get("/khutro/getphongtro/").then(response => {
      this.khuTros = response.data.data;
      this.khuTro_id=this.khuTros[0]._id
      this.getNewData();
      this.loading = false;
    }).catch(()=>{
      this.loading = false;
    });
  },

  components: {
    //HelloWorld,
    appNarbar: Narbar,
    appSidebar: Sidebar,
    ModalCreate,
    ModalUpdate,
    ModalGet,
    ModalAdd
  },
  methods: {
    showModalCreate(khuTros) {
      this.$modal.show("createPhongTro",{khuTros:khuTros});

    },
    showModalUpdate(id, khuTro_id, khuTros) {
      this.$modal.show("updatePhongTro", {
        id: id,
        khuTro_id: khuTro_id,
        khuTros: khuTros
      });
    },
    showModalGet(id, khuTro_id, khuTros) {
      this.$modal.show("getPhongTro", {
        id: id,
        khuTro_id: khuTro_id,
        khuTros: khuTros
      });
    },
    showModalAdd(id) {
      this.$modal.show("addPhongTro", { id: id });
    },
    getNewData() {
      this.loading = true;
      axios.get("/khutro/getphongtro/").then(response => {
        this.khuTros = response.data.data;
        this.phongTros = this.khuTros.find(
          item => item._id == this.khuTro_id
        ).phongTro_ids;
        this.loading = false;
      });
    },
    remove(id, khuTro_id) {
      const phong = this.phongTros.find(item => item._id == id);
      if (phong) {
        if (phong.khachThue_ids.length > 0) {
          alert("Vẫn còn khách thuê phòng này... Hãy trả phòng trước!");
        } else {
          const result = confirm("Bạn có muốn xoá Phòng trọ");
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
        }
      }
    },
    traPhong(id) {
      const result = confirm("Bạn có trả Phòng trọ");
      if (result) {
        axios
          .patch(`/phongtro/${id}/traphong`)
          .then(() => {
            alert("trả phòng thành công");
            this.getNewData();
          })
          .catch(() => {
            alert("trả thất bại thất bại");
          });
      }
    },
    getDataPhong() {
      this.loading = true;
      this.phongTros = this.khuTros.find(
        item => item._id == this.khuTro_id
      ).phongTro_ids;
      this.loading = false;
    }
  }
};
</script>
