<template>
  <div class="diet-active" v-if="getAllDiets[getDietActive].nombre != 'default'">
    <h1> {{ getAllDiets[getDietActive].nombre }} </h1>
    <div class="diet-body">
      <div class="day-plate" v-for="(dayPlate, k) in getAllDiets[getDietActive].contenido" :key="'dayPlate-' + k">
        <div class="hour-plate" :coord-x="k" :coord-y="k2" v-for="(hourPlate, k2) in dayPlate" :key="'hourPlate-' + k2"  @dragover="dragOver" @drop="drop">
          <div class="item-plate-remove" v-if="hourPlate.nombre">x</div>
          <div class="item-plate" @dragstart="drag" draggable :plate-id="hourPlate._id"> {{ hourPlate.nombre }} </div>
        </div>
      </div>
      <div class="results">
        <div class="result" v-for="(dayPlate, k) in getAllDiets[getDietActive].contenido" :key="'result-' + k">
          <div class="result-title">Proteinas</div><div> {{ results[k].macros.proteinas }}g </div>
          <div class="result-title">Hidratos</div><div> {{ results[k].macros.carbohidratos }}g </div>
          <div class="result-title">Grasas</div><div> {{ results[k].macros.grasas }}g </div>
          <div class="result-title">Calorías</div><div> {{ results[k].macros.calorias }}g </div>
        </div>
      </div>
    </div>
    <d-selector></d-selector> 
  </div>
</template>

<script>

import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'
import DSelector from '../DSelector.vue';

export default {
  name: 'diet-active',
  data(){
    return {
      results: [0]
    }
  },
  methods: {
    dragOver(ev) {
      ev.preventDefault();
    },  
    drop(ev) {
      
      var id = ev.dataTransfer.getData('text');
      var currentPlate = this.getAllPlates.find(x => x._id == id);

      var x = ev.target.getAttribute('coord-x');
      var y = ev.target.getAttribute('coord-y');

      this.getAllDiets[this.getDietActive].contenido[x].splice(y, 1, currentPlate); // this.dietBody[x][y] = ? NO es reactivo

      this.getResults();

      axios.put('http://127.0.0.1:9000/dieta/', this.getAllDiets[this.getDietActive])
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
      });
    },
    drag(ev){
      var idPlate = ev.target.getAttribute('plate-id');
      ev.dataTransfer.setData('text', idPlate);
    },
    getResults(){
      // NECESITA REFACTORING 
      var total = {
        macros: {
          proteinas: 0,
          carbohidratos: 0,
          grasas: 0,
          fibra: 0,
          calorias: 0
        },
        micros: {
          vitaminas:{
            A: 0,
            C: 0,
            D: 0,
            E: 0,
            K: 0,
            B1: 0,
            B2: 0,
            B3: 0,
            B5: 0,
            B6: 0,
            B9: 0,
            B12: 0
          },
          minerales: {
            zinc: 0,
            cobre: 0,
            yodo: 0,
            selenio: 0,
            cromo: 0,
            hierro: 0,
            fluor: 0,
            calcio: 0,
            fosforo: 0,
            magnesio: 0,
            potasio: 0,
          }
        }
      };

      for(var day in this.getAllDiets[this.getDietActive].contenido) {
        for(var plate of this.getAllDiets[this.getDietActive].contenido[day]) {
          if(plate.ingredientes) {
            for(var ing of plate.ingredientes) {

              var ingrediente = this.getAllIngredients.find(x => x._id == ing.id);

              for(var c = 0; c < ing.cantidad; c++) {
                total.macros.proteinas += ingrediente.macros.proteinas; 
                total.macros.carbohidratos += ingrediente.macros.carbohidratos; 
                total.macros.grasas += ingrediente.macros.grasas; 
                total.macros.calorias += ingrediente.macros.calorias;
                console.log('HOLA');
                console.log(ingrediente.macros);
              }

            }
          }
        }

        this.results[day] = total;
        total = {
            macros: {
            proteinas: 0,
            carbohidratos: 0,
            grasas: 0,
            fibra: 0,
            calorias: 0
          },
          micros: {
            vitaminas:{
              A: 0,
              C: 0,
              D: 0,
              E: 0,
              K: 0,
              B1: 0,
              B2: 0,
              B3: 0,
              B5: 0,
              B6: 0,
              B9: 0,
              B12: 0
            },
            minerales: {
              zinc: 0,
              cobre: 0,
              yodo: 0,
              selenio: 0,
              cromo: 0,
              hierro: 0,
              fluor: 0,
              calcio: 0,
              fosforo: 0,
              magnesio: 0,
              potasio: 0,
            }
          }
        }
      }
    }
  }, 
  computed: {
    ...mapGetters(['getAllPlates', 'getAllIngredients', 'getAllDiets', 'getDietActive'])
  },
  components: {
    DSelector
  },
  watch: {
    getDietActive() {
      this.getResults();
    },
    getAllDiets() {
      this.getResults();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.diet-active{
  display: grid;
  grid-template-columns: 3fr 1fr;

  h1 {
    margin: 30px 0;
    grid-column: 1 / 4;
  }

  .diet-body{
    display: grid;
    height: 80vh;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    box-shadow: inset 0 0 0 2px #7e7e7e;

    .day-plate{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);

      .hour-plate{
        border-bottom: 1px solid #7e7e7e;
        border-left: 1px solid #7e7e7e;
        display: grid;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold; 
        position: relative;

        .item-plate-remove{
          cursor: pointer;
          transition: .3s;
          position: absolute;
          top: 0;
          right: 10px;
          color: #c5c5c5;
          &:hover{
            color: #000;
          }
        }

        .item-plate{
          position: relative;

        }
      }



    }
  }

  .results{
    height: 15vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 8;
    padding-top: 2px;

    .result{
      display: grid;
      grid-template-columns: 2fr 1fr;
      box-shadow: inset 0 0 0 1px #7e7e7e;
      padding-top: 10px;

      .result-title{
        font-weight: bold;
      }
    }


  }

  .d-selector{

  }
}


</style>
