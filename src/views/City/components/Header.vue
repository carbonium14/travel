<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-chevron-left"  class="header-back"/>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
    position: relative;
    height: $headerheight;
    line-height: $headerheight;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background-color: $bgcolor;
    font-size: .32rem;
    .header-back {
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
