<template>
  
  <div class="row">
   	<div>
   	<EpaCardsComponent 
  	imagem="img/pencil-918449_1920.png"
  	descricao="Encontre a disciplima que você procura e um professor que lhe agrader perto de você"
  ></EpaCardsComponent>
  	</div>

  	<div>
  	<EpaCardsComponent 
  	imagem="img/element5-digital-OyCl7Y4y0Bk-unsplash.png"
  	descricao="Dê aulas perto de casa ou do trabalho, encontrando alunos nas redondezas "
  ></EpaCardsComponent>
  	</div>
  </div>
</template>

<script>
	import EpaCardsComponent from '../components/EpaCardsComponent.vue'

export default {
  name: 'PageIndex',
  components: {
  	EpaCardsComponent
  }
}
</script>
<style>
	.row{

	}
</style>