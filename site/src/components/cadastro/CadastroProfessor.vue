<template>
<section id="sectionCadastroProfessor">
  <div class="EpaBanner">
      <EpaBannerComponent
            titulo="Dar Aula"
            descricao="Faça seu cadastro e começe a dar aulas"
            style="background-image:url('img/pencil-1037609_1920.png'); background-size:100% 100%"
      ></EpaBannerComponent>
    </div>
  <div class="container">
    <div class="titulo">
    <h5> Dados Pessoais</h5>
    </div>

     <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
    <div class="nomeCompleto">
     <q-input
        filled
        name="nome_completo"
        v-model="professor.nome_completo"
        label="Seu nome Completo *"
        hint="Name and surname"
        lazy-rules
        :rules="[
        val => val && val.length > 0 || 'O campo não pode ser nulo',
        val => val && val.length < 75 || 'O nome não pode ter mais do que 75 caracteres']"
      />
      </div>
      <div class="row">
        <div class="tamanho-input margin-input">
           <q-input
        filled
        name="cpf"
        v-model="professor.cpf"
        label="CPF"
        hint="Apenas números"
        lazy-rules
        mask="###.###.###-##"
          unmasked-value
        :rules="[
        val => val && val.length > 0 || 'O campo não pode ser nulo',
        val => val && val.length > 10 || 'O não pode ter menos que 11 dígitos']"
      />
        </div>
      <div class="tamanho-input">
        <q-input
          ref="date"
          filled
          name="dataNascimento"
          v-model="professor.dataNascimento"
          label="Data de nascimento"
          lazy-rules
          :rules="[ val => val !== null && val !== '' || 'Selecione uma data']"
          @click="$refs.qDateProxy.show()"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale" ref="qDateProxy">
                <q-date  v-model="professor.dataNascimento"
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
      <q-select filled  name="sexo" v-model="professor.sexo" :options="options"/>
      </div>
      <div class="titulo">
        <h5>Endereço</h5>
      </div>
            <div class="row">
        <div class="tamanho-input margin-input">
        <q-input
          filled
          name="rua"
          v-model="professor.rua"
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
          v-model="professor.numero"
          label="numero"
         />
        </div>
      </div>
            <div class="row">
        <div class="tamanho-input margin-input">
        <q-input
          filled
          v-model="professor.bairro"
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
          v-model="professor.cidade"
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
          v-model="professor.estado"
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
          v-model="professor.cep"
          label="Cep"
          name="cep"
          hint="Apenas números"
          lazy-rules
          mask="#####-###"
          unmasked-value
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo',
          val => val && val.length > 7 || 'O campo não pode ter menos que 8 dígitos']"
         />
        </div>
      </div>
      <div class="titulo">
        <h5>Contato</h5>
      </div>
      <div class="tamanho-input">
        <q-input
          filled
          v-model="professor.telefone"
          label="Telefone"
          name="telefone"
          hint="Apenas números e com o DDD"
          lazy-rules
          mask="(##)#####-####"
          unmasked-value
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo',
          val => val && val.length > 10 || 'O campo não pode ter menos que 11 digitos']"
         />
        </div>
        <div class="titulo">
          <h5>Login</h5>
        </div>
         <div class="email">
        <q-input
          filled
          v-model="professor.email"
          label="Email"
          name="email"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo']"
         />
        </div>
        <div class="row">
        <div class="tamanho-input margin-input">
      <q-input
          filled
          v-model="professor.senha"
          label="Senha"
          hint="8 caracteres"
          name="senha"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'O campo não pode ser nulo',
          val => val && val.length > 7 || 'A senha precisa ter no minimo 8 caracteres'
          ]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
        </div>
        <div class="tamanho-input">
        <q-input
          filled
          v-model="confirmarSenha"
           :type="confirmePwd ? 'password' : 'text'"
          label="Confirmar Senha"
          error-message="As senhas não são iguais"
          :error="!isValid()"
        >
        <template v-slot:append>
          <q-icon
            :name="confirmePwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="confirmePwd = !confirmePwd"
          />
        </template>
      </q-input>
        </div>
      </div>

      <div class="btnCadastro">
         <q-btn label="Cadastrar" type="submit" color="primary" :loading="enviando"  />
      </div>
     </q-form>
  </div>
</section>
</template>

<script>
import EpaBannerComponent from '../EpaBannerComponent.vue'
import { server } from 'boot/axios'
export default {
   name: 'CadastroprofessorComponent',
   components: {EpaBannerComponent},
  data () {
    return {
      options:["Masculino","Feminino","outros"],
       isPwd: true,
       confirmePwd:true,
       confirmarSenha:null,
       enviando: false,
       professor: {
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
          senha:null
       }
    }
  },
methods:{
  onSubmit() {
    this.enviando=true;
    if(this.confirmarSenha != this.professor.senha){
      this.enviando=false;
      return;
    };
   server.post('professor',this.professor)
      .then((response) => {
        console.log(response);
        if(response.status == 200){
          this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Cadastro concluído com sucesso'
        }),
        this.enviando=false;
        }
      })
      .catch(() => {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Falha ao cadastrar'
        }),
         this.enviando=false;
      })
    },
    isValid () {
      return this.confirmarSenha == this.professor.senha
    }
  },
}
</script>

<style>
.q-page-container{
  padding-top:0!important;
}
#sectionCadastroProfessor .container {
    width:60%;
    margin-left:20%;
    margin-right:20%;
}
#sectionCadastroProfessor .titulo{
  border-bottom:1px solid grey;
}
#sectionCadastroProfessor .titulo h5{
    margin-bottom:0;
    padding-bottom: 12px;
  }
#sectionCadastroProfessor .nomeCompleto,#sectionCadastroProfessor .email{
  width:84%;
  margin-top:43px;
}
#sectionCadastroProfessor .row{
  display:flex;
}
#sectionCadastroProfessor .margin-input{
  margin-right:50px;
}
#sectionCadastroProfessor .tamanho-input{
  width:40%;
}
#sectionCadastroProfessor .btnCadastro{
  display:flex;
  justify-content: center;
  margin-top:5%;
  margin-bottom:5%;
}
</style>
