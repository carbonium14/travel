<template>
  <div class="icons">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-image">
                    <img class="icon-image-content" :src="item.imgUrl" alt="图标"/>
                </div>
                <p class="icon-desc">{{ item.desc }}</p>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeIcons',
  props: {
    list: {
      type: Array
    }
  },
  setup (props) {
    const swiperOption = {
      autoplay: false
    }
    const pages = computed(() => {
      const pages = []
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    })
    return {
      swiperOption,
      pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
}
.icons {
  margin-top: .1rem;
  .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: .44rem;
          box-sizing: border-box;
          padding: .1rem;
          .icon-image-content {
              display: block;
              margin: 0 auto;
              height: 100%;
          }
      }
      .icon-desc {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: .44rem;
          line-height: .44rem;
          color: $darktextcolor;
          text-align: center;
          ellpsis();
      }
  }
}
</style>
