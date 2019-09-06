<template>
  <q-page>
    <div class="main">
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <div key="inscription-container">
          <h6 class="text-primary">Toujours pas inscrit ?</h6>
          <q-card class="no-shadow">
            <q-card-section>
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Vous avez jusqu'au 15/09</q-item-label>
                    <q-item-label>
                      <q-btn icon="create"
                             label="M'inscrire à l'évènement"
                             unelevated
                             color="accent"
                             class="full-width"
                             type="a"
                             href="https://framaforms.org/formulaire-dinscription-a-la-rentree-des-initiatives-citoyennes-poitiers-2122-septembre-2019"
                             target="_blank"
                             replace />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div key="path-container">
          <h6 class="text-primary">Comment nous rejoindre ?</h6>
          <q-card class="no-shadow">
            <q-card-section>
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Adresse</q-item-label>
                    <q-item-label caption>
                      <strong>Université de Poitiers - centre-ville</strong><br />
                      Faculté de droit et sciences sociales<br />
                      Batiment E10<br />
                      15 rue sainte-opportune<br />
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
                             class="full-width"
                             type="a"
                             href="https://www.vitalis-poitiers.fr/itineraires/"
                             target="_blank"
                             replace />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Vous cherchez un co-voiturage ?</q-item-label>
                    <q-item-label caption>
                      <q-btn icon="directions_car"
                             label="Trouver un co-voiturage"
                             unelevated
                             color="accent"
                             class="full-width"
                             type="a"
                             href="https://www.covievent.org/covoiturage/rentree-des-initiatives-citoyennes-municipales-2020/f3262b14700873f0eeaf3c1f48c87f44"
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
                <l-marker :lat-lng="markerFacDroit" >
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/basic-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Faculté de droit et sciences sociales</h6>
                    <p class="no-margin">15 rue sainte-opportune</p>
                    <p class="no-margin">La Rentrée des initiatives Citoyennes c'est ici !</p>
                  </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerHotelDeVille" >
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/basic-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Place du Maréchal Philippe Leclerc</h6>
                    <p class="no-margin">Lieu de l'action publique</p>
                  </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerParkingBlossac" v-if="displayParking">
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/car-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Parking Blossac</h6>
                    <p class="no-margin">Boulevard de Tison</p>
                  </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerParkingCarnot" v-if="displayParking">
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/car-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Parking Hotel de ville</h6>
                    <p class="no-margin">22 rue Sadi Carnot</p>
                  </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerParkingCordelier" v-if="displayParking">
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/car-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Parking Q-Park Poitiers Les Cordeliers</h6>
                    <p class="no-margin">4 Bis Rue Henri Oudin, 86000 Poitiers</p>
                  </l-popup>
                </l-marker>
                <l-marker :lat-lng="markerParkingMarche" v-if="displayParking">
                  <l-icon
                    :icon-size="iconSize"
                    :icon-anchor="staticAnchor"
                    icon-url="/statics/markers/car-marker.png" >
                  </l-icon>
                  <l-popup>
                    <h6 class="text-accent">Parking Notre-Dame-Marché</h6>
                    <p class="no-margin">4 Voie André Malraux, 86000 Poitiers</p>
                  </l-popup>
                </l-marker>
              </l-map>
              <div class="transport-container">
                <p class="text-subtitle1 text-secondary no-margin">Quel est votre moyen de transport ?</p>
                <p v-for="text in transportText" :key="text.id" class="no-margin">{{ text }}</p>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions>
              <q-btn text-color="secondary"
                     flat
                     icon-right="train"
                     :class="[btnClass]"
                     @click="toggleRoute"
              />
              <q-btn text-color="accent"
                     flat
                     icon-right="directions_car"
                     :class="[btnClass]"
                     @click="toggleParking"
              />
            </q-card-actions>
          </q-card>
        </div>
        <div key="infospratiques-container">
          <h6 class="text-primary">Les repas</h6>
          <q-card class="no-shadow">
            <q-card-section>
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Que prenons-nous en charge</q-item-label>
                    <q-item-label caption>
                      Café - Thé - Jus de fruit - Apéritif
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold">Votre participation</q-item-label>
                    <q-item-label caption>
                      10 € par repas
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import L from 'leaflet'
import { } from 'leaflet-routing-machine'
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet'
export default {
  name: 'Infos',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  mounted () {
    this.$refs.map.mapObject._onResize()
    L.tileLayer(this.url, { useCache: true })
    this.$store.commit('siteInfo/updateSiteTitle', 'Informations')
    this.getRoute()
  },
  data () {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [46.58330879784864, 0.3424481012536944],
      markerFacDroit: [46.584195223376284, 0.34446363179586115],
      markerHotelDeVille: [46.5805, 0.33969999999999345],
      markerParkingCordelier: [46.581610, 0.342460],
      markerParkingBlossac: [46.575394, 0.338363],
      markerParkingCarnot: [46.579240, 0.338860],
      markerParkingMarche: [46.584037, 0.345103],
      routeDisplayed: false,
      routeControl: null,
      transportText: [],
      displayParking: false,
      btnClass: '',
      staticAnchor: [16, 37],
      iconSize: [32, 41]
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
    },
    getRoute () {
      this.routeControl = L.Routing.control({
        waypoints: [
          L.latLng(46.581390, 0.333070),
          L.latLng(46.584195223376284, 0.34446363179586115)
        ],
        createMarker: (i, wp) => {
          return L.marker(wp.latLng, {
            draggable: false,
            icon: L.icon({
              iconUrl: '/statics/markers/basic-marker.png',
              iconSize: this.iconSize,
              iconAnchor: this.staticAnchor
            })
          }).addTo(this.$refs.map.mapObject)
        },
        router: L.Routing.mapbox('pk.eyJ1IjoiYXRjaGEiLCJhIjoiY2ptdDFyaDVhMDBsMDNwbzh0anIyNmZhdiJ9.tggpSrJwZllrBZGjXBQlNA', { profile: 'mapbox/walking' }),
        summaryTemplate: '',
        distanceTemplate: '',
        timeTemplate: '',
        show: false,
        lineOptions: {
          styles: [ { color: '#bdb01d', opacity: 1, weight: 3 } ]
        }
      })
    },
    swipePage ({ evt, ...info }) {
      if (info.direction === 'left') {
        this.$router.push('program')
      } else if (info.direction === 'right') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .map-container
    width 100%
  .transport-container
    margin-top 15px
</style>
