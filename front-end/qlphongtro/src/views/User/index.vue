<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid" style="margin-top: 60px;">
      <div class="row">
        <div class="col-12" style="padding:0px">
          <slider-area></slider-area>
        </div>
      </div>
      <bai-dang-new :baiDangs="baiDangs"></bai-dang-new>
      <bai-dang :baiDangF="baiDangF" @changeData="changeData"></bai-dang>
    </div>
    <footerr></footerr>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../../components/User/Nav";
import SliderArea from "../../components/User/SliderArea";
import BaiDangNew from "../../components/User/BaiDangNew";
import BaiDang from "../../components/User/BaiDang";
import Footerr from '../../components/User/Footer'
export default {
  mounted() {
    axios.get("/baidang/baidang").then(response => {
      this.baiDangs = response.data.data;
      this.baiDangF = response.data.data;
    });
  },
  data() {
    return {
      baiDangs: [],
      baiDangF: []
    };
  },
  components: {
    Navbar,
    SliderArea,
    BaiDangNew,
    BaiDang,
    Footerr
  },
  methods: {
    changeData(e){
      if(e=='all'){
        return this.baiDangF=this.baiDangs
      }
     let bai = this.baiDangs.filter(item=>
       item.khuTro_id.diaChi.Quan.includes(e)
     )
     console.log(bai);
     
      this.baiDangF=bai
    
    }
  }
};
</script>

<style>
</style>