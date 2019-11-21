<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-12 add-diet-form">
            <b-form name="new-ingredient" @reset="onReset" v-if="show" novalidate>
                <h1 style="text-align: center; margin: 20px;"> Crea una nueva dieta! </h1>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3 offset-sm-2">
                            <b-form-group label="Nombre">
                                <b-form-input v-model="formData.nombre" type="text" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-1 element" v-for="(v, i) in formData.macros" :key="i">
                          <b-form-group :label="capitalize(i)">
                            <b-form-input id="input-1" v-model="formData.macros[i]" type="number"></b-form-input>
                          </b-form-group>
                        </div>
                        <div class="col-sm-8 offset-sm-2">
                            <b-form-textarea
                                id="textarea"
                                v-model="formData.descripcion"
                                placeholder="Descripción"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </div>
                    </div>
                </div>
            </b-form>
            <div class="col-sm-8 offset-sm-2 mt-4">
              <button @click="onSubmit" class="btn btn-info submit mr-2" > Guardar 
                <b-spinner v-if="sending" class="loading" type="grow" ></b-spinner> 
                <v-icon v-if="success" name="check"/>
              </button>
              <button type="reset" class="btn btn-danger"> Reset </button>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
import DSelector from '../DSelector.vue';

export default {
  name: 'add-diet-form',
  data(){
    return {
      show: true,
      sending: false,
      success: false,
      formData: {
        nombre: '',
        descripcion: '',
        macros: {
          proteinas: null,
          carbohidratos: null,
          grasas: null,
          fibra: null,
          calorias: null
        }
      }
    }
  },
  methods: {
    ...mapActions(['loadDiets']),
    onSubmit(){
      this.sending = true;
      var _ = this;
      axios.post('http://127.0.0.1:9000/dieta', this.formData)
      .then(function () {
        _.sending = false;
        _.success = true; 
        _.loadDiets();
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    capitalize(title){
        return title.charAt(0).toUpperCase() + title.substring(1);
    },
    onReset(){

		}
  },
  components:{
    DSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
