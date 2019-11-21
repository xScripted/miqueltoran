<template>
  <div class="i-menu">
    <div>Idioma Activo</div>
    <b-form-select :options="options" size="sm" class="mt-3"></b-form-select>

    <div>Añadir palabra</div>
    <div>Ver lista</div>
    <div>Juego 1</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'i-menu',
  data() {
    return {
      options: {
        'jp' : 'Japonés',
        'eng': 'Inglés',
        'fr' : 'Francés'
      }
    }
  },
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
