<template>
  <q-page>
    <div class="main">
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <div key="path-container">
          <h6 class="text-primary">Comment nous rejoindre ?</h6>
          <q-card class="no-shadow">
            <q-card-section>
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Adresse</q-item-label>
                    <q-item-label caption>
                      15-13 Rue Sainte-Opportune, 86000 Poitiers
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Venir en bus</q-item-label>
                    <q-item-label caption>
                      <q-btn icon="directions_bus"
                             label="trouvez votre itinéraire"
                             unelevated
                             color="accent"
                             type="a"
                             href="https://www.vitalis-poitiers.fr/itineraires/"
                             target="_blank"
                             replace />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div key="places-container">
          <h6 class="text-primary">Les lieux</h6>
          <q-card class="map-container no-shadow">
            <q-card-section>
              <l-map
                ref="map"
                style="height: 300px; width: 100%"
                :zoom="zoom"
                :center="center"
              >
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="markerFacDroit" ></l-marker>
                <l-marker :lat-lng="markerLeLocal" ></l-marker>
                <l-marker :lat-lng="markerParkingBlossac" v-if="displayParking"></l-marker>
                <l-marker :lat-lng="markerParkingCarnot" v-if="displayParking"></l-marker>
                <l-marker :lat-lng="markerParkingCordelier" v-if="displayParking"></l-marker>
                <l-marker :lat-lng="markerParkingMarche" v-if="displayParking"></l-marker>
              </l-map>
              <div class="transport-container">
                <p class="text-subtitle1 text-secondary no-margin">Quel est votre moyen de transport ?</p>
                <p v-for="text in transportText" :key="transport-text" class="no-margin">{{ text }}</p>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-action>
              <q-btn text-color="primary"
                     flat
                     icon-right="train"
                     :class="[btnClass]"
                     @click="toggleRoute"
              />
              <q-btn text-color="primary"
                     flat
                     icon-right="directions_car"
                     :class="[btnClass]"
                     @click="toggleParking"
              />
            </q-card-action>
          </q-card>
        </div>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import L from 'leaflet'
import { } from 'leaflet-routing-machine'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  name: 'Infos',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  mounted () {
    this.$refs.map.mapObject._onResize()
    this.$store.commit('siteInfo/updateSiteTitle', 'Informations')
    this.routeControl = L.Routing.control({
      waypoints: [
        L.latLng(46.581390, 0.333070),
        L.latLng(46.579300, 0.346020)
      ],
      router: L.Routing.mapbox('pk.eyJ1IjoiYXRjaGEiLCJhIjoiY2ptdDFyaDVhMDBsMDNwbzh0anIyNmZhdiJ9.tggpSrJwZllrBZGjXBQlNA', { profile: 'mapbox/walking' }),
      summaryTemplate: '',
      distanceTemplate: '',
      timeTemplate: '',
      show: false
    })
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [46.58330879784864, 0.3424481012536944],
      markerFacDroit: [46.584195223376284, 0.34446363179586115],
      markerLeLocal: [46.579300, 0.346020],
      markerParkingCordelier: [46.581610, 0.342460],
      markerParkingBlossac: [46.575394, 0.338363],
      markerParkingCarnot: [46.579240, 0.338860],
      markerParkingMarche: [46.584037, 0.345103],
      routeDisplayed: false,
      routeControl: null,
      transportText: [],
      displayParking: false,
      btnClass: ''
    }
  },
  methods: {
    toggleRoute () {
      if (!this.routeDisplayed) {
        this.routeControl.addTo(this.$refs.map.mapObject)
        document.querySelector('.leaflet-routing-container').style.display = 'none'
        this.transportText.push('Votre trajet à pied depuis la gare')
      } else {
        this.routeControl.remove()
        this.removeFromTransportText('Votre trajet à pied depuis la gare')
      }
      this.routeDisplayed = !this.routeDisplayed
    },
    toggleParking () {
      if (this.displayParking) {
        this.removeFromTransportText('Voici les parkings les plus proches')
      } else {
        this.transportText.push('Voici les parkings les plus proches')
      }
      this.displayParking = !this.displayParking
    },
    removeFromTransportText (text) {
      const index = this.transportText.indexOf(text)
      if (index > -1) this.transportText.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main
    padding 15px
    div
      &:first-of-type
        h6
          margin-top 0
  .map-container
    width 100%
  .transport-container
    margin-top 15px
</style>
