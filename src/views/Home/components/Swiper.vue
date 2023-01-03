<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swpier-image" :src="item.imgUrl" alt='图片'/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: ''
      }, {
        id: '0002',
        imgUrl: ''
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background-color: #fff;
}
.wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background-color: #eee;
    .swpier-image {
        width: 100%;
    }
}

</style>
