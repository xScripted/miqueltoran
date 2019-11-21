<template>
  <div class="d-menu">
      <h5 v-b-toggle.menu-diet-collapse> Mis dietas <v-icon name="angle-down"/> </h5>
      <b-collapse id="menu-diet-collapse" class="menu-title mt-2">
        <div @click="changeShow('showDietActive')">Dieta Activa</div>
        <div @click="changeShow('showDiets')">Todas las dietas</div>
        <div @click="changeShow('addDiet')">Crear dieta</div>
      </b-collapse>
      <h5 v-b-toggle.menu-plate-collapse> Platos <v-icon name="angle-down"/></h5>
      <b-collapse id="menu-plate-collapse" class="menu-title mt-2">
        <div @click="changeShow('showPlate')">Todos los platos</div>
        <div @click="changeShow('addPlate')">Crear plato</div>
      </b-collapse>
      <h5 v-b-toggle.menu-ingredient-collapse> Ingredientes <v-icon name="angle-down"/></h5>
      <b-collapse id="menu-ingredient-collapse" class="menu-title mt-2">
        <div @click="changeShow('showIng')">Todos los ingredientes</div>
        <div @click="changeShow('addIng')">Crear ingrediente</div>
      </b-collapse>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'd-menu',
  methods: {
    ...mapMutations(['changeShow'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .d-menu{
    height: 100vh;
    border-right: 1px solid #d3d3d3;
  }
  .menu-title{
    div{
      transition: .3s;
      padding: 10px;
      font-size: 18px;
      cursor: pointer;
      &:hover{
        color: lightblue;
      }
    }
  }
</style>
