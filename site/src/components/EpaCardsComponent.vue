<template>
  <div class="divCard">
  	 <q-card class="my-card">
       <QBtn type="a" :to="link" id="linkImagem"><img :src="imagem"></QBtn>
      <q-card-section class="q-pt-none">
        {{ descricao }}
      <div class="divBtn" v-show="link">
         <q-btn  :label="nomeBtn" :to="link" style="background-color:rgb(95 134 98);"/>
      </div>
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
.divCard{
	margin-left: 50px;
	width: 311px;
	margin-right: 50px;
  color:white;
  border: 2px solid rgb(71, 106, 74);
}
.my-card{
  border-radius: 0px;
	background-color:rgb(71, 106, 74)!important;
	box-shadow: none;
  width: 100%;
	height: 100%;
}
.my-card img{
  width:100%;
}
.q-card__section{
  margin-top:10px;
}
.divBtn{
  display:grid;
  margin-top: 3%;
  justify-content: center;
}
#linkImagem{
  display:initial;
}
</style>
