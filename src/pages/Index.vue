<template>
  <q-page>
    <q-card flat class="bg-accent text-white">
      <q-card-section>
        <div class="text-h6">Vos favoris</div>
        <div class="text-subtitle2">Les favoris permettent de vous prévenir quand une intervention commence</div>
      </q-card-section>
      <q-card-section>
        <event v-for="event in favoriteEvents" :key="event.id" :event="event"></event>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import Event from '../components/Event'
export default {
  name: 'PageIndex',
  components: { Event },
  data () {
    return {
      favorites: [],
      favoriteEvents: []
    }
  },
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'La Rentrée des Initiatives Citoyennes')
    this.getFavoritesEvents()
  },
  methods: {
    getFavoritesEvents () {
      this.favorites = this.$store.state.favorite.favorites
      this.favoriteEvents = this.$store.getters['events/getByids'](this.favorites)
      console.log(this.favorites, this.favoriteEvents)
    }
  }
}
</script>
