<template>
  <div class="divCard">
  	 <q-card class="my-card">
      <img :src="imagem">
      <q-card-section class="q-pt-none">
        {{ descricao }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
   name: 'EpaCardsComponent',
   	props:{
   	imagem:{
   		type:String
   	},
   	descricao:{
   		type:String
   	}
}

}
</script>

<style>
.divCard{
	border: 3px solid rgb(71, 106, 74);
	margin-left: 50px;
	width: 311px;
	height: 254px;
	margin-right: 50px; 
}
.my-card{
  border-radius: 0px;
	background-color:rgb(71, 106, 74)!important;
	box-shadow: none;

}
</style>
