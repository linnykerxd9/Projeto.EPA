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
        <!-- Chamando o mapa do google maps através dessa div com o id map-->
        <EpaMapaComponent />
        </div>
      </div>
   </section>
  </q-page>
</template>

<script>
import EpaMenuComponent from '../components/menuEpa'
import EpaMapaComponent from '../components/EpaMapaComponent'

//Fazendo a variável que irá guardar os itens do menu
const menu = [
  {
    prof:false,
    link:"#",
    fundo:"img/garoto.svg",
    texto:"Meu perfil"
  },
  {
    prof:true,
    link:"#",
    fundo:"img/livros.svg",
    texto:"Minhas matérias"
  },
  {
    prof:false,
    link:"#",
    fundo:"img/bater-papo.svg",
    texto:"Chats"
  },
  {
    prof:false,
    link:"#",
    fundo:"img/calendario.svg",
    texto:"Minha agenda"
  },
   {
     prof:false,
    link:"#",
    fundo:"img/dados-pessoais.svg",
    texto:"Meus dados"
  },
   {
    prof:true,
    link:"#",
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
</style>
