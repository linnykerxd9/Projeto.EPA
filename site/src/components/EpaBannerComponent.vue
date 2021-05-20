<template>
  <div id="DivBanner">
  	<div class="container" >
  		<div class="center">
  			<div class="TituloBanner" v-show="titulo">
  				<h3><strong>{{titulo}}</strong></h3>
  			</div>
  			<div class="DescricaoBanner">
  				<div><p class="tracoDuplo">{{descricao}}</p></div>
  				<div class="autor" v-show="autor"><p>{{autor}}</p></div>
  			</div>

  		</div>
  	</div>

  </div>

</template>

<script>
export default {
   name: 'EpaBannerComponent',
  props: ["titulo", "descricao", "autor"]
}
</script>

<style type="text/css">
	#DivBanner {
		background-repeat: no-repeat;
		background-size: 100%;
		height: 300px;
		background-position-y:bottom;
	}
	.center{ display: grid; justify-items:center;}
	.TituloBanner{font-family: Georgia;}
	.DescricaoBanner{width: 23%; font-size: 13px; font-style: italic;
    font-weight: 900;
    margin-left: 24px;}
    .autor{display: flex; justify-content: center;
    }
</style>
