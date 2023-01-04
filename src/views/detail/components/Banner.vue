<template>
    <div>
        <div class="banner" @click="handlerBannerClick">
            <img class="banner-image" src="" alt="图片">
            <div class="banner-info">
                <div class="banner-title">
                    大连海洋世界
                </div>
                <div class="banner-number">
                    <font-awesome-icon icon="fa-solid fa-image" class="banner-icon"/>
                    39
                </div>
            </div>
        </div>
        <CommonGallery @close="handleGalleryClose" :images="images" v-show="showGallery"></CommonGallery>
    </div>
</template>

<script>
import CommonGallery from '../../../components/gallery/Gallery.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      images: [],
      showGallery: false
    }
  },
  methods: {
    handlerBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-image {
        width: 100%;
    }
    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
        .banner-title {
            font-size: .32rem;
            padding: 0 .2rem;
            flex: 1;
        }
        .banner-number {
            margin-top: .14rem;
            padding: 0 .4rem;
            line-height: .32rem;
            height: .32rem;
            border-radius: .2rem;
            background-color: rgba(0,0,0,.8);
            font-size: .24rem;
            .banner-icon {
                font-size: .24rem;
            }
        }
    }
}
</style>
