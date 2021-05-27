<template>
<section id="sectionMenuMapa" v-if="fundo">
  <div class="menu tamanho">
   <q-btn :to="link" class="tamanho"><img class="tamanho" :src="fundo"></q-btn>
   <div class="descricaoBtnMenu"><p>{{texto}}</p></div>
  </div>
</section>
</template>

<script>
export default {
 name: 'EpaMenuComponent',
 props:["link","fundo","texto"]
}
</script>
<style>
#sectionMenuMapa{
  width: 94px;
  height: 94px;
  border: 1px solid #c5c5c5;
  border-radius: 78px;
  background-color:#f7f5f5;
  float:left;
  margin-right: 3%;
}
#sectionMenuMapa .tamanho{
  width:100%;
  height:100%;
  border-radius: 125px;
  border: 0 solid transparent;
  display: inline;
}
#sectionMenuMapa .descricaoBtnMenu{
  display:flex;
  justify-content: center;
}
</style>
