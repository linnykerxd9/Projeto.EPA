<template>

   <GmapMap
  :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
  :zoom="14"
  map-type-id="roadmap"
  style="width: 100%; height: 450px;"
>
</GmapMap>

</template>

<script>
// import {load, Map, Marker} from 'vue-google-maps'
 // load('AIzaSyD-xjGEnuK7hBDolTVmQFPL8mt3D1lJ_z0')
import {gmapApi} from 'vue2-google-maps'
import { server } from 'boot/axios'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD-xjGEnuK7hBDolTVmQFPL8mt3D1lJ_z0',
    libraries: 'places',
  },
})
export default {
   name: 'EpaMapaComponents',
   components:{},
  data () {
    return {
        currentLocation : { lat: -34.397, lng: 150.644},
        localizacoes: [],
    }
  },
  methods: {
  localizar() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
   mostrarProfs() {
     server.get('localizacao')
     .then(localizacoes => {
       this.localizacoes = localizacoes.data
       console.log(this.localizacoes);
       })
     .catch(err => console.log(err))
   }
  },
   computed: {
    google: gmapApi,
  },
  mounted() {
    this.localizar();
    this.mostrarProfs();
 }

}
</script>
