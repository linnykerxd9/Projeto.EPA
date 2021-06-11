<template>
  <q-layout view="hHh lpR fff">
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
          <q-page class="flex column">
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
          </q-page>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  const usuario= this.$q.sessionStorage.getItem("usuario")
  export default{
    data() {
      return {
        newMessage: null,
        usuario: usuario.nome_completo.split(' '),
        messages: [
          {
            text:'Oi Prof Pocahontas, bom dia!',
            from: 'eu',
            foto:'img/foto-perfil.jpg',
            tempo:"15 minutos"
          },
          {
            text:`Bom dia ${usuario.nome[0]}, como posso ajuda-lo?`,
            from:'ele(a)',
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
        console.log(this.newMessage != null)
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
    }
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
  height: 572px;
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