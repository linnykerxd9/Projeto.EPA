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
      <q-card class="my-card" style="border-radius:11px;">
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
        <q-card-section v-if="materias.length != 0">
          <h5>Minhas Materias:</h5>
                  <q-separator />
          <EpaMateriasComponent v-for="materia in materias"
                                :key="materia.id"
                                :nome="materia.Materium.nome"
                                :valor="materia.Materium.valorMateria"
                                :tipo="materia.Materium.escolaridade"
          ></EpaMateriasComponent>
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
import EpaMateriasComponent from './materiasComponent.vue'
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
   components:{EpaMateriasComponent},
  data () {
    return {
        currentLocation : { lat: -34.397, lng: 150.644},
        localizacoes:  [],
        professor: null,
        perfil:false,
        stars: 3,
        materias: []
    }
  },
  methods: {
    //função para pegar a localização atual do user
  localizar() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },

    //funcão para mostrar os marcadores dos professores no mapa
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
    //funcão para pegar a localização de apenas 1 professor no loop v-form
    //não estava mostrando fazendo lat:localizacao.latitude e por isso tive que acrescentar essa função
     getPosition(marker) {
      return {
        lat: parseFloat(marker.latitude),
        lng: parseFloat(marker.longitude)
      }
  },
  //função para pegar os dados de apenas 1 professor quando clicar no marcador dele
  async mostrarPerfil(idProfessor){
     await server.get(`professor/${idProfessor}`)
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
    await server.get(`materiaProf/${idProfessor}`)
    .then(materia => { this.materias = materia.data });
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
