<template>
  <div class="add-ingredient-form">
    <b-form name="new-ingredient" v-if="show" novalidate>
      <h1 style="text-align: center; margin: 20px;"> Añadir nuevo ingrediente </h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <b-form-group label="Nombre">
              <b-form-input id="input-1" v-model="formData.nombre" type="text" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-1">
            <b-form-group label="Cantidad" description="En gramos">
              <b-form-input id="input-1" v-model="formData.cantidad" type="text" required value="100"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-1">
            <b-form-group label="Valoración" description="Rango 0/100">
              <b-form-input id="input-1" v-model="formData.valoracion" type="number" placeholder="80"></b-form-input>
            </b-form-group>
          </div>
          <b-form-group label="Imagen" class="col-sm-4">
           <b-form-file
            v-model="formData.file"
            :state="Boolean(formData.file)"
            placeholder="Elige una imagen"
          ></b-form-file>
          <small class="mt-3" style="color: #6c757d">Imagen: {{ formData.file ? formData.file.name : '' }}</small>
          </b-form-group>
          <img class="preview-img" :src="123" alt="">
        </div>
      </div>
      <h5 class="propiedades" v-b-toggle.collapse-1> Propiedades <v-icon name="angle-down"/></h5>
      <b-collapse id="collapse-1" class="mt-2">
        <div class="container-fluid table-elements">
          <div class="row">
            <div class="col-sm-12 main-title"> <b>Macros</b> </div>
            <div class="col-sm-2 element" v-for="(v, i) in formData.macros" :key="i">
              <b-form-group :label="capitalize(i)" description="En gramos">
                <b-form-input id="input-1" v-model="formData.macros[i]" type="number"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-12 main-title"> <b>Micros</b> </div>
            <div class="col-sm-12 main-title"> Vitaminas </div>
            <div class="col-sm-1 element" v-for="(v, i) in formData.micros.vitaminas" :key="i">
              <b-form-group :label="i" description="En mg">
                <b-form-input id="input-1" v-model="formData.micros.vitaminas[i]" type="number"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-12 main-title"> Minerales </div>
            <div class="col-sm-1 element" v-for="(m, i) in formData.micros.minerales" :key="i">
              <b-form-group :label="capitalize(i)" description="En gramos">
                <b-form-input id="input-1" v-model="formData.micros.minerales[i]" type="number"></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>
      </b-collapse>
    </b-form>
    <button @click="onSubmit" class="btn btn-info submit" > Guardar 
      <b-spinner v-if="sending" class="loading" type="grow" ></b-spinner> 
      <v-icon v-if="success" name="check"/>
    </button>
    <button type="reset" @click="test" class="btn btn-danger"> Reset </button>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
export default {
  name: 'add-ingredient-form',
  data(){
    return {
      show: true,
      sending: false,
      success: false,
      formData: {
        nombre: '',
        cantidad: '',
        visible: true,
        valoracion: null,
        file: null,
        macros: {
          calorias: null,
          carbohidratos: null,
          proteinas: null,
          grasas: null,
          fibra: null,
        },
        micros: {
          vitaminas:{
            A: null,
            C: null,
            D: null,
            E: null,
            K: null,
            B1: null,
            B2: null,
            B3: null,
            B5: null,
            B6: null,
            B9: null,
            B12: null
          },
          minerales: {
            zinc: null,
            cobre: null,
            yodo: null,
            selenio: null,
            cromo: null,
            hierro: null,
            fluor: null,
            calcio: null,
            fosforo: null,
            magnesio: null,
            potasio: null,
          }
        }
      }
    }
  },
  methods: {
    ...mapActions(['loadIngredients']),
    onSubmit(){
      this.sending = true;
      var _ = this;

      axios.post('http://127.0.0.1:9000/dieta/ingrediente', this.formData)
      .then(function () {
        _.sending = false;
        _.success = true; 
        _.loadIngredients();
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    capitalize(title){
        return title.charAt(0).toUpperCase() + title.substring(1);
    },
    test(){
      console.log(this.formData);
    }
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
