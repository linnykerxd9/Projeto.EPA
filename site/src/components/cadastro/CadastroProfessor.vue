<template>
  
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      action="http://localhost:3000/materia"
      method="post"
    >
    <q-input filled name="id" v-model="id"/>
      <q-input filled name="nome" v-model="nome"/>
        <q-input filled name="valorMateria"  type="number" v-model="valorMateria"/>
          <q-input filled name="escolaridade" v-model="escolaridade"/>
          <q-btn label="Tipo1" type="submit" color="primary" />
    </q-form>
</template>

<script>
export default {
   name: 'CadastroAlunoComponent',
  data () {
    return {
      id:null,
      nome:null,
      valorMateria:null,
      escolaridade:null,
    }
  },
  methods: {
    onSubmit(atv) {
       this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Cadastro concluído com sucesso'
        })
        console.log(aluno);
        atv.target.submit()
    }
  },
}
</script>
