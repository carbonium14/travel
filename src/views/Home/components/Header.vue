<template>
    <div class="header">
        <div class="header-left">
            <font-awesome-icon icon="fa-solid fa-chevron-left"  class="back-icon"/>
        </div>
        <div class="header-input">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ city }}
                <font-awesome-icon icon="fa-solid fa-chevron-down"  class="arrow-icon"/>
            </div>
        </router-link>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'HomeHeader',
  setup () {
    const store = useStore()
    const city = store.state.city
    return {
      city
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
  display: flex;
  height: $headerheight;
  line-height: $headerheight;
  background-color: $bgcolor;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    .back-icon {
        text-align: center;
        font-size: .4rem;
        margin-top: .22rem;
        margin-left: .2rem;
    }
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    background-color: #fff;
    border-radius: .1rem;
    color: #ccc;
    padding-left: .2rem;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
        margin-left: .04rem;
    }
  }
}
</style>
