<template>
  <q-page padding>
    <!-- content -->
    <section id="sectionMinhasMaterias">
      <div class="container center column">
          <div class="materiasCreateContainer">
              <div class="materiaCreate">
                <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                >
                <div class="materiaCreateContent">
                   <div class="materiaInformacoes">
                      <div class="materiaNome">
                        <q-select
                          filled
                          v-model="materia.nome"
                          use-input
                          input-debounce="0"
                          label="Matéria"
                          :options="opcoesMateria"
                          @filter="filterFn"
                          style="width: 250px"
                          behavior="menu"
                          :rules="[val => !!val || 'Campo é obrigatório']"
                        >
                          <template v-slot:no-option>
                            <q-item>
                              <q-item-section class="text-grey">
                                Nenhum Resultado encontrado
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                     </div>

                     <div class="materiaValor">
                         <q-input
                          filled
                          v-model="materia.valor"
                          label="Valor da aula"
                          mask="#.##"
                          fill-mask="0"
                          reverse-fill-mask
                          unmasked-value
                          input-class="text-right"
                          style="width: 250px"
                          :rules="[val => !!val || 'Campo é obrigatório']"
                        />
                     </div>
                   </div>
                    <div class="materiaInformacoes">
                      <div class="escolaridade">
                        <q-select  style="width: 250px"
                                  filled
                                  v-model="materia.escolaridade"
                                  :options="opcoesEscolaridade"
                                  label="Escolaridade"
                                  :rules="[val => !!val || 'Campo é obrigatório']"
                                  />
                      </div>
                      <div class="serie">
                        <q-select style="width: 250px"
                                  filled
                                  v-model="materia.serie"
                                  :options="opcoesSerie"
                                  label="Série"
                                  emit-value
                                  :rules="[val => !!val || 'Campo é obrigatório']"
                                  />
                       </div>
                    </div>
                </div>
                  <div class="center">
                    <q-btn label="Criar" type="submit" color="primary"/>
                    <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
                 </div>
                </q-form>
              </div>
          </div>

          <div class="meusCardsContainer">
           <h4>Minhas matérias</h4>

           <q-separator class="separador"/>

            <div class="meusCardsContent" v-if="materias.length != 0">
                <div class="center meusCardsColumn">
                     <materiasComponent
                                      v-for="materia in materias"
                                      :key="materia.id"
                                      :nome="materia.Materium.nome"
                                      :serie="materia.Materium.serie"
                                      :valor="materia.Materium.valorMateria"
                                      :idMateria="materia.Materium.id"
                                      :tipo="materia.Materium.escolaridade"
                                      @deletado="atualizarLista"
                     ></materiasComponent>
                </div>
            </div>
            <div class="center" v-else>
                <h6 style="color:#828080;">Nenhuma matéria cadastrada</h6>
          </div>
          </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { server } from 'boot/axios'
import materiasComponent from '../components/materiasComponent.vue'
const materias = ['Português', 'Matemática', 'História', 'Geografia', 'Artes','Física','Filosofia','Biologia','Química','Sociologia'];
const escolaridades = ['Ensino fundamental 1','Ensino fundamental 2','Ensino Médio']
const series = [
  { label: 'Ensino fundamental 1', disable: true },
  { label: '1º ano', value: '1º ano' },
  { label: '2º ano', value: '2º ano' },
  { label: '3º ano', value: '3º ano' },
  { label: '4º ano', value: '4º ano' },
  { label: '5º ano', value: '5º ano' },
  { label: 'Ensino fundamental 2', disable: true },
  { label: '6º ano', value: '6º ano' },
  { label: '7º ano', value: '7º ano' },
  { label: '8º ano', value: '8º ano' },
  { label: '9º ano', value: '9º ano' },
  { label: 'Ensino Médio', disable: true },
  { label: '1º ano', value: '1º ano' },
  { label: '2º ano', value: '2º ano' },
  { label: '3º ano', value: '3º ano' },
]
export default {
  name: 'EpaMinhasMaterias',
  components:{ materiasComponent },
  data(){
    return{
      idProfessor: this.$route.params.id,
      opcoesMateria: materias,
      opcoesEscolaridade: escolaridades,
      opcoesSerie: series,
      materia:{
        nome:null,
        escolaridade: null,
        serie: null,
        valor:null,
      },
      materias:[],
    }
  },
   methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.opcoesMateria = materias
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.opcoesMateria = materias.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    onSubmit(){
      console.log(this.materia);
    },
    onReset(){
      this.materia.nome = null;
      this.materia.escolaridade = null;
      this.materia.serie = null;
      this.materia.valor = null;
      },
    async recuperarMaterias() {
    await server.get(`materiaProf/${this.idProfessor}`)
    .then(materia => { this.materias = materia.data })
    .catch(() => {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao recuperar suas matérias'
        })
      })
    },
    atualizarLista(mensagem) {
      if(mensagem.deletado == true){
        this.recuperarMaterias();
      }
    }
  },
  beforeMount() {
    this.recuperarMaterias();
  },
}
</script>

<style>
#sectionMinhasMaterias .center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#sectionMinhasMaterias .column{
    flex-direction: column;
}
#sectionMinhasMaterias .separador{
  margin:1rem 0;
}
#sectionMinhasMaterias .materiasCreateContainer{
  width: 70%;
  background-color: #f9f9f9;
  border-radius: 29px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24);
  padding: 0.9375rem;
}
#sectionMinhasMaterias .materiaInformacoes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.1875rem;
}
#sectionMinhasMaterias .meusCardsContainer{
  margin:20px 0;
  width:100%;
}
#sectionMinhasMaterias .meusCardsContent{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#sectionMinhasMaterias .meusCardsContent .meusCardsColumn{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-self: center;
}
</style>
