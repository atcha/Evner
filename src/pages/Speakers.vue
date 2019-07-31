<template>
  <q-page>
    <transition-group
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp"
    >
      <q-card key="card-intervant-1" class="no-shadow">
        <img src="~assets/intervenants/christian-proust.jpg">
        <q-card-section>
          <h6 class="text-bold text-primary">Christian Proust</h6>
          <p>Il connait bien le monde politique local pour avoir travaillé plus de vingt ans auprès d’élus, maires et présidents de Conseil général. Après avoir été directeur général adjoint des services d’un Département, il s'est présenté à des élections municipales puis départementales. Il est également biographe, il raconte la vie de familles et d’institutions (collectivités, associations).</p>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <q-list v-for="event in getEventsBySpeaker('Christian Proust')" :key="event.id" separator>
            <q-item :class="'type-' + event.type">
              <q-item-section>
                <q-item-label class="text-bold text-primary">{{ event.title }}</q-item-label>
                <q-item-label v-if="event.resume" caption>{{ event.resume }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label class="flex row items-center" caption><q-icon name="place" class="text-secondary" />{{ event.room }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </transition-group>
  </q-page>
</template>

<script>
export default {
  name: 'Speakers',
  data () {
    return {
      eventsBySpeaker: []
    }
  },
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'Les intervenants')
  },
  methods: {
    getEventsBySpeaker (speakerName) {
      return this.$store.getters['events/getBySpeaker'](speakerName)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card:not(:first-child)
    margin-top 15px
</style>
