<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-image-wrapper">
                    <img class="item-image" :src="item.imgUrl" alt="图片"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
}
.item-image-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;
    .item-image {
        width: 100%;
    }
}
.item-info {
    padding: .1rem;
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
}
</style>
