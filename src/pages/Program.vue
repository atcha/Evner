<template>
  <q-page>
    <div>
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <div class="q-pa-md q-btn__container--fixed" key="btn-days">
          <q-btn-group unelevated spread>
            <q-btn label="Samedi" color="accent" :class="{ 'is-active': (activeDay === 'samedi') }" @click="getEventsByDay('samedi')" />
            <q-btn label="Dimanche" color="accent" :class="{ 'is-active': (activeDay === 'dimanche') }" @click="getEventsByDay('dimanche')" />
          </q-btn-group>
        </div>
        <div key="events-container" class="events-container">
          <div class="flex flex-center loader-container" key="loader" v-if="eventsOnLoad">
            <q-spinner
              color="primary"
              size="3em"
            />
          </div>
          <transition-group
            v-else
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <q-card v-for="(eventByHour, index) in eventsByDayByHour" :key="'card-' + index" class="no-shadow">
              <q-card-section>
                <div class="flex row items-center text-bold"><q-icon name="access_time" />{{ index }}</div>
                <Event v-for="event in eventByHour" :key="event.id" :event="event"></Event>
              </q-card-section>
            </q-card>
          </transition-group>
        </div>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import Event from '../components/Event'
export default {
  name: 'Program',
  components: { Event },
  data () {
    return {
      eventsByDayByHour: [],
      activeDay: 'saturday',
      eventsOnLoad: true
    }
  },
  mounted () {
    this.getEventsByDay('samedi')
    this.$store.commit('siteInfo/updateSiteTitle', 'Planning')
  },
  methods: {
    getEventsByDay (day) {
      this.activeDay = day
      this.eventsOnLoad = true
      setTimeout(() => {
        this.eventsByDayByHour = this.$store.getters['events/getByDayByHours'](day)
        this.eventsOnLoad = false
      }, 300)
    },
    swipePage ({ evt, ...info }) {
      if (info.direction === 'left') {
        this.$router.push('speakers')
      } else if (info.direction === 'right') {
        this.$router.push('infos')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card:not(:first-child)
    margin-top 15px
  .q-icon
    margin-right 5px

  .q-btn__container--fixed
    position fixed
    top 50px
    z-index 50
    width 100%
  .q-btn
    &.is-active
      background-color darken($accent, 10) !important

  .events-container
    padding-top 68px
</style>
