<template>
  <div>

   <q-input
        filled
        v-bind:value="value"
      v-on:input="$emit('input', $event)"
        :label="nome"
        :hint="descricao"
        lazy-rules
        :rules="rules"
        :mask="mask"
      />
  </div>
</template>

<script>
export default {
   name: 'EpaInputText',
    props:[
      'value',
      'nome',
      'descricao',
      'rules',
      'mask'
    ]
}
</script>
