<template>
  <q-page padding>
    <!-- content --> 
    <div class="contener"><perguntasFrequentesComponent v-for="perguntas in perguntasFrequentes"
    	 												:key="perguntas.nome"
    	 												:nome="perguntas.nome"
    	 												:descricao="perguntas.descricao"


    	></perguntasFrequentesComponent></div>
    </q-page> 
   
</template>

<script>
	import perguntasFrequentesComponent from '../components/perguntasFrequentesComponent.vue'
	const perguntas=[
{
	nome:'O que significa "EPA"?',
	descricao:'EPA é a sigla para "Ensino por Amor"'

},
{
	nome:'Qual o intuito da plataforma?',
	descricao:'A plataforma tem por intuito facilitar o encontro entre estudantes e professores para realização de aulas de reforço.'

},
{
	nome:'Quais são as formas de pagamentos aceitas?',
	descricao:'Boletos, cartões de crédito, débito e transferência bancária.'

},
{
	nome:'Como os peços serão definidos?',
	descricao:'Os professores tem total autonomia para definir os preços de sua hora-aula. Estes poderão ser negociados entre as partes para a execução da aula.'
},
{
	nome:'Onde as aulas acontecerão?',
	descricao:'O Local das aulas será determinado por estudante e professor.'
},
{
	nome:'Tem idade ou escolaridade mínima para ser aluno?',
	descricao:'Não. A nossa plataforma está aberta para usuários de todas idades e grau de escolaridade. Vale ressaltar a necessidade do gerenciamento dos pais para o caso de estudantes menores de 18 anos.'
},
{
	nome:'Sou professor, e gostaria de saber se é preciso pagar alguma taxa para estar cadastrado na plataforma.',
	descricao:'Não. Não existe cobrança para permanência e anúncios de professores em nossa plataforma.'
},
{
	nome:'É necessário diploma para dar aulas particulares?',
	descricao:'Não. Nossa plataforma está aberta para as mais variadas trocas de conhecimentos. Caso tenha expertise em algum conteúdo, será bem vindo. (Recomendamos aos professores exibir portfólios, comprovando seus conhecimentos)'
},

	]
export default {
   name: 'perguntasFrequentes',
 components: {perguntasFrequentesComponent},
 data(){
 	return{
 		perguntasFrequentes:perguntas
 	}
 }
}
</script>
<style>
    .contener{
    	width: 80%;
    	margin-left: 10%;
    	margin-right: 10%;
    }
</style>
