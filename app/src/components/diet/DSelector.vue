<template>
  <div class="d-selector">
  
      <div id="selector-list">
          <h4> {{ getCurrentType }} </h4>
          <b-form-input id="buscador" type="text" placeholder="Buscador"></b-form-input>
          <div class="element-list">
            <div class='ing-draggable' v-for="(ingredient, i) in getAllIngredients" :key="i"> 
              {{ ingredient.nombre }}
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'd-selector',
  data(){
    return {
      title: 'Hey'
    }
  },
  computed: {
    ...mapGetters(['getCurrentType', 'getAllIngredients'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#selector-list {
  position: relative;
  width: 90%;
  height: 80vh;
  border-radius: 5px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, .5);
  margin: auto;
  margin-top: 5vh;

  #buscador{
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    color: #7a7a7a;
    height: 50px;

    &:focus{
      background-color: #fff;
      border-color: lightgray;
      outline: 0;
      box-shadow: inset 0 0 20px 0px rgb(219, 219, 219);
    }

  }

  h4{
    text-align: center;
    padding: 10px 0;
  }

  .element-list{
    position: relative; 
    width: 100%;
    height: calc(80vh - 105px);
    padding: 10px;
    overflow-y: scroll;
  }

}
</style>
