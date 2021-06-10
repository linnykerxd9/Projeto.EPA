<template>
  <q-page padding>
    <!-- content -->
    <section id="sectionMinhasLocalizacoes">
      <div class="container center column">
          <div class="LocalizacoesCreateContainer">
              <div class="localizacaoCreate">
                <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                >
                <div class="localizacaoCreateContent">
                   <div class="center">
                       <h5>Criar localização no mapa</h5>
                   </div>
                   <div class="localizacaoInformacoes">
                      <div class="localizacaoCidade">
                        <q-select
                          filled
                          v-model="localizacao.cidade"
                          use-input
                          input-debounce="0"
                          label="Cidade"
                          :options="opcoesCidade"
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

                     <div class="localizacaoBairro">
                        <q-select
                          filled
                        v-model="localizacao.bairro"
                          use-input
                          input-debounce="0"
                          label="Bairro"
                          :options="opcoesBairro"
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
                   </div>
                    <div class="localizacaoInformacoes">
                      <div class="rua">
                         <q-select
                          filled
                          v-model="localizacao.rua"
                          use-input
                          input-debounce="0"
                          label="Rua"
                          :options="opcoesRua"
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
                      <div class="numero">
                      <q-input
                          filled
                          v-model="localizacao.numero"
                          type="number"
                          label="Numero"
                          input-class="text-right"
                          style="width: 250px"
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
      <div class="localizacoesCardContainer">
           <h4>Minhas Localizações</h4>

           <q-separator class="separador"/>

            <div class="localizacoesCardContent" v-if="localizacoes.length != 0">
                <div class="center localizacoesCardColumn">
                   <!-- Div vazia por que o serviço de geocoding é pago -->
                </div>
            </div>
            <div class="center" v-else>
                <h6 style="color:#828080;">Nenhuma localização cadastrada</h6>
          </div>
          </div>
      </div>
</section>
  </q-page>
</template>

<script>
const cidade = ['Camaragibe','São lourenço da mata','Jaboatão dos guararapes'];
const bairro = ['Capibaribe','Coahbi 1','Malvinas'];
const rua = ['Rua dom bosco','Rua Pedro alvares'];
export default {
  name: 'PageLocalizacoes',
  data(){
    return {
      opcoesCidade:cidade,
      opcoesBairro:bairro,
      opcoesRua:rua,
      localizacoes: [],
      localizacao: {
        cidade:null,
        bairro:null,
        rua:null,
        numero:null
      }
    }
  },
  methods: {
    onSubmit() {console.log(this.localizacao)},
    onReset() {
      this.localizacao.cidade = null;
      this.localizacao.bairro = null;
      this.localizacao.rua = null;
      this.localizacao.numero = null;
    },
     filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.opcoesCidade = cidade
          this.opcoesBairro = bairro
          this.opcoesRua = rua
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
          this.opcoesCidade = cidade.filter(v => v.toLowerCase().indexOf(needle) > -1)
          this.opcoesBairro = bairro.filter(v => v.toLowerCase().indexOf(needle) > -1)
          this.opcoesRua = rua.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
     validarRotas() {
      const id = this.$route.params.id.split('-');
      const rotaLocalizacao = this.$route.fullPath.includes('/localizacoes');
      if(id[0] == "ALU" && rotaLocalizacao){
         alert("Não Autorizado");
        this.$router.push({path:'mapa'})
      }
    }
  },
   beforeMount() {
    this.validarRotas();
  },
}
</script>

<style>
#sectionMinhasLocalizacoes .center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#sectionMinhasLocalizacoes h5 {
  margin:0;
}
#sectionMinhasLocalizacoes .column{
    flex-direction: column;
}
#sectionMinhasLocalizacoes .LocalizacoesCreateContainer{
  width: 70%;
  background-color: #f9f9f9;
  border-radius: 29px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24);
  padding: 0.9375rem;
}
#sectionMinhasLocalizacoes .localizacaoInformacoes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.1875rem;
}
#sectionMinhasLocalizacoes .localizacoesCardContainer{
  margin:20px 0;
  width:100%;
}
#sectionMinhasLocalizacoes .localizacoesCardContent{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#sectionMinhasLocalizacoes .localizacoesCardContent .localizacoesCardColumn{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-self: center;
}
</style>
