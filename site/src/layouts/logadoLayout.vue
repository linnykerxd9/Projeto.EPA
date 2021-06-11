<template>
  <q-layout view="hHh lpR fff">
    <section id="sectionlayoutLogado">
    <q-header elevated class="text-white navbar">
      <q-toolbar style="padding:0.4375rem 0;">
        <div class="container">
          <div class="menuNavContainer">
            <a href="/"><q-img src="img/sapoha.png" width="7.5rem"/></a>
            <div class="menuNavContent">
              <q-avatar>
               <img src="img/foto-perfil.jpg">
              </q-avatar>
              <div class="menuNavBtnAccount">
                <q-btn class="btnAccount" flat :label="usuario">
                  <q-menu>
                    <div class="row no-wrap q-pa-md">
                      <div class="column">
                        <div class="text-h6 q-mb-md">Menu</div>
                         <q-list>
                            <q-item clickable v-ripple v-for="menu in menus" :key="menu.nome" :to="menu.link">
                              <q-item-section avatar>
                                <q-icon :name="menu.icone" />
                              </q-item-section>
                              <q-item-section>
                                 {{ menu.nome }}
                              </q-item-section>
                            </q-item>
                          </q-list>
                      </div>

                      <q-separator vertical inset class="q-mx-lg" />

                      <div class="column items-center" style="margin:0 10px;">
                        <q-avatar size="72px">
                          <img src="img/foto-perfil.jpg">
                        </q-avatar>

                        <div class="text-subtitle1 q-mt-md q-mb-xs">{{ usuario }}</div>

                        <q-btn
                          color="primary"
                          label="Sair"
                          push
                          to="/"
                          size="11px"
                          style="letter-spacing: 1px;"
                          v-close-popup
                        />
                        </div>
                      </div>
                  </q-menu>
                  <q-btn dense flat icon="keyboard_arrow_down" />
                </q-btn>
              </div>
            </div>
          </div>
          </div>
      </q-toolbar>
    </q-header>

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
</section>
  </q-layout>
</template>

<script>
import {server} from 'boot/axios'
import {  SessionStorage } from 'quasar'
const menu = [
   {
     menu:"todos",
    icone:"language",
    link:"mapa",
    nome:"Mapa"
  },
  {
    menu:"todos",
    icone:"perm_identity",
    link:"#",
    nome:"Perfil"
  },
  {
    menu:"todos",
    icone:"manage_accounts",
    link:"meus-dados",
    nome:"Meus dados"
  },
  {
    menu:"todos",
    icone:"event",
    link:"agenda",
    nome:"Agenda"
  },
  {
    menu:"todos",
    icone:"question_answer",
    link:"chat",
    nome:"Chat"
  },
  {
    menu:"professor",
    icone:"room",
    link:"localizacoes",
    nome:"Localizações"
  },
  {
    menu:"professor",
    icone:"book",
    link:"minhas-materias",
    nome:"Matérias"
  },
]
export default {
  data () {
    return {
       id: this.$route.params.id,
       menus: null,
       usuario:null,
    }
  },
  methods: {
    async validacao(id) {
      var validacaoProf;
      var validacaoAlu;
      await server.get(`aluno/${id}`)
      .then(aluno => {
        if(aluno.data[0]  == undefined || id != aluno.data[0].id){
          validacaoAlu = false;
        }else {
           validacaoAlu = true;
          const nome = aluno.data[0].nome_completo.split(' ');
          this.usuario = `${nome[0]} ${nome[1]}`;
          this.menus = menu.filter(menu => menu.menu == "todos")
        }
      })
      await server.get(`professor/${id}`)
      .then(professor => {
        if(professor.data[0]  == undefined || id != professor.data[0].id){
           validacaoProf = false;
        }else {
           validacaoProf = true;
           const nome = professor.data[0].nome_completo.split(' ');
           this.usuario = `${nome[0]} ${nome[1]}`;
           this.menus = menu;
        }
      })
      if(validacaoProf == false && validacaoAlu == false){
        alert("Não autenticado");
        this.$router.push({path:'/'})
      }
    },
  },
  beforeMount(){
    this.validacao(this.id);
  },
}
</script>

<style >
a{
  text-decoration: none;
}
#sectionlayoutLogado .navbar{
  background: #6bb1bb;
}
#sectionlayoutLogado .container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
 #sectionlayoutLogado .menuNavContainer{
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 }
 #sectionlayoutLogado .menuNavContent{
    display: flex;
    flex-direction: row;
    justify-content: revert;
    align-items: center;
 }
 #sectionlayoutLogado .menuNavBtnAccount .btnAccount{
   background-color: transparent;
    border-radius: 0;
 }
#sectionlayoutLogado .link-footer {
  margin-left: 4%;
  margin-top: 7%;
}
#sectionlayoutLogado .link-footer p {
  color: #000;
  font-size: 12px;

}

 #sectionlayoutLogado .linha::after {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  background: #000;
  margin-left: 3px;
}

 #sectionlayoutLogado .img-icones-footer {
  margin-top: 5%;
}

 #sectionlayoutLogado .alinhar ul li {
  display: inline-block;
  margin-right: 20px;
}

 #sectionlayoutLogado .footer {
  width: 100%;
  background-color: #6bb1bb;
  color: #000;
  padding:15px 0;
}

 #sectionlayoutLogado .parceiros p {
   color: #000;
  font-size: 12px;

}

 #sectionlayoutLogado .parceiros{
  margin-left: 4%;
  margin-top: 2%;
}

 #sectionlayoutLogado .img-palmas {
  margin-top: 2%;
}

 #sectionlayoutLogado .email h3 {
   color: #000;
  font-size: 12px;
}
</style>
