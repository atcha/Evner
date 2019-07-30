<template>
  <q-page class="flex flex-center">
    A propos
  </q-page>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'A propos')
  }
}
</script>

<style scoped>

</style>
