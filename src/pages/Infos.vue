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
              <l-marker :lat-lng="markerEelv" ></l-marker>
            </l-map>
          </q-card-section>
        </q-card>
        </div>
        <div key="whois-container">
          <h6 class="text-primary">Organisateurs</h6>
          <q-card class="no-shadow">
          <q-card-section>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold">Site internet</q-item-label>
                  <q-item-label caption>
                    <q-btn icon="arrow_forward"
                           label="Site de Poitiers Collectif"
                           unelevated
                           color="primary"
                           type="a"
                           href="http://poitierscollectif.fr/"
                           target="_blank"
                           replace />
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold">Adresse</q-item-label>
                  <q-item-label caption>
                    86000 Poitiers
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
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 16,
      center: [46.58330879784864, 0.3424481012536944],
      markerFacDroit: [46.584195223376284, 0.34446363179586115],
      markerEelv: [46.584227, 0.34203]
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
</style>
