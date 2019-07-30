<template>
  <q-page>
    <div class="main">
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <h6 class="text-primary" key="head-path">Venir jusqu'à l'événement</h6>
        <q-card key="section-path" class="no-shadow">
          <q-card-section>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label>Adresse</q-item-label>
                  <q-item-label caption>
                    15-13 Rue Sainte-Opportune, 86000 Poitiers
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Venir en bus</q-item-label>
                  <q-item-label caption>
                    <a href="https://www.vitalis-poitiers.fr/itineraires/">trouvez votre itinéraire</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <h6 class="text-primary" key="head-places">Les lieux</h6>
        <q-card class="map-container no-shadow" key="section-places">
          <q-card-section>
            <l-map
              ref="map"
              style="height: 300px; width: 100%"
              :zoom="zoom"
              :center="center"
            >
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker :lat-lng="markerFacDroit" ></l-marker>
              <l-marker :lat-lng="markerEelv" ></l-marker>
            </l-map>
          </q-card-section>
        </q-card>
        <h6 class="text-primary" key="head-whois">Organisateurs</h6>
        <q-card class="no-shadow" key="section-whois">
          <q-card-section>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label>Site internet</q-item-label>
                  <q-item-label caption>
                    <a href="http://poitierscollectif.fr/" target="_blank">Poitiers Collectif</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Adresse</q-item-label>
                  <q-item-label caption>
                    86000 Poitiers
                  </q-item-label>
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
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [46.58330879784864, 0.3424481012536944],
      markerFacDroit: [46.584195223376284, 0.34446363179586115],
      markerEelv: [46.584227, 0.34203]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .main
    padding 15px
  .map-container
    width 100%
</style>
