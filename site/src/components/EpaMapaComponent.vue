<template>

   <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="roadmap"
  style="width: 100%; height: 400px;"
>
</GmapMap>

</template>

<script>
// import {load, Map, Marker} from 'vue-google-maps'
 // load('AIzaSyD-xjGEnuK7hBDolTVmQFPL8mt3D1lJ_z0')
import {gmapApi} from 'vue2-google-maps'
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
    return {}
  },
   computed: {
    google: gmapApi
  }
}
</script>
