<template>
  <div class="i-menu">
    <select v-model="lang" class="custom-select mt-3">
      <option :value="optionLang" v-for="(optionLang, k) in getLangs" :key="k"> {{ optionLang }} </option>
    </select>

    <div class="menu-item" v-b-toggle.collapse-1 >Crear Idioma <v-icon name="angle-down"/></div>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <p class="card-text">
          <input class="input-style" type="text" v-model="newLang" placeholder="Nombre del idioma">
          <b-form-checkbox
            id="checkbox-1"
            v-model="preset"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Preset de palabras
          </b-form-checkbox>
        </p>
        <b-button @click="sendNewLang" style="width: 100%" v-b-toggle.collapse-1-inner size="sm" variant="outline-primary">Crear</b-button>
      </b-card>
    </b-collapse>
 
    <div class="menu-item" v-b-toggle.collapse-2 >Ajustes tabla <v-icon name="angle-down"/></div>
    <b-collapse id="collapse-2" class="mt-2">
      <b-card>
        <p class="card-text table-checkboxs">
          <b-form-checkbox @click="updateShows('form1')" value="true"> Forma 1</b-form-checkbox>
          <b-form-checkbox @click="updateShows('form2')" value="true"> Forma 2</b-form-checkbox>
          <b-form-checkbox @click="updateShows('form3')" value="true"> Forma 3</b-form-checkbox>
          <b-form-checkbox @click="updateShows('fonetica')" value="true"> Fonetica</b-form-checkbox>
          <b-form-checkbox @click="updateShows('traduccion')" value="true"> Traduccion</b-form-checkbox>
          <b-form-checkbox @click="updateShows('relacion')" value="true"> Relacion</b-form-checkbox>
          <b-form-checkbox @click="updateShows('tipo')" value="true"> Tipo </b-form-checkbox>
          <b-form-checkbox @click="updateShows('tier')" value="true"> Tier </b-form-checkbox>
          <b-form-checkbox @click="updateShows('ejemplo')" value="true"> Ejemplo </b-form-checkbox>
          <b-form-checkbox @click="updateShows('subcategoria')" value="true"> Subcategoria </b-form-checkbox>
        </p>
      </b-card>
    </b-collapse>

    <div class="menu-item" v-b-toggle.collapse-3 >Filtros <v-icon name="angle-down"/></div>
    <b-collapse id="collapse-3" class="mt-2">
      <b-card>
        <p class="card-text table-checkboxs">
          <div class="filter">
            <input type="text" placeholder="regExp"/> 
            <select v-model="lang" class="custom-select mt-3">
              <option value="form1"> Form1 </option>
              <option value="form2"> Form2 </option>
              <option value="form3"> Form3 </option>
              <option value="fonetica"> Fonética </option>
              <option value="traduccion"> Traducción </option>
              <option value="relacion"> Relación </option>
              <option value="tipo"> Tipo </option>
              <option value="tier"> Tier </option>
              <option value="ejemplo"> Ejemplo </option>
              <option value="subcategoria"> Subcategoria </option>
            </select>
          </div>
        </p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import axios from 'axios';
export default {
  name: 'i-menu',
  data() {
    return {
      lang: '',
      newLang: '',
      preset: false,
    }
  },
  methods: {
    ...mapMutations(['changeLangActive', 'updateShows']),
    ...mapActions(['loadWords', 'loadLangs']),
    sendNewLang() {
      axios.put('http://127.0.0.1:9000/idiomas/nuevo/', {name: this.newLang, preset: this.preset });
    }
  },
  computed: {
    ...mapGetters(['getLangs']),
  },
  watch: {
    lang(){
      this.changeLangActive(this.lang);
      this.loadWords();
    },
    getLangs(arrLangs) {
      this.lang = arrLangs[0];
    }
  },
  created() {
    this.loadWords();
    this.loadLangs();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .d-menu{
    height: 100vh;
    border-right: 1px solid #d3d3d3;
  }
  .menu-item{
    transition: .3s;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      color: lightblue;
    }

  }

  * {
    user-select: none;
  }

  .input-style {
      padding: 5px;
      margin-bottom: 10px;
      width: 100%;
      font-size: 18px;
      border: 1px solid rgb(224, 224, 224);
      background: none;
    }
</style>
