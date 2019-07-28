<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          La Rentrée des Initiatives Citoyennes
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-white text-grey-8">
      <q-tabs>
        <q-route-tab name="Infos pratiques" icon="place" label="Infos pratiques" to="/infos" />
        <q-route-tab name="Programme" icon="calendar_view_day" label="Programme" to="/program" />
        <q-route-tab name="Intervenants" icon="people" label="Intervenants" to="/speakers" />
        <q-route-tab name="A propos" icon="info" label="A propos" to="about" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .q-header
    background: linear-gradient(145deg,$primary 11%,darken($primary, 20%) 75%);

  .q-page
    padding 15px
</style>
