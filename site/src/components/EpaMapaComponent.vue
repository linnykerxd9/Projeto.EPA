<template>
<section>
   <GmapMap
  :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
  :zoom="14"
  map-type-id="roadmap"
  style="width: 100%; height: 450px;"
>
  <GmapMarker
    v-for="(localizacao, index) in localizacoes"
    :key="index.id"
    :position="getPosition(localizacao)"
    :clickable="true"
    @click="mostrarPerfil(localizacao.idProfessor)"
  />
</GmapMap>

    <q-dialog v-model="perfil" v-if="professor != null">
      <q-card class="my-card">
        <q-img src="img/foto-perfil.jpg" />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis" style="margin-top:10px;">
               {{professor.nome_completo}}
            </div>
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-subtitle1" >
              Telefone: {{professor.telefone}}
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Chat" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</section>
</template>

<script>
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
        localizacoes:  [],
        professor: null,
        perfil:false,
        stars: 3,
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
        this.localizacoes = localizacoes.data.filter( localizacao =>   localizacao.situacao == 1);
        }).catch(() => {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao procurar por professores próximos'
        })
      })
    },
     getPosition(marker) {
      return {
        lat: parseFloat(marker.latitude),
        lng: parseFloat(marker.longitude)
      }
  },
  mostrarPerfil(idProfessor){
      server.get(`professor/${idProfessor}`)
      .then(professor => {
        this.professor = professor.data[0];
        this.perfil = true;
      })
      .catch(() => {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao acessar esse perfil'
        })
      })
  }
},
   computed: {
    google: gmapApi,
  },
  mounted() {
    this.localizar();
    this.mostrarProfs();
 },
}
</script>
