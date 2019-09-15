<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-8 add-plate-form">
            <b-form name="new-ingredient" @reset="onReset" v-if="show" novalidate>
                <h1 style="text-align: center; margin: 20px;"> Crear un nuevo plato </h1>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4">
                            <b-form-group label="Nombre">
                                <b-form-input v-model="formData.nombre" type="text" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-2">
                            <b-form-group label="Tiempo" description="En minutos"> 
                                <b-form-input v-model="formData.tiempo" type="number" required></b-form-input>
                            </b-form-group>
                        </div>
                        <b-form-group class="col-sm-2" label="Tipo"> 
                            <b-form-select v-model="formData.tipo" value-field="value" text-field="text" :options="selectOptions"></b-form-select>
                        </b-form-group>
                        <b-form-group class="col-sm-4" label="Imagen">
                            <b-form-file
                                v-model="formData.file"
                                :state="Boolean(formData.file)"
                                placeholder="Elige una imagen"
                            ></b-form-file>
                            <small class="mt-3" style="color: #6c757d">Imagen: {{ formData.file ? formData.file.name : '' }}</small>
                        </b-form-group>
                        <div class="col-sm-6">
                            <b-form-textarea
                                id="textarea"
                                v-model="formData.receta"
                                placeholder="Receta"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </div>
                        <div class="col-sm-6">
                            <div class="drop-ingredients" @dragover="allowDrop">Ingredientes</div>
                             <div class="test"  draggable="true" @dragstart="drag">HEEY</div>
                        </div>
                    </div>
                </div>
            </b-form>
            <button @click="onSubmit" class="btn btn-info submit" > Guardar 
                <b-spinner v-if="sending" class="loading" type="grow" ></b-spinner> 
                <v-icon v-if="success" name="check"/>
            </button>
            <button type="reset" class="btn btn-danger"> Reset </button>
        </div>
        <d-selector class="col-sm-4"></d-selector>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
import DSelector from '../DSelector.vue';

export default {
  name: 'add-plate-form',
  data(){
    return {
      show: true,
      sending: false,
      success: false,
      formData: {
          nombre: '',
          tiempo: 0,
          tipo: 'cocinado',
          file: null,
          receta: '',
          ingredientes: []
      },
      selectOptions: [
        {value: 'cocinado', text: 'Cocinado'},
        {value: 'crudo', text: 'Crudo'}
      ]
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
    onReset(){

		},
    allowDrop(ev) {
      console.log('todoOk');
      ev.preventDefault();
    },
    drag() {
      console.log('WOOW');
    }
  },
  components:{
    DSelector
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
.drop-ingredients{
    width: 100%;
    height: 20vh;
    border: 1px solid black;
}

</style>
