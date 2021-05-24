<template>
<section>
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
<button @click="login = true">login</button>
    <q-dialog v-model="login">
      <q-card style="width: 800px; max-width: 80vw; height:377px; border-radius:20px; overflow:hidden;">
      <div class="row">
        <div class="bem-vindo">
          <q-card-section>
            <div class="fotoBemVindo">
                <img src="img/fotoLogoLogin.png">
            </div>
            <div class="titulo">
              <h5>Seja bem vindo ao EPA!</h5>
            </div>
          </q-card-section>
        </div>
        <div class="login">
          <q-card-section>
            <h4><strong>LOGIN</strong></h4>
            <div class="divLoginOutros">
              <ul>
                <li>
                  <a href="#">facebook</a>
                </li>
                <li>
                  <a href="#">instagram</a>
                </li>
                <li>
                  <a href="#">google plus</a>
                </li>
              </ul>
            </div>
             <p class="pInformacoes">
                      ou use seu email para logar
            </p>
          </q-card-section>
          <q-card-section class="card-section-Inputs">
            <div class="divInputEmail">
              <q-input square filled v-model="email" label="Email">
              </q-input>
            </div>
            <div class="divInputSenha"> 
          <q-input v-model="senha" filled :type="isPwd ? 'password' : 'text'" label="Senha">
           <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
          </template>
         </q-input>
          <q-card-actions align="center">
            <q-btn :loading="loading" class="btn-entrar" @click="logar" style="width: 150px">
                Entrar
            <template v-slot:loading>
              Carregando...<q-spinner-hourglass class="on-left" />
            </template>
          </q-btn>
          </q-card-actions>
            <p class="pInformacoes">esqueceu sua senha <span><a href="#">clique</a></span></p> 
        </div>
          </q-card-section>
        </div>
        </div>
      </q-card>
    </q-dialog>

</section>
</template>

<script>
	import EpaCardsComponent from '../components/EpaCardsComponent.vue'

export default {
  name: 'PageIndex',
  components: {
  	EpaCardsComponent
  },
  data () {
    return {
    login: false,
    email:null,
    senha:null,
    isPwd:true,
    loading:false,
    }
  },
  methods: {
    logar() {
      this.loading = true
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 3000)
    }
  }
}
</script>
