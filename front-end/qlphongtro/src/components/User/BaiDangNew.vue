<template>
  <div class="row" style=" margin-top: 100px;">
    <div class="col-12" style=" margin-bottom: 60px;">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="section__title text-center">
            <h2 class="title__be--2 text-danger">
              <span class="color--theme">PHÒNG MỚI ĐĂNG</span>
            </h2>
            <p>Chúng tôi luôn cập nhật các phòng mới đăng một cách nhanh nhất để cho các bạn kịp thời nắm bắt và chọn lựa cho mình một phòng phù hợp nhất</p>
          </div>
        </div>
        <div class="col-3"></div>
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
              v-for="slide in baiDangs"
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
  props: ["baiDangs"],

  components: {
    VueperSlides,
    VueperSlide
  },
  methods: {
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