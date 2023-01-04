<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-if="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, computed, watch, onMounted } from 'vue'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object
    }
  },
  setup (props) {
    const keyword = ref('')
    const list = ref([])
    let timer = null
    const store = useStore()
    const router = useRouter()
    let scroll = null
    const search = ref(null)
    const hasNoData = computed(() => {
      return !list.value.length
    })
    const handleCityClick = (city) => {
      store.commit('changeCity', city)
      router.push('/')
    }
    watch(keyword, (keyword) => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!keyword) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (const i in props.cities) {
          props.cities[i].forEach(value => {
            if (value.spell.indexOf(keyword) > -1 || value.name.indexOf(keyword) > -1) {
              result.push(value)
            }
          })
        }
        list.value = result
      }, 100)
    })
    onMounted(() => {
      scroll = new BScroll(search.value, {
        click: true
      })
    })
    return {
      keyword,
      list,
      hasNoData,
      search,
      scroll,
      handleCityClick
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search {
    height: .72rem;
    padding: 0 .1rem;
    background-color: $bgcolor;
    .search-input {
        box-sizing: border-box;
        height: .62rem;
        line-height: .62rem;
        padding: 0 .1rem;
        width: 100%;
        text-align: center;
        border-radius: .06rem;
        color: #666;
    }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>
