<template>
  <q-layout view="hHh lpR fff">
    <div class="bate-papo text-white">
        <div class="container">
          <q-btn 
            v-if="$route.fullPath.includes('/chat')"
            icon="arrow_back" 
            flat 
            dense 
            label="Voltar" 
            v-go-back.single />

          <div class= "absolute-center">
            Bate-papo
          </div>
        </div>
      </div>

      <div class="container chatContainer">
      <div style="width: 100%; max-width: 500px">
      <q-page class="flex column">
        <div class="q-pa-md column col justify-end">
          <q-chat-message
            v-for="message in messages"
            :key="message.text"
            :name="message.from"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[message.text]"
            stamp="7 minutes ago"
            :sent="message.from == 'me'? true : false"
            bg-color="amber-7"
          />
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
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg">
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
  </q-layout>
</template>

<script>
  export default{
    data() {
      return {
        newMessage: null,
        messages: [
          {
            text:'Hey Jim, how are you?',
            from: 'me'
          },
          {
            text:'Good thanks, Danny! How are you?',
            from:'them'
          },
          {
            text:'Pretty good!',
            from:'me'
          }
        ]
      }
    },
    methods: {
      sendMessage() {
        console.log(this.newMessage);
        this.messages.push({
          text: this.newMessage,
          from: 'me'
        })
      }
    }
  }


</script>

<style>
  .footer, .bate-papo{
  width: 100%;
  background: #6bb1bb;
}
.chatContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>