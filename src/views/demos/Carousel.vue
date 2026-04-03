<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'
    import { Autoplay, Pagination, Navigation } from 'swiper/modules'
    export default {
    //innerHTNL 和 innerText 的区别
    name: 'Carousel',
    data(){
        return {
        message: 'hello world',
        modules: [Autoplay, Pagination, Navigation],
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },

}
</script>

<template>
    <h2>引入第三方--轮播图</h2>
    <p>Swiper 开源免费强大的轮播图插件，纯JavaScript打造的，面向
        手机、平板等移动设备。
    </p>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 2000 }"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
    <swiper-slide><img src="../../../public/images/bg_1.png" alt="Slide 1"></swiper-slide>
    <swiper-slide><img src="../../../public/images/头像.png" alt="Slide 2"></swiper-slide>
    <swiper-slide><img src="../../../public/images/作品1.jpg" alt="Slide 3"></swiper-slide>
  </swiper>

</template>

<style scoped>
img{
    width: 100%;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
p{
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
