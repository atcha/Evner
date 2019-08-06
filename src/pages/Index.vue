<template>
  <q-page v-touch-swipe.left.right="swipePage">
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <q-card flat key="logo-container">
        <q-card-section>
          <div class="logo-container">
            <img src="/statics/logo-rentree.jpg">
          </div>
          <p class="text-subtitle1 text-grey-10">
            La Rentrée citoyenne approche. L'application va vous permettre de préparer l'événement.
          </p>
        </q-card-section>
      </q-card>
      <q-card flat class="bg-positive text-white" key="infos-container">
        <q-card-section>
          <div class="text-h6">Vos favoris</div>
          <div class="text-subtitle2">Les favoris permettent de vous prévenir quand une intervention commence</div>
        </q-card-section>
        <q-card-section>
          <event v-for="event in favoriteEvents" :key="event.id" :event="event" favorite=true class="bg-white"></event>
        </q-card-section>
      </q-card>
    </transition-group>
  </q-page>
</template>

<style lang="stylus" scoped>
  .q-card
    .logo-container
      text-align center
      img
        max-width 100%
        height auto

        @media screen and (min-width $breakpoint-md-min)
          display none
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
    },
    swipePage ({ evt, ...info }) {
      if (info.direction === 'left') {
        this.$router.push('infos')
      } else if (info.direction === 'right') {
        this.$router.push('about')
      }
    }
  }
}
</script>
