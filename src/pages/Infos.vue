<template>
  <q-page class="flex column" transition-show="jump-down">
    <div>
      <h6 class="text-primary">Les lieux</h6>
      <q-card class="map-container">
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
      <h6 class="text-primary">Organisateurs</h6>
      <q-card>
        <q-card-section>
          <p>Site internet : <a href="http://poitierscollectif.fr/" target="_blank">Poitiers Collectif</a></p>
          <p>Adresse : 86000 Poitiers</p>
          <p></p>
        </q-card-section>
      </q-card>
      <h6 class="text-primary">Venir jusqu'à l'événement</h6>
      <q-card>
        <q-card-section>
          <p>Site internet : <a href="http://poitierscollectif.fr/" target="_blank">Poitiers Collectif</a></p>
          <p>Adresse : 86000 Poitiers</p>
          <p></p>
        </q-card-section>
      </q-card>
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
  .map-container
    width 100%
</style>
