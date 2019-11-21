<template>
  <div class="ingredient-list">
    <h1 style="text-align: center; margin: 20px;"> Ingredientes </h1>
    <div class="container-fluid">
        <div class="row">
            <b-card v-for="(ingredient, i) in getAllIngredients" :key="i"
            style="max-width: 20rem; padding: 0;"
            class="m-2 col-sm-2 card-ingredient"
            @click="$bvModal.show('modal-ingredient-' + ingredient._id)">
                <b-card-text>
                    <h4 style="text-align: center"> {{ ingredient.nombre }} </h4>
                </b-card-text>
                <b-modal size="lg" hide-footer 
                    :title="ingredient.nombre + ' ~ ' + ingredient.valoracion + '/100'" 
                    :id="'modal-ingredient-' + ingredient._id">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12 main-title"> <b>Macros</b> </div>
                            <div class="col-sm-3 element" v-for="(x, k) in ingredient.macros" :key="k">
                                <b-form-group :label="capitalize(k)">
                                    <b-form-input id="input-12" type="number" :value="x"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 main-title"> <b>Micros</b> </div>
                            <div class="col-sm-12 main-title"> Vitaminas</div>
                            <div class="col-sm-2 element" v-for="(x, k) in ingredient.micros.vitaminas" :key="ingredient._id + k">
                                <b-form-group :label="capitalize(k)">
                                    <b-form-input id="input-12" type="text" :value="x"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-sm-12 main-title"> Minerales </div>
                            <div class="col-sm-2 element" v-for="(x, k) in ingredient.micros.minerales" :key="k">
                                <b-form-group :label="capitalize(k)">
                                    <b-form-input id="input-12" type="number" :value="x" ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                </b-modal>
            </b-card>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ingredient-list',
  data(){
    return {
        
    }
  },
  methods: {
    capitalize(title){
        return title.charAt(0).toUpperCase() + title.substring(1);
    },
    updateIngredient(){

    }
  },
  computed: {
      ...mapGetters(['getAllIngredients'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ingredient-list{
  animation: 1s 0s 1 fade;
}

.main-title{
    text-align: center;
    margin: 10px 0px;
}
</style>
