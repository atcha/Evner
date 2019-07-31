<template>
  <q-page>
    <div>
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <div class="q-pa-md" key="btn-days">
          <q-btn-group unelevated spread>
            <q-btn label="Samedi" color="accent" class="is-active" />
            <q-btn label="Dimache" color="accent" />
          </q-btn-group>
        </div>
        <q-card v-for="(eventByHour, index) in eventsByHour" :key="'card-' + index" class="no-shadow">
          <q-card-section>
            <div class="flex row items-center text-bold"><q-icon name="access_time" />{{ index }}</div>
            <q-list v-for="event in eventByHour" :key="event.id" separator>
              <q-item :class="'type-' + event.type">
                <q-item-section>
                  <q-item-label class="text-bold text-primary">{{ event.title }}</q-item-label>
                  <q-item-label v-if="event.resume" caption>{{ event.resume }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="flex row items-center" caption><q-icon name="person" class="text-secondary" />{{ event.speaker }}</q-item-label>
                  <q-item-label class="flex row items-center" caption><q-icon name="place" class="text-secondary" />{{ event.room }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Program',
  data () {
    return {
      eventsByHour: []
    }
  },
  mounted () {
    this.eventsByHour = this.$store.getters['events/getByHours']
    this.$store.commit('siteInfo/updateSiteTitle', 'Planning')
  }
}
</script>

<style lang="stylus" scoped>
  .q-card:not(:first-child)
    margin-top 15px
  .q-icon
    margin-right 5px

  [class*="type-"]
    border-left 2px solid
  .type-administratif
    border-color $administratif
  .type-conference
    border-color $conference
  .type-atelier
    border-color $atelier
  .type-divertissement
    border-color $divertissement

  .q-btn
    &.is-active
      background-color darken($accent, 10) !important
</style>
