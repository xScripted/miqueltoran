<template>
  <div class="diet-list">
    <h1 style="text-align: center; margin: 20px;"> Tus dietas </h1>
    <div class="container-fluid">
        <div class="row">
            <b-card v-for="(diet, i) in getAllDiets" :key="i" @click="activar(i)"
            style="max-width: 20rem; padding: 0;"
            class="m-2 col-sm-2 card-ingredient" :class="{active: getAllDiets[getDietActive]._id == diet._id }">
              <b-card-text>
                <h4 style="text-align: center"> {{ diet.nombre }} </h4>
              </b-card-text>
            </b-card>
        </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { mapActions, mapMutations, mapGetters } from 'vuex'
import DSelector from '../DSelector.vue';

export default {
  name: 'diet-list',
  data(){
    return {

    }
  },
  methods: {
    ...mapActions(['loadDiets']),
    ...mapMutations(['setDietActive']),
    activar(i) {
      this.setDietActive(i);
    }
  }, 
  computed: {
    ...mapGetters(['getAllDiets', 'getDietActive'])
  },
  components: {

  },
  created() {
    this.loadDiets();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-ingredient {
  cursor: pointer;
}

.active{  
  box-shadow:inset  0 0 10px 0px rgb(202, 202, 0);
}

</style>
