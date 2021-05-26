
<template>
  <q-layout view="hHh lpR fff">

    <q-header class="header text-white">
      <q-toolbar  class="container">
        <q-toolbar-title>
          <a href="index.html">
            <img src="img/sapoha.png" alt="EPA" class="imagem grid-4">  
          </a>
        </q-toolbar-title>
<div class="header_menu grid-12">
  <ul>
    <li><a href="#">Sobre</a></li>
    <li><span class="dot"></span><a href="#">Como Começar</a></li>
    <li><span class="dot"></span><a href="#">Contato</a></li>
    <li><span class="dot subtitulo"></span><a href="#">Login</a></li>
  </ul>
</div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
      </q-toolbar>
      <div class="footer">
        <div class="container">

         <div class="grid-8 parceiro">
           <h3>Seja nosso Parceiro</h3>
           <div>
             <img src="img/duvida-de-cabeca.png" alt="cabeça de menino com uma interrogação">
           </div>
           </div>       
      </div>
      </div>
      
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
    padding: 5px 25px;

}

.header_menu {
    text-align: right;
    

}

.header_menu ul li {
    
    display: inline-block;
    margin-left: 25px;
    list-style-type: disc;
}


.header_menu ul li a{
   font-family: Arial, Helvetica, sans-serif;
   color: #000; 
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: 16px;
    text-decoration: none;
     padding: 10px 0;
}


.header_menu ul li a:hover {
    color: #fff;

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

.subtitulo:after {
  content: "";
  display: block;
  width: 45px;
  height: 2px;
  background: #000;
  margin: 14px 0 0px 30px;
}

.header_menu ul li a .subtitulo:hover {
  color: #fff;
}
</style>