<template>
    <div class="header">
        <div class="header-left">
            <font-awesome-icon icon="fa-solid fa-chevron-left"  class="back-icon"/>
        </div>
        <div class="header-input">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{ this.city }}
            <font-awesome-icon icon="fa-solid fa-chevron-down"  class="arrow-icon"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
  display: flex;
  height: .86rem;
  line-height: .86rem;
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
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon {
        margin-left: .04rem;
    }
  }
}
</style>
