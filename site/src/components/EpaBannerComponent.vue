<template>
  <div id="DivBanner">
  	<div class="container" >
  		<div class="center">
  			<div class="TituloBanner" v-show="titulo">
  				<h3><strong>{{titulo}}</strong></h3>
  			</div>
  			<div class="DescricaoBanner">
  				<div><p class="linhas">{{descricao}}</p></div>
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
	.TituloBanner{font-family: Georgia;font-size: 42px; margin-top:30px}
	.DescricaoBanner{width: 26%; font-size: 15px; font-style: italic;
    font-weight: 900;
    margin-left: 24px;
	}
    .autor{display: flex; justify-content: center; font-family: Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	font-weight: bold; font-size: 12px; letter-spacing: .1em;
	padding: 10px;
    }
	.linhas::before{
		content: "";
  display: block;
  width: 90px;
  height: 2px;
  background: #000;
  margin: 20px 0 10px 55px;
	}

	.linhas::after {
  content: "";
  display: block;
  width: 90px;
  height: 2px;
  background: #000;
  margin: 12px 0 10px 58px;
}
</style>
