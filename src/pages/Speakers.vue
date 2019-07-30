<template>
  <q-page class="flex flex-center">
    Intervenants
  </q-page>
</template>

<script>
export default {
  name: 'Speakers',
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'Les intervenants')
  }
}
</script>

<style scoped>

</style>
