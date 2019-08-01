<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    this.$store.commit('favorite/initialisseFavorite')
  }
}
</script>

<style>
</style>
