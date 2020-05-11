<template>
  <div class="row" style=" margin-top: 100px;">
    <div class="col-12" style=" margin-bottom: 60px;">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="section__title text-center">
            <h2 class="title__be--2 text-danger">
              <span class="color--theme">TẤT CẢ PHÒNG TRỌ</span>
            </h2>
            <p>Tất cả các phòng trọ trên địa bạn thành phố luôn được chúng tôi cập nhật một cách nhanh nhất và chính xác nhât, các thông tin chi tiết cũng như giá cả đều có tất cả để mọi người cùng nhau tham khảo.</p>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12">
          <ul class="nav justify-content-center text-info">
            <li class="nav-item">
              <button
                class="btn btn-info nav-link"
                @click.prevent="$emit('changeData','all')"
              >TẤT CẢ</button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-info nav-link"
                @click="$emit('changeData','Liên Chiểu')"
              >LIÊN CHIỂU</button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-info nav-link"
                @click.prevent="$emit('changeData','Hải Châu')"
              >HẢI CHÂU</button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-info nav-link"
                @click="$emit('changeData','Thanh Khê')"
              >THANH KHÊ</button>
            </li>
            <li class="nav-item">
              <button class="btn btn-info nav-link" @click="$emit('changeData','Cẩm Lệ')">CẨM LỆ</button>
            </li>
            <li class="nav-item">
              <button class="btn btn-info nav-link" @click="$emit('changeData','Sơn Trà')">SƠN TRÀ</button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-info nav-link"
                @click.prevent="$emit('changeData','Ngủ Hành Sơn')"
              >NGỦ HÀNH SƠN</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <vueper-slides
            fixed-height="300px"
            class="no-shadow"
            :visible-slides="4"
            slide-multiple
            :gap="3"
            :slide-ratio="1 / 4"
            :dragging-distance="200"
            :touchable="false"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
          >
            <vueper-slide
              v-for="slide in baiDangF"
              :key="slide._id"
              :image="'http://localhost:3000/'+slide.images[0]"
              @mouseover="title('a')"
              :title="slide.tieuDe.toUpperCase()"
                @click.native="detail(slide._id)"
            />
          </vueper-slides>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: {
    baiDangF: null
  },
  components: {
    VueperSlides,
    VueperSlide
  },
  methods:{
    detail(id) {
      this.$router.push({
        name: "detail",
        params: { id: id }
      });
    }
  }
};
</script>

<style>
.vueperslide__title {
  font-size: 20px;
  background-color: #6bb9f0;
  color: white;
  font-family: "Oswald", sans-serif;
  width: 100%;
}
</style>