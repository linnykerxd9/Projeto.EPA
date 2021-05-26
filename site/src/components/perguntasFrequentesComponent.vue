<template>
   <q-expansion-item
        expand-separator
        icon="chevron_right"
        :label="nome"
        v-if="nome"
        
      >
        <q-card>
          <q-card-section>
            {{descricao}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
</template>

<script>
export default {
   name: 'perguntasFrequentesComponent',
  props:['nome','descricao']
}
</script>
