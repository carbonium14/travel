<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-image" :src="item.imgUrl" alt="图片"/>
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title {
    margin-top: .2rem;
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
}
.item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-image {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info {
        flex: 1;
        padding: .1rem;
        min-width: 0;
        .item-title {
            line-height: .54rem;
            font-size: .32rem;
            ellpsis();
        }
        .item-desc {
            line-height: .4rem;
            color: #ccc;
            ellpsis();
        }
        .item-button {
            line-height: .44rem;
            margin-top: .16rem;
            background-color: #ff9300;
            padding: 0 .2rem;
            border-radius: .06rem;
            color: #fff;
        }
    }
}
</style>
