<template>
  <div class="slider-area " >
    
    <vueper-slides fade :touchable="false" autoplay fractions progress>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data: function() {
    return {
      slides: [
        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: "/assets/images/User/nen3.jpg"
        },
        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: "/assets/images/User/nen2.jpg"
        },
        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: "/assets/images/User/nen1.jpg"
        }
      ]
    };
  },
  components: {
    VueperSlides,
    VueperSlide
  }
};
</script>

<style>
</style>