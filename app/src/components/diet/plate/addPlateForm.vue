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
                            <div class="drop-ingredients" @dragover="dragOver" @drop="drop">
                              <div class="dropped-item" v-for="(ing, k) in formData.ingredientes" :key="k">
                                <div> {{ findData(ing.id).nombre }}  </div>
                                <input :id="'tooltip-target-' + ing.id" v-model="formData.ingredientes[k].cantidad" type="text" />
                                <b-tooltip :target="'tooltip-target-' + ing.id" triggers="hover">
                                  1 = {{ findData(ing.id).cantidad }}g
                                </b-tooltip>
                                <div @click="removeIngredient(ing.id)">
                                  <v-icon class="close" name="times"></v-icon>
                                </div>
                              </div>
                            </div>
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
import { mapActions, mapGetters } from 'vuex'
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
          visible: true,
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
      console.log(this.formData);
      axios.post('http://127.0.0.1:9000/dieta/plato', this.formData)
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
    dragOver(ev) {
      console.log('todoOk');
      ev.preventDefault();
    },
    drop(ev) {
      var id = ev.dataTransfer.getData('text');
      this.formData.ingredientes.push({
        id: id,
        cantidad: 1
      });
    },
    findData(id){
      var x = this.getAllIngredients.find(x => x._id == id);
      return x;
    },
    removeIngredient(id){
      this.formData.ingredientes = this.formData.ingredientes.filter(x => x.id != id);
    }
     
  },
  computed: {
    ...mapGetters(['getAllIngredients'])
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

.add-plate-form{
  animation: .5s 0s 1 fade;
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
    height: 50vh;
    max-height: 530px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    color: gray;
    overflow-y: scroll;

    .dropped-item{
      animation: .4s ease-out 0s 1 fade;
      transition: .3s;
      height: 45px;
      padding: 5px 10px;
      margin: 10px;
      border-radius: 5px;
      display: grid;
      color: black;
      grid-template-columns: 60% 30% 10%;
      align-items: center;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 1), inset 0 0 0px 0 rgba(114, 114, 114, 0.3);
      cursor: pointer;
      
      &:hover{
        background-color:  rgba(144, 144, 144, 0.2);
      }

      input {
        border: 0;
        max-width: 80px;
        background: transparent;
        padding: 5px;

        &:focus{
          outline: none;
        }
      }

      .close{
        justify-self: center;
        cursor: pointer;
      }

    }
}


</style>
