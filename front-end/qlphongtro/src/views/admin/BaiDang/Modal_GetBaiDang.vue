<template>
  <modal name="getBaiDang" :scrollable="true" height="auto" @before-open="getData" width="50%">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body" style="
    padding-bottom: 0px">
            <h1 class="card-title text-center text-info">{{baiDang.tieuDe}}</h1>
            <h4 class="card-description">
              Khu trọ:
                   {{ khuTro_id.tenKhuTro}}
            </h4>
            <h4 class="card-description">
             Địa chỉ:
                   {{ diaChi.Duong}}/{{diaChi.Quan}}/{{   diaChi.Tinh}} 
            </h4>
            <h4 class="card-description">
              tên Phòng trọ:
                  {{ phongTro_id.tenPhongTro}} 
            </h4>
              <h4 class="card-description">
              Giá Phòng:
                    {{new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND"
                }).format(phongTro_id.giaPhong)}} 
            </h4>
            <h4 class="card-description">
              Số lượng ở tối đa:
                  {{phongTro_id.slNguoiToiDa}} 
            </h4>
             <h4 class="card-description">
              Diện tích:
              {{phongTro_id.dienTich}}/m<sup>2</sup> 
             </h4>
            <h4 class="card-description">
              gác lững:
               {{phongTro_id.gacLung?'Có':'Không'}}
            </h4>
          </div>
          <div class="row">
            <div class="card-body col-sm-12">
              <div class="row">
                <h4>Ảnh phòng trọ</h4>
              </div>
              <div class="row">
                
                <div class="col-md-4" v-for="(img,i) in baiDang.images" :key="i">
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <img :src="'http://localhost:3000/'+img" alt="" class="img-thumbnail" height="200px" width="100%">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
           <div class="col-md-8"></div>
            <div class="col-md-4 float-right">
              <button class="btn btn-success" @click.prevent="$modal.hide('getBaiDang')">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data: function() {
    return {
      baiDang: {},
      khuTro_id: "",
      phongTro_id: "",
      diaChi:{}
    };
  },

  methods: {
    getData(event) {
      this.baiDang = event.params.baiDang;
      this.khuTro_id = event.params.baiDang.khuTro_id;
      this.diaChi =  event.params.baiDang.khuTro_id.diaChi;
      this.phongTro_id = event.params.baiDang.phongTro_id;
    }
  }
};
</script>

<style>
</style>