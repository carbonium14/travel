<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <font-awesome-icon icon="fa-solid fa-chevron-left"  class="header-abs-back"/>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-chevron-left"  class="header-fixed-back"/>
        </router-link>
        景点详情
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
export default {
  name: 'DetailHeader',
  setup () {
    const showAbs = ref(true)
    const opacityStyle = reactive({
      opacity: 0
    })
    const handleScroll = () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        opacityStyle.opacity = opacity
        showAbs.value = false
      } else {
        showAbs.value = true
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      showAbs,
      opacityStyle
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    text-align: center;
    line-height: .8rem;
    background-color: rgba(0,0,0,.8);
    .header-abs-back {
        color: #fff;
        font-size: .4rem;
        margin-top: .2rem;
    }
}
.header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerheight;
    line-height: $headerheight;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background-color: $bgcolor;
    font-size: .32rem;
    .header-fixed-back {
        position: absolute;
        top: .2rem;
        left: 0;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
        color: #fff;
    }
}
</style>
