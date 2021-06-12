<template>
  <q-layout view="hHh lpR fff" style="min-height: 576px;">
    <div class="bate-papo text-white">
      <div class="container">
        <div class= "absolute-center">
          Chat
        </div>
      </div>
    </div>

    <div class="central container">

      <div class="contatos">
        <q-list separator bordered>
          <q-item
            v-for="user in users"
            :key="user.id"
            clickable
            v-ripple>

          <q-item-section avatar>
            <q-avatar >
              <img :src="user.foto" />
            </q-avatar>
          </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge
            :color="user.online ? 'light-blue-5' : 'grey-5'">
            {{user.online ? 'online' : 'offline'}}
        </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
      </div>



      <div class="Chat">
        <div style="width: 100%">
          <div class="flex column">
            <div class="chatAtual">
               <q-list separator bordered style="display: flex; justify-content: space-between;">
          <q-item clickable v-ripple @click="mostrarMateria('PRO-002')" style="  width: 70%;">
          <q-item-section avatar>
            <q-avatar >
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
          </q-item-section>
        <q-item-section>
          <q-item-label> Pocahontas</q-item-label>
        </q-item-section>
      </q-item>
        <q-item-section side>
              <q-btn color="primary" label="Iniciar Aula" @click="chamarAula()"/>
        </q-item-section>
    </q-list>
            </div>
           <div class="tamanho-chat">
                 <div class="q-pa-md column col justify-end">
              <q-chat-message
                v-for="message in messages"
                :key="message.text"
                :name="message.from"
                :avatar="message.foto"
                :text="[message.text]"
                :stamp="message.tempo"
                :sent="message.from == 'eu'? true : false"
                bg-color="amber-7"
              />
               <q-chat-message
                  :sent="true"
                  bg-color="amber-7"
                  v-if="newMessage != null && newMessage.length > 0"
                >
                  <q-spinner-dots size="2rem" />
               </q-chat-message>
            </div>
            </div>
            <div class="footer">
              <q-form
                @submit="sendMessage"
                class="full-width">
                <q-input
                  v-model="newMessage"
                  bg-color="white"
                  outlined
                  rounded
                  label="Message" >

                  <template v-slot:before>
                    <q-avatar>
                      <img src="img/foto-perfil.jpg">
                    </q-avatar>
                  </template>

                  <template v-slot:after>
                    <q-btn
                      round
                      dense
                      flat
                      type="submit"
                      @click="sendMessage()"
                      color="white"
                      icon="send" />
                  </template>
                </q-input>
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </div>

     <q-dialog v-model="mostrarPerfil">
      <q-card class="my-card" style="border-radius:11px;">
       <img :src="perfil.foto" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis" style="margin-top:10px;">
               {{perfil.nome_completo}}
            </div>
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-subtitle1" >
              Sexo: {{perfil.sexo}}
          </div>
          <div class="SobreVoce" v-if="perfil.sobre != null">
              <h5>Sobre mim</h5>
            <q-input
            v-model="perfil.sobre"
            filled
            readonly
            autogrow
             />
          </div>
        </q-card-section>
        <q-card-section v-if="materias.length != 0"  style="margin-top:10px;">
          <h5>Minhas Materias:</h5>
                  <q-separator />
          <EpaMateriasComponent v-for="materia in materias"
                                :key="materia.id"
                                :nome="materia.Materium.nome"
                                :serie="materia.Materium.serie"
                                :valor="materia.Materium.valorMateria"
                                :tipo="materia.Materium.escolaridade"
          ></EpaMateriasComponent>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Chat" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="iniciarAula">
        <q-card class="my-card" style="border-radius:11px;">
        <q-card-section v-if="materias.length != 0"  style="margin-top:10px;">
          <h5>Clique na matéria para iniciar à aula</h5>
          <q-separator style="margin:10px 0;"/>
           <q-btn @click="iniciou = true">
          <EpaMateriasComponent v-for="materia in materias"
                                :key="materia.id"
                                :nome="materia.Materium.nome"
                                :serie="materia.Materium.serie"
                                :valor="materia.Materium.valorMateria"
                                :tipo="materia.Materium.escolaridade"
          ></EpaMateriasComponent>
           </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

     <q-dialog v-model="iniciou">
          <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Aula iniciada</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Ok" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
     </q-dialog>
  </q-layout>
