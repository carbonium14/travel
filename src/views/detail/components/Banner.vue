<template>
    <div>
        <div class="banner" @click="handlerBannerClick">
            <img class="banner-image" :src="bannerImg" alt="图片">
            <div class="banner-info">
                <div class="banner-title">
                    {{ sightName }}
                </div>
                <div class="banner-number">
                    <font-awesome-icon icon="fa-solid fa-image" class="banner-icon"/>
                    {{ this.gallaryImgs.length }}
                </div>
            </div>
        </div>
        <Fade>
          <CommonGallery @close="handleGalleryClose" :images="gallaryImgs" v-show="showGallery"></CommonGallery>
        </Fade>
    </div>
</template>

<script>
import CommonGallery from '../../../components/gallery/Gallery.vue'
import Fade from '../../../components/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array
    }
  },
  components: {
    CommonGallery,
    Fade
  },
  data () {
    return {
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
        background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8));
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
