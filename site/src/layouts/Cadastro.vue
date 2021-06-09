
<template>
  <q-layout view="hhh lpR fff">
<section id="sectionCadastroLayout">
<header  class="header text-white">
      <q-toolbar class="container">
        <q-toolbar-title>
          <a href="/">
            <img src="img/sapoha.png" alt="EPA" class="imagem grid-4" />
          </a>
        </q-toolbar-title>
        <div class="header_menu grid-12">
          <ul>
            <li><span class="dot subtitulo"></span><a href="#"  @click="modalLogin = true">Login</a></li>
          </ul>
        </div>
      </q-toolbar>
    </header>
    <q-page-container>
      <router-view />
    </q-page-container>
  <q-footer class=" text-white">
      <div class="footer">
        <div class="container">
          <div class="row">
            <!-- links -->
            <div class="col">
              <!-- perguntas frequentes -->
              <div class="row">
                <div class="img-icones-footer">
                  <img
                    src="img/duvida-de-cabeca.png"
                    alt="cabeça de menino com uma interrogação"
                  />
                </div>
                <div class="link-footer">
                  <a href="#">
                    <p class="linha">Perguntas frequentes</p>
                  </a>
                </div>
              </div>
              <!-- parceiro -->
              <div class="row">
                 <div class="img-palmas">
                  <img
                    src="img/parceiros-batendo-palmas.png"
                    alt="bater palmas"
                  />
                </div>
                <div class="parceiros">
                  <a href="#">
                    <p class="linha">Seja nosso parceiro</p>
                  </a>
                </div>
              </div>
            </div>
            <!-- email -->
            <div class="col-6 email">
              <h3>Estude ou dê aulas perto de casa, receba novidades no seu email:</h3>
              <div><input type="digite seu email aqui"></div>
            </div>
            <!-- redes sociais -->
            <div class="col">
              <h5>rede sociais</h5>
              <div class="alinhar">
                <ul>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.intagram.png" alt="instagram" width="50px"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.facebook.png" alt="face" width="50px"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.twitter.png" alt="twitter" width="50px"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
 </q-footer>
      <q-dialog v-model="modalLogin">
      <q-card style="width: 800px; max-width: 80vw; height:400px; border-radius:20px; overflow:hidden;">
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
                <q-input square
                         filled
                         v-model="email"
                         label="Email"
                         :rules="[val => !!val || 'Campo obrigatório']">
              </q-input>
            </div>
            <div class="divInputSenha">
                 <q-input v-model="senha"
                          filled
                          :type="isPwd ? 'password' : 'text'"
                          label="Senha"
                          :rules="[val => !!val || 'Campo obrigatório']">
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
            <p class="pInformacoes">esqueceu sua senha <span> <a href="#"> clique</a></span></p>
        </div>
          </q-card-section>
        </div>
        </div>
      </q-card>
    </q-dialog>
  </section>
  </q-layout>
</template>


<script>
import { server } from 'boot/axios'
export default {
  name: "CadastroLayout",
  data() {
    return {
      modalLogin: false,
      email:null,
      senha:null,
      isPwd:true,
      loading:false,
      usuario:null,
    };
  },
   methods: {
    logar() {
      //colocando o loading do botão para true para começar a animação
      this.loading = true
      //fazendo a primeira validação na tabela de aluno
      server.get(`aluno/${this.email}/${this.senha}`)
      .then(aluno => {
        this.usuario = aluno.data[0]
      })
      .catch(err => console.log(err))
      //fazendo uma validação depois de 2 seg na tabela de professor
      setTimeout(() => {
        //fazendo a validação para ver se o usuario é undefined
        if(this.usuario == undefined){
        server.get(`professor/${this.email}/${this.senha}`)
      .then(professor => {
        this.usuario = professor.data[0];
      })
        }
      },2000)
      //fazendo a validação final depois de 3 seg para saber se foi encontrado um usuario ou n
      setTimeout(() => {
        this.loading = false;
      if(this.usuario != undefined){
         this.$router.push({path:`/user=${this.usuario.id}/mapa`})
      }else{
        //mostrando mensagem de erro caso não encontre o usuario
         this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Login ou senha incorretos'
        })
      }
      },3000)
    }
  }
};
</script>

<style>
#sectionCadastroLayout .header {
  width: 100%;
  background: #6bb1bb;
  padding: 5px 25px;
}

#sectionCadastroLayout .header_menu {
  text-align: right;
}

#sectionCadastroLayout .header_menu ul li {
  display: inline-block;
  margin-left: 25px;
  list-style-type: disc;
}

#sectionCadastroLayout .header_menu ul li a {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 0;
}

#sectionCadastroLayout .header_menu ul li a:hover {
  color: #fff;
}

#sectionCadastroLayout .container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

#sectionCadastroLayout .dot {
  height: 8px;
  width: 8px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
  padding-right: 8px;
  margin-right: 15px;
}

#sectionCadastroLayout .imagem {
  margin-top: 15px;
  width: 151px;
  margin-bottom: 10px;
}

#sectionCadastroLayout .subtitulo:after {
  content: "";
  display: block;
  width: 45px;
  height: 2px;
  background: #000;
  margin: 14px 0 0px 30px;
}

#sectionCadastroLayout .subtitulo:hover {
  background: #fff;
}

#sectionCadastroLayout .link-footer {
  margin-left: 4%;
  margin-top: 7%;
}
#sectionCadastroLayout .link-footer p {
  color: #000;
  font-size: 12px;

}

 #sectionCadastroLayout .linha::after {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  background: #000;
  margin-left: 3px;
}

 #sectionCadastroLayout .img-icones-footer {
  margin-top: 5%;
}

 #sectionCadastroLayout .alinhar ul li {
  display: inline-block;
  margin-right: 20px;
}

 #sectionCadastroLayout .footer {
  width: 100%;
  background-color: #6bb1bb;
  color: #000;
  padding:15px 0;
}

 #sectionCadastroLayout .parceiros p {
   color: #000;
  font-size: 12px;

}

 #sectionCadastroLayout .parceiros{
  margin-left: 4%;
  margin-top: 2%;
}

 #sectionCadastroLayout .img-palmas {
  margin-top: 2%;
}

 #sectionCadastroLayout .email h3 {
   color: #000;
  font-size: 12px;
}
</style>
