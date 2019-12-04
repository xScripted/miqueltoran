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
            v-model="status"
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
          <p class="card-text">
            <input class="input-style" type="text" v-model="newLang" placeholder="Nombre del idioma">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
             Preset de palabras
            </b-form-checkbox>
          </p>
          <b-button @click="sendNewLang" style="width: 100%" v-b-toggle.collapse-2-inner size="sm" variant="outline-primary">Crear</b-button>
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
      status: false 
    }
  },
  methods: {
    ...mapMutations(['changeShow', 'changeLangActive']),
    ...mapActions(['loadWords', 'loadLangs']),
    sendNewLang() {
      axios.put('http://127.0.0.1:9000/idiomas/nuevo/', {name: this.newLang, status: this.status });
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
