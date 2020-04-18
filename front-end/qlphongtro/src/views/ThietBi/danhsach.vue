<template>
  <div class="content-wrapper">
    <div class="page-header">
      <h3 class="page-title">Quản Lý thiết bị</h3>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Quản lý Thiết bị</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Danh Sách</li>
        </ol>
        <button class="btn btn-success">Thêm mới</button>
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
                  <th>Tên thiết bị</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Mô tả</th>
                  <th>Trạng Thái</th>
                  <th>option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(thietbi,index) in thietBis" :key="thietbi._id">
                  <td>{{thietbi.tenThietBi}}</td>
                  <td>{{thietbi.gia}}</td>
                  <td>{{thietbi.soLuong}}</td>
                  <td>{{thietbi.moTa}}</td>
                  <td>
                    <label v-if="thietbi.trangthai" class="badge badge-success">Bình Thường</label>
                    <label v-else class="badge badge-danger">Bảo trì</label>
                  </td>
                  <td>
                    <button class="btn btn-info btn-icon" @click="update(thietbi._id)">
                      <i class="mdi mdi-lead-pencil"></i>
                    </button>
                    <button
                      class="btn btn-inverse-danger btn-icon"
                      @click="deleteThietBi(thietbi._id,index)"
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
    <my-update 
      
      :draggable="true" 
      :adaptive="true"
      @updateData="dataReset()">
    </my-update>
    
  </div>
</template>

<script>
import axios from "axios";
import myUpdate from './Modal_Update/Modal_Update.vue'
export default {
  mounted() {
    this.isUpdate=false;
    axios
      .get("/thietbi")
      .then(response => {
        this.thietBis = response.data.data;
       
      })
      .catch(err => {
        console.log(err);
      });
  },

  data: function() {
    return {
      thietBis: null,
      isUpdate: false,
     
    };
  },
  methods: {
    deleteThietBi(id, index) {
      const result = confirm("Bạn có muốn xoá thiết bị");
      if (result) {
        axios.delete(`/thietbi/${id}/delete`).then(() => {
          alert("Delete thành công");
          this.thietBis.splice(index, 1);
        });
      }
    },
    update(id) {
      this.$modal.show('updateModal',{id:id})
    },
    dataReset:function(){
      
       axios
      .get("/thietbi")
      .then(response => {
        this.thietBis = response.data.data;
       
      })
      .catch(err => {
        console.log(err);
      });
      
    }
  },
  components: {
    myUpdate
  }
};
</script>

<style>
</style>