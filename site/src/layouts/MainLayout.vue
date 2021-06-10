
<template>
  <q-layout view="hHh lpR fff">
    <q-header class="header text-white">
      <q-toolbar class="container">
        <q-toolbar-title>
          <a href="/">
            <img src="img/sapoha.png" alt="EPA" class="imagem grid-4" />
          </a>
        </q-toolbar-title>
        <div class="header_menu grid-12">
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><span class="dot"></span><a href="#">Como Começar</a></li>
            <li><span class="dot"></span><a href="#">Contato</a></li>
            <li><span class="dot subtitulo"></span><a href="#">Login</a></li>
          </ul>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <div class="footer">
        <!-- <q-toolbar> </q-toolbar> -->

        <!-- <div class="container">
          <div class="grid-8 parceiro">
            <div class="row">
              <div class="img-icones-footer">
                <img
                  src="img/duvida-de-cabeca.png"
                  alt="cabeça de menino com uma interrogação"
                />
              </div>
              <div class="link-footer">
                <h3>Perguntas frequentes</h3>
              </div>
            </div>
          </div>
        </div> -->

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
            <div>
              <h3>Estude ou dê aulas perto de casa, receba novidades no seu email:</h3>
              <div><input type="digite seu email aqui"></div>
            </div>
            <!-- redes sociais -->
            <div class="col">
              <h3>rede sociais</h3>
              <div class="alinhar">
                <ul>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.intagram.png" alt="instagram"
                    /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.facebook.png" alt="face"
                    /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><img src="img/fig.twitter.png" alt="twitter"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>

<style>

.header {
  width: 100%;
  background: #6bb1bb;
  top: 0;
  position: fixed;
  padding: 5px 25px;
}

.header_menu {
  text-align: right;
}

.header_menu ul li {
  display: inline-block;
  margin-left: 25px;
  list-style-type: disc;
}

.header_menu ul li a {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 0;
}

.header_menu ul li a:hover {
  color: #fff;
}

.container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.dot {
  height: 8px;
  width: 8px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
  padding-right: 8px;
  margin-right: 15px;
}

.imagem {
  margin-top: 15px;
  width: 151px;
  margin-bottom: 10px;
}

.subtitulo:after {
  content: "";
  display: block;
  width: 45px;
  height: 2px;
  background: #000;
  margin: 14px 0 0px 30px;
}

.subtitulo:hover::after{
  background-color: #fff;
}
.link-footer {
  margin-left: 4%;
  margin-top: 7%;
}

.link-footer p {
  color: #000;
  font-size: 12px;

}

.linha::after {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  background: #000;
  margin-left: 3px;
}

.img-icones-footer {
  margin-top: 5%;
}

.alinhar ul li {
  display: inline-block;
  margin-right: 20px;
}

.footer {
  width: 100%;
  background: #6bb1bb;
  color: #000;
}

.parceiros p {
   color: #000;
  font-size: 12px;
  
}

.parceiros{
  margin-left: 4%;
  margin-top: 2%;
}

.img-palmas {
  margin-top: 2%;
}

.email h3 {
   color: #000;
  font-size: 12px;
}
</style>


