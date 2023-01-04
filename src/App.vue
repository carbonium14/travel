<template>
  <div id="app">
    <keep-alive exclude="DETAIL">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style>

</style>
