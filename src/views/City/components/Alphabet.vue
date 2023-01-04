<template>
  <ul class="list">
    <li class="item" v-for="(item) of letters" :key="item" :ref="elem => elems[item] = elem"
    @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { computed, ref, onUpdated } from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    list: {
      type: Object
    }
  },
  setup (props, context) {
    const letters = computed(() => {
      const letters = []
      for (const i in props.list) {
        letters.push(i)
      }
      return letters
    })
    let touchStatus = false
    let starty = 0
    let timer = null
    const elems = ref([])
    onUpdated(() => {
      starty = elems.value.A.offsetTop
    })
    const handleLetterClick = (e) => {
      context.emit('change', e.target.innerText)
    }
    const handleTouchStart = () => {
      touchStatus = true
    }
    const handleTouchMove = (e) => {
      if (touchStatus === true) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          const touchy = e.touches[0].clientY - 79
          const index = Math.floor((touchy - starty) / 20)
          if (index >= 0 && index <= letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    }
    const handleTouchEnd = () => {
      touchStatus = false
    }
    return {
      letters,
      elems,
      handleLetterClick,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
        text-align: center;
        line-height: .4rem;
        color: $bgcolor;
    }
}
</style>
