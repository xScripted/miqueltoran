<template>
  <div class="d-viewer">
    <add-plate-form v-show="getShows.addPlate"></add-plate-form>
    <ingredient-list v-show="getShows.showIng"></ingredient-list >
    <add-ingredient-form v-show="getShows.addIng"></add-ingredient-form>
  </div>
</template>

<script>

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
    addIngredientForm,
    ingredientList,
    addPlateForm,
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
