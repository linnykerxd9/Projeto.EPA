<template>
  <section id="sectionMateriaComponent">
    <div class="materiaContainer">
        <div class="materiaTitulo">
            <h5>Materia: {{ nome }}</h5>
        </div>
        <div class="materiaContent">
          <div class="materiaEscolaridade">
              <span>Escolaridade: {{ tipo }}</span>
          </div>
          <div class="materiaValor">
            <span>Preço: R${{ valor }}</span>
          </div>
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
  props: ['nome','tipo','valor']
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#sectionMateriaComponent{
    margin-bottom: 6px;
}
#sectionMateriaComponent .materiaContainer{
  width: 100%;
  background-color: #f9f9f9;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
#sectionMateriaComponent .materiaEscolaridade{}
#sectionMateriaComponent .materiaValor{
  margin-top: 10px;
}
</style>
