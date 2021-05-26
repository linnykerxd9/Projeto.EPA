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
   </section>
  </q-page>
</template>

<script>
import EpaMenuComponent from '../components/menuEpa'
const menu = [
  {
    link:"#",
    fundo:"img/garoto.svg",
    texto:"Meu perfil"
  },
  {
    link:"#",
    fundo:"img/livros.svg",
    texto:"Minhas matérias"
  },
  {
    link:"#",
    fundo:"img/bater-papo.svg",
    texto:"Chats"
  },
  {
    link:"#",
    fundo:"img/calendario.svg",
    texto:"Minha agenda"
  },
   {
    link:"#",
    fundo:"img/dados-pessoais.svg",
    texto:"Meus dados"
  },
   {
    link:"#",
    fundo:"img/pino-de-localizacao.svg",
    texto:"Minhas localizações"
  },
]
export default {
 name: 'EpaMapaPage',
 components:{EpaMenuComponent},
  data()  {
    return{
      menuMapa: menu,
    }
  }
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
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-top:3%;
}


</style>
