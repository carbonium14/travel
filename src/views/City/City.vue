<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :list="cities" :hot="hotCities" :letter="letter"></CityList>
    <CityAlphabet :list="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import { ref } from 'vue'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
// import axios from 'axios'
export default {
  name: 'CITY',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup () {
    const cities = ref({
      A: [{
        id: 56,
        spell: 'aba',
        name: '阿坝'
      }],
      B: [{
        id: 1,
        spell: 'beijing',
        name: '北京'
      }],
      C: [{
        id: 2,
        spell: 'chongqing',
        name: '重庆'
      }]
    })
    const hotCities = ref([{
      id: 1,
      spell: 'beijing',
      name: '北京'
    }, {
      id: 3,
      spell: 'shanghai',
      name: '上海'
    }, {
      id: 47,
      spell: 'xian',
      name: '西安'
    }, {
      id: 239,
      spell: 'sanya',
      name: '三亚'
    }, {
      id: 188,
      spell: 'lijiang',
      name: '丽江'
    }, {
      id: 125,
      spell: 'guilin',
      name: '桂林'
    }])
    const letter = ref('')
    const handleLetterChange = (letter) => {
      letter.value = letter
    }
    return {
      cities,
      hotCities,
      letter,
      handleLetterChange
    }
  }
  // methods: {
  //   // getCityInfo () {
  //   //   axios.get('/static/mock/city.json').then(this.handlerGetCityInfoSucc)
  //   // },
  //   // handlerGetCityInfoSucc (res) {
  //   //   res = res.data
  //   //   if (res.ret && res.data) {
  //   //     const data = res.data
  //   //     this.cities = data.cities
  //   //     this.hotCities = data.hotCities
  //   //   }
  //   // }
  // },
  // mounted () {
  //   // this.getCityInfo()
  // }
}
</script>

<style lang="stylus" scoped>

</style>
