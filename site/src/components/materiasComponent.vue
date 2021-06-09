<template>
  <section id="sectionMateriaComponent">
    <div class="cardMateriaContainer">
        <div class="materiaContainer">
        <div class="materiaTitulo">
            <h5>Materia: {{ nome }}</h5>
        </div>
        <div class="materiaContent">
          <div class="materiaEscolaridade">
             <p style="margin-right: 47px;" class="cardSubTitle">Escolaridade:<span>{{ tipo }}</span></p>
              <p class="cardSubTitle">Série: <span>{{serie}}</span></p>
          </div>
          <div class="materiaValor">
           <p class="cardSubTitle">Preço: <span>R$ {{ valor }}</span></p>
          </div>
        </div>
    </div>
        <q-separator vertical class="margin10" v-if="$route.fullPath.includes('/minhas-materias')"/>
      <div class="btnExcluir" v-if="$route.fullPath.includes('/minhas-materias')">
        <q-btn color="red" label="Excluir" @click="modalExcluir = true"/>
      </div>
    </div>
    <q-dialog v-model="modalExcluir" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Tem certeza que deseja excluir essa matéria?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Excluir" color="red" @click="excluir(idMateria)" v-close-popup />
          <q-btn label="Cancelar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
export default {
  name: 'EpaMateriasComponent',
  data () {
    return {
      modalExcluir: false,
    }
  },
  props: ['nome','tipo','valor','serie','idMateria'],
  methods: {
    excluir(id){
      console.log(id);
    }
  },
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#sectionMateriaComponent{
    margin-bottom: 17px;
    width:100%;
}
#sectionMateriaComponent .cardMateriaContainer{
  width: 100%;
  background-color: #f9f9f9;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
  border-radius: 11px;
}
#sectionMateriaComponent .materiaTitulo{
  margin-bottom:5px;
  letter-spacing: 1px;
}
#sectionMateriaComponent .materiaContent{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#sectionMateriaComponent .materiaEscolaridade{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top:0.625rem;
}
#sectionMateriaComponent .cardSubTitle{
  font-size:18px;
}
#sectionMateriaComponent .materiaValor{
  margin-top: 0.625rem;
  display: flex;
}
#sectionMateriaComponent .margin10{
  margin:0 0.625rem;
}
</style>
