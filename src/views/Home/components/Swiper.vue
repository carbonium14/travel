<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swpier-image" :src="item.imgUrl" alt='图片'/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Array
    }
  },
  setup (props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true
    }
    const showSwiper = computed(() => {
      return props.list.length
    })
    return {
      swiperOption,
      showSwiper
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
