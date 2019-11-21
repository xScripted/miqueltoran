<template>
  <div class="d-selector">
  
      <div id="selector-list">
          <h4> {{ getCurrentType }} </h4>
          <b-form-input id="buscador" type="text" v-model="buscador" placeholder="Buscador"></b-form-input>
          <div class="element-list" v-if="getCurrentType == 'Ingredientes'" >
            <div class='item-list ing-draggable' v-show="ingredient.visible" @dragstart="drag" draggable="true" :ing-id="ingredient._id" v-for="(ingredient, i) in getAllIngredients" :key="i"> 
              <div>{{ ingredient.nombre }}</div>
            </div>
          </div>
          <div class="element-list" v-if="getCurrentType == 'Platos'" >
            <div class="item-list ing-draggable" v-show="plate.visible" @dragstart="drag" draggable="true" :ing-id="plate._id" v-for="(plate, i) in getAllPlates" :key="i"> 
              <div>{{ plate.nombre }} </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'd-selector',
  data() {
    return {
      buscador: ''
    }
  },
  methods: {
    drag(ev){
      var idIngredient = ev.target.getAttribute('ing-id');
      ev.dataTransfer.setData("text", idIngredient);
    }
  },
  computed: {
    ...mapGetters(['getCurrentType', 'getAllIngredients', 'getAllPlates']) // llamar plates
  },
  watch: {
    buscador() {

      var items = this.getCurrentType == 'Platos' ?  this.getAllPlates :  this.getAllIngredients;
      var pattern = new RegExp(this.buscador, 'i');

      for(let item of items) {
        if(pattern.test(item.nombre)) {
          item.visible = true;
        } else {
          item.visible = false;
        }
      }
    }
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
  border: 1px solid #ddd;
  margin: auto;
  margin-top: 3vh;

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

  .ing-draggable{
    transition: .3s;
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #ddd;
    cursor: pointer;
    &:hover {
      background: rgb(219, 219, 219);
      padding-left: 15px;
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
