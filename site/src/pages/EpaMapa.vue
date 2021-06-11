<template>
  <q-page padding>
    <!-- content -->
   <section id="sectionMapa">
     <div class="container">
      <div class="center">
        <div class="menu">
           <EpaMenuComponent
            v-for="menu in menuMapa"
            :key="menu.fundo"
            v-bind="menu"
           ></EpaMenuComponent>
      </div>
      </div>
     </div>
       <div class="divPaiMapa">
        <div class="divTamanhoMapa">
        <!-- Chamando o componente do mapa do google maps-->
        <EpaMapaComponent />
        </div>
      </div>
      <div class="filterContainer container">
        <div class="q-gutter-y-md center" style="flex-direction: row;width: 100%; justify-content: space-evenly;">
        <h4>Filtros:</h4>
           <div class="filterSelect">
              <q-select clearable filled color="purple-12" v-model="filtro.materia" :options="materias" label="Matérias" />
           </div>
            <div class="filterSelect">
               <q-select clearable filled color="purple-12" v-model="filtro.escolaridade" :options="series" label="Escolaridade" />
            </div>
              <q-btn color="primary" label="filtrar" />
        </div>
      </div>
   </section>
  </q-page>
</template>

<script>
import EpaMenuComponent from '../components/menuEpa'
import EpaMapaComponent from '../components/EpaMapaComponent'
const materias = ['Português', 'Matemática', 'História', 'Geografia', 'Artes','Física','Filosofia','Biologia','Química','Sociologia'];
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
//Fazendo a variável que irá guardar os itens do menu
const menu = [
  {
    prof:false,
    link:"perfil",
    fundo:"img/garoto.svg",
    texto:"Meu perfil"
  },
  {
    prof:true,
    link:"minhas-materias",
    fundo:"img/livros.svg",
    texto:"Minhas matérias"
  },
  {
    prof:false,
    link:"chat",
    fundo:"img/bater-papo.svg",
    texto:"Chats"
  },
  {
    prof:false,
    link:"agenda",
    fundo:"img/calendario.svg",
    texto:"Minha agenda"
  },
   {
     prof:false,
    link:"meus-dados",
    fundo:"img/dados-pessoais.svg",
    texto:"Meus dados"
  },
   {
    prof:true,
    link:"localizacoes",
    fundo:"img/pino-de-localizacao.svg",
    texto:"Minhas localizações"
  },
]
export default {
 name: 'EpaMapaPage',
 components:{EpaMenuComponent,EpaMapaComponent},
  data()  {
    return{
      menuMapa: [],
      materias,
      series,
      filtro:{
        materia:null,
        escolaridade:null,
      }
    }
  },
  methods: {
    mostrarMenu(id) {
      const mostrar = id.split('-')
      if(mostrar[0] == "PRO"){
        this.menuMapa = menu;
      }
      else {
        this.menuMapa = menu.filter(menu => menu.prof == false);
      }
    }
  },
  beforeMount() {
    this.mostrarMenu(this.$route.params.id);
  },
}
</script>
<style>
#sectionMapa .container{
  width:80%;
  margin-left: 10%;
  margin-right: 10%;
}
#sectionMapa .menu{
  display:block;
  justify-content: center;
}
#sectionMapa .center{
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#sectionMapa .divPaiMapa{
  display:flex;
  justify-content: center;
  margin-top: 3.125rem;
}
#sectionMapa .divTamanhoMapa{
  width: 60%;
  height: 450px;
  box-shadow: 4px 3px 16px -3px;
}
#sectionMapa .filterSelect{
  width:14.875rem;
}
#sectionMapa .filterContainer{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom:2.5rem;
}
</style>
