<template>
  <q-page>
    <transition-group
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp"
    >
      <q-card v-for="(speaker, index) in speakers" :key="'card-intervant-' + index" class="no-shadow">
        <img :src="'/assets/' + speaker.picture">
        <q-card-section>
          <h6 class="text-bold text-primary">{{ speaker.name }}</h6>
          <p>{{ speaker.bio }}</p>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <h6 class="text-secondary">Ces interventions</h6>
          <q-list v-for="event in getEventsBySpeaker(speaker.name)" :key="event.id" separator>
            <q-item :class="'type-' + event.type">
              <q-item-section>
                <q-item-label class="text-bold text-primary">{{ event.title }}</q-item-label>
                <q-item-label v-if="event.resume" caption>{{ event.resume }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label class="flex row items-center"><q-icon name="access_time" class="text-secondary" /><span>{{ event.hour }}</span></q-item-label>
                <q-item-label class="flex row items-center"><q-icon name="place" class="text-secondary" /><span>{{ event.room }}</span></q-item-label>
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
      eventsBySpeaker: [],
      speakers: []
    }
  },
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'Les intervenants')
    this.speakers = this.$store.state.speaker.speakers
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

  .q-icon
    margin-right 5px
</style>
