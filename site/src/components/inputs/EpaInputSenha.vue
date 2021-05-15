<template>
    <q-input
          filled
          v-bind:value="value"
          v-on:input="$emit('senha-input', $event)"
          :label="nome"
          :hint="descricao"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
          :rules="rules">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
</template>

<script>
export default {
   name: 'EpaInputSenha',
  data () {
    return {
       isPwd: true,
    }
  },
  props:['nome','descricao','value','rules']
}
</script>
