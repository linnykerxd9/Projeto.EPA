<template>
  <q-page padding>
    <section id="sectionPerfil">
      <div class="container">
        <div class="column center">
          <div>
             <q-avatar size='150px'>
                <img src="img/foto-perfil.jpg">
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
                      :rules="[val => val && val.length > 0 || 'O campo não pode ser nulo',]"
                    />
                  </div>

                  <div class="sobreVoce"  style="margin-top: 0px;">
                      <q-input
                        v-model="usuario.sobre"
                        filled
                        autogrow
                        label="Escreva um pouco sobre você"
                        lazy-rules
                      :rules="[val => val && val.length > 0 || 'O campo não pode ser nulo',]"
                      />
                    </div>
                    
                  </div>
                    <div class="minhasMaterias container" v-if="professor">
                      <h4 style="margin:20px 0px;">Minhas Matérias</h4>
                      <div class="minhasMateriasContent" v-if="materias.length != 0">
                        <div class="materiasColumn">
                         <materiasComponent
                                      v-for="materia in materias"
                                      :key="materia.id"
                                      :nome="materia.Materium.nome"
                                      :serie="materia.Materium.serie"
                                      :valor="materia.Materium.valorMateria"
                                      :tipo="materia.Materium.escolaridade"
                     ></materiasComponent>
                        </div> 
                      </div>
                       <div class="center" v-else>
                           <h6 style="color:#828080;">Nenhuma matéria cadastrada</h6>
                      </div>
                    </div>








              <div class="btnAtualizar">
                <q-btn label="Atualizar" type="submit" color="primary"  />
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
      idUsuario: this.$route.params.id.split('-'),
      professor: false,
      usuario: {
        nome_completo:null,
        sobre:null,
       },
        materias:[],
     }
   },
   methods: {
     minhasMaterias () {
      if (this.idUsuario[0] == 'PRO') {
        this.professor = true;
        console.log(this.idUsuario);
        server.get(`materiaProf/${this.$route.params.id}`)
      .then(materia => this.materias = materia.data)
      .catch(()=>{
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao recuperar suas matérias'
        })
      });
      }
     },
     onSubmit(){
      if (this.idUsuario[0]='PRO') {
        server.put(`professor/${this.$route.params.id}`,this.usuario)
        .then(professor=> this.$q.sessionStorage.set("usuario", this.usuario))
        .catch(()=>{
          this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao recuperar suas matérias'
        })
      });
      } else{
         server.put(`aluno/${this.$route.params.id}`,this.usuario)
        .then(professor=> this.$q.sessionStorage.set("usuario", this.usuario))
        .catch(()=>{
          this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao recuperar suas matérias'
        })
      });
      }
     },
   },
   beforeMount() {
     this.usuario = this.$q.sessionStorage.getItem('usuario');
     this.minhasMaterias(); 
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

#sectionPerfil .nomeCompleto, #sectionPerfil .sobreVoce {
  width: 300px;
  margin: 40px 0px;

}
#sectionPerfil .minhasMateriasContent {
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#sectionPerfil .materiasColumn {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center; 
}
#sectionPerfil  .btnAtualizar {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>