<template>
  <q-page padding>
    <section id="sectionPerfil">
      <div class="container">
        <div class="column center">
          <div>
             <q-avatar size='150px'>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
          </div>
          <div class="perfilContainer">
            <q-form
                @submit="onSubmit"
                class="q-gutter-md"
              >
              <div class="perfilContent">
                <div class="nomeCompleto">
                  <q-input
                      filled
                      name="nome_completo"
                      v-model="usuario.nome_completo"
                      label="Seu nome Completo *"
                      lazy-rules
                      :rules="[
                      val => val && val.length > 0 || 'O campo não pode ser nulo',]"
                    />
                  </div>
                  <div class="q-pa-md sobreVoce"  style="max-width: 300px">
                      <q-input
                        v-model="usuario.sobre"
                        filled
                        autogrow
                        label="Escreva um pouco sobre você"
                      />
                    </div>
                    <div class="minhasMaterias">
                      <h4>Minhas Matérias</h4>
                      <div class="minhasMateriasContent">
                         <materiasComponent
                                      nome="alguma"
                                      serie="coisa"
                                      valor="alguma"
                                      idMateria="coisa"
                                      tipo="alguma"
                     ></materiasComponent>
                      </div>
                    </div>
                  </div>









              <div class="btnCadastro">
                <q-btn label="Atualizar" type="submit" color="primary"  :loading="enviando" />
              </div>
           </q-form>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>

import { server } from 'boot/axios'
import materiasComponent from '../components/materiasComponent.vue'
export default {
   name: 'EPAPerfil',
   components:{ materiasComponent },
   data(){
     return {
      usuario: {
        nome_completo:null,
        sobre:null,
      
       },
        materias:[],
     }
   }
}
</script>
<style scoped>
#sectionPerfil .center{
  display: flex;
  justify-content: center;
  align-items: center;
  }
#sectionPerfil .perfilContainer{
    width: 100%;
  }
#sectionPerfil .perfilContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>