<template>
  <div class="row" style="margin-bottom: 60px;">
    <div class="col-7">
      <div class="card">
        <div class="card-body">
          <vueper-slides fixed-height="500px">
            <vueper-slide
              v-for="i in bai.images"
              :key="i"
                :image="'http://localhost:3000/'+i"
              
              :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
            />
          </vueper-slides>
        </div>
      </div>
    </div>
    <div class="col-5" >
      <div class="card"  >
        <div class="card-body">
          <h2>Tiêu đề: {{bai.tieuDe}}</h2>
          <h4 class="text-danger">
            Giá cho thuê: {{ new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "VND"
            }).format(bai.phongTro_id?bai.phongTro_id.giaPhong:'Phòng này đã bị xoá')}}
          </h4>
          <h5>
            <i class="mdi mdi-google-maps"></i>
            Địa Chỉ: {{bai.khuTro_id?bai.khuTro_id.diaChi.Duong:'Phòng này đã bị xoá'}}/ {{bai.khuTro_id?bai.khuTro_id.diaChi.Quan:'Phòng này đã bị xoá'}}/ {{bai.khuTro_id?bai.khuTro_id.diaChi.Tinh:'Phòng này đã bị xoá'}}
          </h5>
          <h5>
            <i class="mdi mdi-checkbox-blank-outline"></i>
            Diện tích: {{bai.phongTro_id?bai.phongTro_id.dienTich:'Phòng này đã bị xoá'}}
          </h5>
          <h5>
            <i class="mdi mdi-window-open"></i>
            Gác Lững: {{bai.phongTro_id?bai.phongTro_id.gacLung?'Có':'Không':'Phòng trọ đã bị xoá'}}
          </h5>
          <h5>
            <i class="mdi mdi-home-modern"></i>
            Nằm ở tầng: {{bai.phongTro_id?bai.phongTro_id.Tang:'Phòng trọ đã bị xoá'}}
          </h5>
          <h5>
            <i class="mdi mdi-account-multiple-plus"></i>
            Số Lượng Người tối đa: {{bai.phongTro_id?bai.phongTro_id.slNguoiToiDa:'Phòng trọ đã bị xoá'}} người/phòng
          </h5>
          <h5>
            <i class="mdi mdi-cellphone-basic"></i>
            Liên hệ {{bai.soDienThoai}}
          </h5>
         <h5>Mô Tả<p>{{bai.moTa}}</p></h5> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: ["bai"],
  mounted() {
    console.log(this.bai, "acv");
  },
  components: {
    VueperSlides,
    VueperSlide
  }
};
</script>

<style scoped>
i {
  color: #198ae3;
}
</style>