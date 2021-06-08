<template>
  <section class="sectionCard">
    <div class="divCard">
  	 <q-card class="my-card">
       <QBtn type="a" :to="link" id="linkImagem"><img :src="imagem"></QBtn>
      <q-card-section class="q-pt-none">
        {{ descricao }}
      <div class="divBtn" v-show="link">
         <q-btn id="btnParaCadastro" :label="nomeBtn" :to="link" style="background-color:rgb(107, 177, 186);"/>
      </div>
      </q-card-section>
    </q-card>
  </div>
  </section>
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
   	},
    nomeBtn:{
      type:String,
    },
    link:{
      type:String,
    },
}

}
</script>

<style>
.sectionCard .divCard{
	margin-left: 50px;
	width: 311px;
	margin-right: 50px;
  color:white;
  border: 2px solid rgb(71, 106, 74);
  margin-top: 10px;
}
.sectionCard .my-card{
  border-radius: 0px;
	background-color:rgb(71, 106, 74)!important;
	box-shadow: none;
  width: 100%;
	height: 100%;
}
.sectionCard .my-card img{
  width:100%;
}
.sectionCard .q-card__section{
  margin-top:10px;
}
.sectionCard .divBtn{
  display:grid;
  margin-top: 3%;
  justify-content: center;
}
.sectionCard #linkImagem{
  display:initial;

}
.sectionCard #linkImagem .q-btn__wrapper{
  padding:0!important;
}
.sectionCard div.divBtn #btnParaCadastro{
      border: 2px solid white;
}
</style>
