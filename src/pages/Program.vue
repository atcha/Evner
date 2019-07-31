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
            <q-btn label="Samedi" color="accent" :class="{ 'is-active': (activeDay === 'saturday') }" @click="getEventsByDay('saturday')" />
            <q-btn label="Dimanche" color="accent" :class="{ 'is-active': (activeDay === 'sunday') }" @click="getEventsByDay('sunday')" />
          </q-btn-group>
        </div>
        <q-card v-for="(eventByHour, index) in eventsByDayByHour" :key="'card-' + index" class="no-shadow">
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
      eventsByDayByHour: [],
      activeDay: 'saturday'
    }
  },
  mounted () {
    this.getEventsByDay('saturday')
    this.$store.commit('siteInfo/updateSiteTitle', 'Planning')
  },
  methods: {
    getEventsByDay (day) {
      this.eventsByDayByHour = this.$store.getters['events/getByDayByHours'](day)
      this.activeDay = day
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card:not(:first-child)
    margin-top 15px
  .q-icon
    margin-right 5px

  .q-btn
    &.is-active
      background-color darken($accent, 10) !important
</style>
