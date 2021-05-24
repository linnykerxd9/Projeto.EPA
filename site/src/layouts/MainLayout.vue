
<template>
  <q-layout view="hHh lpR fff">

    <q-header class="header text-white">
      <q-toolbar  class="container">
        <q-toolbar-title>
          <img src="img/logo_epa.png" alt="EPA" class="imagem grid-4">
        </q-toolbar-title>
<div class="header_menu grid-12">
  <ul>
    <li><a href="#">Sobre</a></li>
    <li><span class="dot"></span><a href="#">Como Começar</a></li>
    <li><span class="dot"></span><a href="#">Contato</a></li>
    <li><span class="dot"></span><a href="#">Login</a></li>
  </ul>
</div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
     
    }
  }
}
</script>
<style >
 .header {
    width: 100%;
    background:#6BB1BB;
    top: 0;
    position: fixed;
    padding: 5px 0;

}

.header_menu {
    text-align: right;
    

}

.header_menu ul li {
    
    display: inline-block;
    margin-left: 25px;
    margin-top: 25px;
    list-style-type: disc;
}


.header_menu ul li a{
   font-family: Arial, Helvetica, sans-serif;
   color: #000; 
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: 14px;
    text-decoration: none;
}

.container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.dot {
  height: 8px;
  width: 8px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
  padding-right:8px;
  margin-right: 15px;

}

.imagem {
  margin-top: 15px;
}
</style>