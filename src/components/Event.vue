<template>
  <div>
    <q-list separator>
      <q-item :class="'type-' + event.type">
        <q-item-section>
          <q-item-label class="text-bold text-primary">{{ event.title }}</q-item-label>
          <q-item-label v-if="event.resume" caption>{{ event.resume }}</q-item-label>
          <q-btn v-if="event.content.length > 0" class="q-btn-detail"
                 label="Détails"
                 icon="zoom_in"
                 unelevated
                 size="sm"
                 color="accent"
                 @click="isDetailOpen = !isDetailOpen" />
        </q-item-section>
        <q-item-section side>
          <q-item-label class="flex row items-center" caption>
            <q-icon name="person" class="text-secondary" />{{ event.speaker }}
          </q-item-label>
          <q-item-label class="flex row items-center" caption>
            <q-icon name="place" class="text-secondary" />{{ event.room }}
          </q-item-label>
          <q-item-label class="flex row items-center" caption>
            <q-icon :name="favIcon"
                    size="1rem"
                    color="accent"
                    class="q-btn-fav"
                    @click="toggleFav" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog v-model="isDetailOpen">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6 text-primary">{{ event.title }}</div>
          <q-space />
          <q-btn icon="close" text-color="primary" flat dense v-close-popup />
        </q-card-section>

        <q-card-section>
          {{ event.content }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['event'],
  data () {
    return {
      isDetailOpen: false,
      isAddToFav: false,
      favIcon: 'favorite_border'
    }
  },
  mounted () {
    this.isFavorite()
  },
  methods: {
    toggleFav () {
      if (!this.isAddToFav) {
        this.$store.commit('favorite/addEventToFavorite', this.event.id)
        this.$q.notify({
          message: 'L\'intervention a bien été ajoutée à vos favoris',
          color: 'primary'
        })
        this.favIcon = 'favorite'
      } else {
        this.$store.commit('favorite/removeEventToFavorite', this.event.id)
        this.$q.notify({
          message: 'L\'intervention a bien été supprimée de vos favoris',
          color: 'primary'
        })
        this.favIcon = 'favorite_border'
      }
      this.isAddToFav = !this.isAddToFav
    },
    isFavorite () {
      this.isAddToFav = this.$store.state.favorite.favorites.includes(this.event.id)
      if (this.isAddToFav) this.favIcon = 'favorite'
    }
  }
}
</script>

<style scoped>

</style>
