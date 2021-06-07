<template>
  <q-page padding>
    <!-- content -->
    <section id="sectionMinhasMaterias">
      <div class="container">
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
                                  />
                      </div>
                      <div class="serie">
                        <q-select style="width: 250px"
                                  filled
                                  v-model="materia.serie"
                                  :options="opcoesSerie"
                                  label="Série"
                                  emit-value
                                  />
                       </div>
                    </div>
                </div>
                  <div>
                    <q-btn label="Criar" type="submit" color="primary"/>
                    <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
                 </div>
                </q-form>
              </div>
          </div>
      </div>
    </section>
  </q-page>
</template>

<script>

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
  data(){
    return{
      opcoesMateria: materias,
      opcoesEscolaridade: escolaridades,
      opcoesSerie: series,
      materia:{
        nome:null,
        escolaridade: null,
        serie: null,
        valor:null,
      }
    }
  },
   methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = materias
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = materias.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
}
</script>

<style>
#sectionMinhasMaterias .materiasCreateContainer{
  background-color: #f9f9f9;
  border-radius: 29px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24);
}
#sectionMinhasMaterias .materiaInformacoes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.1875rem;
}
</style>
