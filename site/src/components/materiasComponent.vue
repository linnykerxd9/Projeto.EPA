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
        <q-separator vertical class="margin10"/>
      <div class="btnExcluir">
        <q-btn color="red" label="Excluir" @click="excluir(idMateria)"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EpaMateriasComponent',
  data () {
    return {}
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
