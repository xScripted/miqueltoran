<template>
  <div class="d-viewer">
    <diet-active v-show="getShows.showDietActive"></diet-active>
    <diet-list v-show="getShows.showDiets"></diet-list>
    <add-diet-form v-show="getShows.addDiet"></add-diet-form>
    <plate-list v-show="getShows.showPlate"></plate-list>
    <add-plate-form v-show="getShows.addPlate"></add-plate-form>
    <ingredient-list v-show="getShows.showIng"></ingredient-list >
    <add-ingredient-form v-show="getShows.addIng"></add-ingredient-form>
  </div>
</template>

<script>

import dietActive from './diet/dietActive.vue';
import dietList from './diet/dietList.vue';
import addDietForm from './diet/addDietForm.vue';
import plateList from './plate/plateList.vue';
import addPlateForm from './plate/addPlateForm.vue';
import addIngredientForm from './ingredient/addIngredientForm.vue'
import ingredientList from './ingredient/ingredientList.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'd-viewer',
  data(){
    return {

    }
  },
  props: ['shows'],
  methods: {
    getAddIng(){
      return false;
    }
  }, 
  computed: {
    ...mapGetters(['getShows'])
  },
  components: {
    addDietForm,
    dietList,
    dietActive,
    plateList,
    addPlateForm,
    ingredientList,
    addIngredientForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.propiedades{
  cursor: pointer;
}

.main-title{
  text-align: center;
  line-height: 3;
  font-size: 20px;
}

.submit{
  width: 150px;
  margin: 10px;
  .loading{
    width: 20px;
    height: 20px;
  }
}

</style>
