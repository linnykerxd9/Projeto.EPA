<template>
<section id="sectionIndex">
  <EpaBannerComponent titulo="Ensino por Amor"
                      descricao='"A educação exige os maiores cuidados, porque influi sobre toda a vida"'
                      autor = "Sêneca"
                      style="background-image:url('img/lapis_azul.svg');">
  </EpaBannerComponent>
<div class="container">
  <div class="row">
   	<div id="divPaiEstudar">
    <div class="q-pa-sm text-subtitle2 text-h6 text-weight-bolder divTitulo">
    <p class="titulo">ES<span class="traco">TUD</span>AR</p>
    </div>
   	<EpaCardsComponent
  	imagem="img/pencil-918449_1920.png"
  	descricao="Encontre a disciplima que você procura e um professor que lhe agrader perto de você"
    nomeBtn="Estudar"
    link="cadastro/aluno"
  ></EpaCardsComponent>
  	</div>

  	<div id="divPaiDarAula">
      <div class="q-pa-sm text-subtitle2 text-h6 text-weight-bolder">
    <p class="titulo">DA<span class="traco">R AU</span>LA</p>
    </div>
  	<EpaCardsComponent
  	imagem="img/element5-digital-OyCl7Y4y0Bk-unsplash.png"
  	descricao="Dê aulas perto de casa ou do trabalho, encontrando alunos nas redondezas "
    nomeBtn="Dar Aulas"
    link="cadastro/professor"
  ></EpaCardsComponent>
  	</div>
  </div>
  </div>

  <div class="divBanner">
  <div id="banner" class="container">
  <div class="text-h6 tituloDivBanner">
  <p> AGENDE<span class="traco"> SUA AULA</span> PELO CHAT</p>
  </div>
  <div class="row">
  <div id="celular">
  <img src="img/foto_celular.png"/>
  <p>Escolha o professor e converse sobre a data, hora, etc., pelo App.</p>
  </div>

  <div id="cadeado">
  <img src="img/foto_cadeado.png"/>
  <p>Pague suas aulas com segurança. Só é liberado o pagamento para o professor após a aula ser encerrada.</p>
  </div>
  </div>

  </div>
  </div>

  <div id="caneta">
  <img src="img/estudar.png"/>
  </div>

</section>
</template>



<script>
	import EpaCardsComponent from '../components/EpaCardsComponent.vue'
  import EpaBannerComponent from '../components/EpaBannerComponent.vue'
export default {
  name: 'PageIndex',
  components: {EpaCardsComponent, EpaBannerComponent},
    data () {
    return {}
  },
}
</script>
<style>
#sectionIndex #banner{
  background-image:url('../../public/img/quadro_negro.png');
  color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 8%;
  }
#sectionIndex div.container {
  width:80%;
  margin-left: 10%;
  margin-bottom: 5%;
}
#sectionIndex div.row {
  Justify-content: center;
}
#sectionIndex .titulo {
  font-family: Georgia;
  display: flex;
  justify-content: center;
  font-size:17px;
}
#sectionIndex .tituloDivBanner {
  display: flex;
  justify-content: center;
  padding-top: 6%;
  padding-bottom: 3%;
  font-family: Georgia;
  font-weight: bold;
}
#sectionIndex #celular {
  width: 250px;
  }
#sectionIndex #cadeado {
  width: 250px;
  padding-top: 30px;
  }
#sectionIndex div#banner .row {
  justify-content: space-evenly;
}
#sectionIndex #celular img,#cadeado img {
  margin-bottom: 5%;
}
#sectionIndex div.divBanner {
  Background-color: lightgrey;
  padding-top: 5%;
  padding-bottom: 1%;
}
#sectionIndex #divPaiDarAula,#divPaiEstudar{
  margin-top:2%;
}
</style>

