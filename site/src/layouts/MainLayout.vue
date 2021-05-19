
<template>
  <q-layout view="hHh lpR fff">

    <q-header class="header text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img src="img/marca.png" alt="EPA">
        </q-toolbar-title>
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
    padding: 15px 0;

}

.header_menu {
    text-align: right;

}

.header_menu ul li {
    
    display: inline-block;
    margin-left: 25px;
    margin-top: 25px;
}


.header_menu ul li a{
   font-family: Arial, Helvetica, sans-serif;
   color: #000; 
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: 14px;
}
</style>