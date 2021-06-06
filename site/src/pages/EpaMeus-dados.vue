<template>
<section id="sectionMeusDados">

     <div class="container">
    <div class="titulo">
    <h5>Dados Pessoais</h5>
    </div>

     <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
    <div class="nomeCompleto">
     <q-input
        filled
        name="nome_completo"
        v-model="usuario.nome_completo"
        label="Seu nome Completo *"
        lazy-rules
        :rules="[
        val => val && val.length > 0 || 'O campo não pode ser nulo',]"
      />
      </div>
      <div class="row">
        <div class="tamanho-input margin-input">
           <q-input
        filled
        name="cpf"
        v-model="usuario.cpf"
        label="CPF"
        hint="Apenas números"
        lazy-rules
        mask="###.###.###-##"
          unmasked-value
        :rules="[
        val => val && val.length > 0 || 'O campo não pode ser nulo',]"
      />
        </div>
      <div class="tamanho-input">
        <q-input
          ref="date"
          filled
          name="dataNascimento"
          v-model="usuario.dataNascimento"
          label="Data de nascimento"
          lazy-rules
          :rules="[ val => val !== null && val !== '' || 'Selecione uma data']"
          @click="$refs.qDateProxy.show()"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale" ref="qDateProxy">
                <q-date  v-model="usuario.dataNascimento"
                  mask="DD/MM/YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      </div>
      <div class="tamanho-input">
        <label >Sexo</label>
      <q-select filled  name="sexo" v-model="usuario.sexo" :label="usuario.sexo"
                :rules="[val => val && val.length > 0 || 'O campo não pode ser nulo']"/>
      </div>
      <div class="titulo">
        <h5>Endereço</h5>
      </div>
            <div class="row">
        <div class="tamanho-input margin-input">
        <q-input
          filled
          name="rua"
          v-model="usuario.rua"
          label="Rua"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
        />
        </div>
        <div class="tamanho-input">
        <q-input
          filled
          name="numero"
          v-model="usuario.numero"
          label="numero"
         />
        </div>
      </div>
            <div class="row">
        <div class="tamanho-input margin-input">
        <q-input
          filled
          v-model="usuario.bairro"
          label="Bairro"
          name="bairro"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
        />
        </div>
        <div class="tamanho-input">
        <q-input
          filled
          name="cidade"
          v-model="usuario.cidade"
          label="cidade"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
         />
        </div>
      </div>
            <div class="row">
        <div class="tamanho-input margin-input">
        <q-input
          filled
          v-model="usuario.estado"
          label="Estado"
          name="estado"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
        />
        </div>
        <div class="tamanho-input">
        <q-input
          filled
          v-model="usuario.cep"
          label="Cep"
          name="cep"
          hint="Apenas números"
          lazy-rules
          mask="#####-###"
          unmasked-value
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo',]"
         />
        </div>
      </div>
      <div class="titulo">
        <h5>Contato</h5>
      </div>
      <div class="tamanho-input">
        <q-input
          filled
          v-model="usuario.telefone"
          label="Telefone"
          name="telefone"
          hint="Apenas números e com o DDD"
          lazy-rules
          mask="(##)#####-####"
          unmasked-value
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo',]"
         />
        </div>
        <div class="titulo">
          <h5>Login</h5>
        </div>
         <div class="email">
        <q-input
          filled
          v-model="usuario.email"
          label="Email"
          name="email"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
         />
        </div>                   
          

      <div class="btnCadastro">
         <q-btn label="Atualizar" type="submit" color="primary"  :loading="enviando" />
      </div>
     </q-form>
  </div>
</section>
</template>


<script>
import { server } from 'boot/axios'
export default {
   name: 'EpaMeusDados',
   data(){
   	return {
      enviando:false,
      tipoUsuario: this.$route.params.id.split('-'),
      usuario: {
        id:null,
        nome_completo:null,
        cpf:null,
        dataNascimento: null,
        sexo:null,
        rua:null,
        numero:null,
        bairro:null,
        cidade:null,
        estado:null,
        cep:null,
        telefone:null,
        email:null,
       }
    }
   },
	methods:{
	mostrarUsuario(id){
		if(this.tipoUsuario[0]== 'ALU'){
			server.get(`aluno/${id}`)
			.then(aluno => {
			this.usuario = aluno.data[0];
			})
			.catch(() => {
			this.$q.notify({
	          color: 'red-5',
	          textColor: 'white',
	          icon: 'warning',
	          message: 'Falha ao recuperar seus dados'
	        })
			})
		}
		else if(this.tipoUsuario[0]== 'PRO'){
			server.get(`professor/${id}`)
			.then(professor => {
			 this.usuario = professor.data[0];	
			})
			.catch(() => {
			this.$q.notify({
	          color: 'red-5',
	          textColor: 'white',
	          icon: 'warning',
	          message: 'Falha ao recuperar seus dados'
	        })
		})
		}
	},
	async onSubmit() {
		this.enviando = true;
		if (this.tipoUsuario[0] == 'ALU'){
									console.log(this.usuario);
        await server.put(`aluno/${this.$route.params.id}`,this.usuario)
        .then(() => {
        	 this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Atualização concluída com sucesso'
        }),
		this.enviando = false;
        })
        .catch(() =>{
        	this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao atualizar o cadastro'
        }),
		this.enviando = false;
        })
		}
		else {

		await server.put(`professor/${this.$route.params.id}`,this.usuario)
        .then(() => {
        	 this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Atualização concluída com sucesso'
        }),
        this.enviando = false;
        })
        .catch(() =>{
        	this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao atualizar o cadastro'
        }),
		this.enviando = false;
        })

		} 
	}
	},
  beforeMount() {
  	this.mostrarUsuario(this.$route.params.id);
  }

}
</script>
<style>

#sectionMeusDados .container {
    width:60%;
    margin-left:20%;
    margin-right:20%;
}
#sectionMeusDados .titulo{
  border-bottom:1px solid grey;
  margin-top: 2%;
}
#sectionMeusDados .titulo h5{
    margin-bottom:0;
    padding-bottom: 12px;
  }
#sectionMeusDados .nomeCompleto,.email{
  width:84%;
  margin-top:43px;
}
#sectionMeusDados .row{
  display:flex;
}
#sectionMeusDados .margin-input{
  margin-right:50px;
}
#sectionMeusDados .tamanho-input{
  width:40%;
}
#sectionMeusDados .btnCadastro{
  display:flex;
  justify-content: center;
  margin-top:5%;
  margin-bottom:5%;
}
#sectionMeusDados .nomeCompleto{
margin-top: 4%;
}
</style>