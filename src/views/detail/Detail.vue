<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="categoryList"></DetailList>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { ref } from 'vue'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'DETAIL',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
    const sightName = ref('大连圣亚海洋世界(AAAA景区)')
    const bannerImg = ref('http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg')
    const gallaryImgs = ref(['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
      'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'])
    const categoryList = ref([{
      title: '成人票',
      children: [{
        title: '成人三馆联票',
        children: [{
          title: '成人三馆联票 - 某一连锁店销售'
        }]
      }, {
        title: '成人五馆联票'
      }]
    }, {
      title: '学生票'
    }, {
      title: '儿童票'
    }, {
      title: '特惠票'
    }])
    return {
      sightName,
      bannerImg,
      gallaryImgs,
      categoryList
    }
  }
  // methods: {
  //   // getDetailInfo () {
  //   //   axios.get('/static/mock/detail.json', {
  //   //     params: {
  //   //       id: this.$route.params.id
  //   //     }
  //   //   }).then(this.handleGetDetailSucc)
  //   // },
  //   // handleGetDetailSucc (res) {
  //   //   res = res.data
  //   //   if (res.ret && res.data) {
  //   //     const data = res.data
  //   //     this.sightName = data.sightName
  //   //     this.bannerImg = data.bannerImg
  //   //     this.gallaryImgs = data.gallaryImgs
  //   //     this.categoryList = data.categoryList
  //   //   }
  //   // }
  // },
  // mounted () {
  //   // this.getDetailInfo()
  // }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 20rem;
}
</style>
