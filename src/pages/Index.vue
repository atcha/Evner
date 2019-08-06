<template>
  <q-page>
    <q-card flat>
      <q-card-section>
        <img src="/statics/logo-rentree.png">
        <p class="text-subtitle1 text-grey-10">
          La Rentrée citoyenne approche. L'application va vous permettre de préparer l'événement.
        </p>
      </q-card-section>
    </q-card>
    <q-card flat class="bg-positive text-white">
      <q-card-section>
        <div class="text-h6">Vos favoris</div>
        <div class="text-subtitle2">Les favoris permettent de vous prévenir quand une intervention commence</div>
      </q-card-section>
      <q-card-section>
        <event v-for="event in favoriteEvents" :key="event.id" :event="event" favorite=true class="bg-white"></event>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="stylus" scoped>
  .q-card
    img
      max-width 100%
      height auto
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
    }
  }
}
</script>