</template>

<script>
import EpaMateriasComponent from '../components/materiasComponent.vue'
import { server } from 'boot/axios'
  export default{
    name: 'EpaChatPage',
    components:{EpaMateriasComponent},
    data() {
      return {
        mostrarPerfil:false,
        iniciarAula:false,
        iniciou:false,
        newMessage: null,
        perfil: {
          nome_completo:null,
              sobre:null,
              foto:null
        },
        stars:4,
        materias: [],
        usuario:null,
        messages: [
          {
            text:'Oi Prof Pocahontas, bom dia!',
            from: 'eu',
            foto:'img/foto-perfil.jpg',
            tempo:"15 minutos"
          },
          {
            text:`Bom dia, como posso ajuda-lo?`,
            from:'Pocahontas',
            foto:'https://cdn.quasar.dev/img/avatar3.jpg',
            tempo:"9 minutos"
          },
          {
            text:'Gostaria de saber sua disponibilidade para às 15h.',
            from:'eu',
            foto:'img/foto-perfil.jpg',
            tempo:"7 minutos"
          }
        ],

        users: [ {
          id: 1,
          name: 'Pocahontas',
          online: true,
          foto:"https://cdn.quasar.dev/img/avatar3.jpg"
          }, {
          id: 2,
          name: 'Chica',
          online: false,
           foto:'img/foto-perfil.jpg'
          }, {
          id: 3,
          name: 'Princesa',
          online: true,
           foto:'img/foto-perfil.jpg'
          } ]
      }
    },
    methods: {
      sendMessage() {
       if (this.newMessage != null && this.newMessage != '') {
           this.messages.push({
          text: this.newMessage,
          from: 'eu',
          foto:'img/foto-perfil.jpg',
          tempo:"1 minuto"
        })
       }
        this.newMessage=null;
      },
      async mostrarMateria(idProfessor) {
          await server.get(`materiaProf/${idProfessor}`)
          .then(materia => { this.materias = materia.data });
          this.mostrarPerfil = !this.mostrarPerfil;
      },
      chamarAula(){
      server.get(`materiaProf/PRO-002`)
          .then(materia => { this.materias = materia.data });
        this.iniciarAula = true;
      },
    },
    beforeMount() {
        const id = this.$route.params.id.split('-');
        if(id[0] == 'ALU' ){
            this.perfil = {
              nome_completo:"Pocahontas",
              sexo:"feminino",
              sobre:"Me chamo pocahontas",
              foto:"https://cdn.quasar.dev/img/avatar3.jpg"
            }
        }else {
          this.perfil = {
              nome_completo:"Jonas",
              sobre:"Me chamo Jonas",
              sexo:"Masculino",
              foto:"img/foto-perfil.jpg"
        }
      }
    },
  }


</script>

<style>
.footer, .bate-papo{
  width: 100%;
  background: #6bb1bb;
}

.bate-papo{
  padding: 25px;
}
.tamanho-chat{
  overflow: overlay;
  max-height: 657px;
  height: 384px;
  display: flex;
  flex-direction: column;
}

.absolute-center{
  font-size: 40px;

}

.chatContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.central{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.Chat{
  width: 500px;
  border:1px solid #e0e0e0 ;
}

.q-item__section--main ~ .q-item__section--side{
  padding-left: 50px;
}

.q-field__after, .q-field__append, .q-field__before {
  padding-right: 12px;
  padding-left: 10px;
}

</style>
