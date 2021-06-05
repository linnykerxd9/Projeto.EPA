<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import {server} from 'boot/axios'

export default {
  data () {
    return {
       id: this.$route.params.id,
    }
  },
  methods: {
    async validacao(id) {
      var validacaoProf;
      var validacaoAlu;
      await server.get(`aluno/${id}`)
      .then(aluno => {
        if(aluno.data[0]  == undefined || id != aluno.data[0].id){
          validacaoAlu = false;
        }else {
           validacaoAlu = true;
        }
      })
      await server.get(`professor/${id}`)
      .then(professor => {
        if(professor.data[0]  == undefined || id != professor.data[0].id){
           validacaoProf = false;
        }else {
           validacaoProf = true;
        }
      })
      if(validacaoProf == false && validacaoAlu == false){
        alert("Não autenticado");
        this.$router.push({path:'/'})
      }
    }
  },
  beforeMount(){
   this.validacao(this.id);
  }
}
</script>
