<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <div>
            <img src="/statics/logo-rentree.jpg">
          </div>
          <div class="title-container">
            <span>{{ siteTitle }}</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-3">
      <router-view class="child-slide"></router-view>
    </q-page-container>

    <q-footer elevated class="bg-white text-grey-8">
      <q-tabs>
        <q-route-tab name="Accueil" icon="home" to="/" />
        <q-route-tab name="Infos pratiques" icon="place" to="/infos" />
        <q-route-tab name="Programme" icon="calendar_view_day" to="/program" />
        <q-route-tab name="Intervenants" icon="people" to="/speakers" />
        <q-route-tab name="A propos" icon="info" to="about" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    siteTitle: {
      get () {
        return this.$store.state.siteInfo.siteTitle
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'overlap-left' : 'overlap-right'
    next()
  }
}
</script>

<style lang="stylus">
  .q-header
    background linear-gradient(145deg,$primary 11%,darken($primary, 20%) 75%)
    .q-toolbar__title
      max-width 900px
      margin 0 auto
      display flex
      align-items center
      img
        display none
        @media screen and (min-width $breakpoint-md-min)
          display block
          vertical-align middle
          width 150px
          height auto
          margin-right 15px
      .title-container
        @media screen and (max-width $breakpoint-sm-max)
          display flex
          justify-content center
          width 100%

  .q-tab__label
    font-size 11px
  .q-tab__icon
    font-size 16px

  .q-tab--active
    color $primary !important
</style>
