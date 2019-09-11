<template>
  <div class="container">

    <b-button variant="success" @click="show = !show">Crear Dieta</b-button>

    <b-form @reset="onReset" v-if="show">
      <b-form-group
        id="fieldset-1"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-1"
      >
        <b-form-input id="input-1" v-model="name"></b-form-input>
      </b-form-group>

      <b-button @click="onSubmit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <button type="button" class="btn btn-info" @click="getDiets"> Ver dietas </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      show: false,
      name: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('this.name', this.name);
      axios.post('http://127.0.0.1:9000/diet', {
        name: this.name,
        days: 3,
        desc: 'hola'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return true;
    },
    getDiets(){
      axios.get('http://127.0.0.1:9000/diet', {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return true;
    },
    onReset() {
      return true;
    }
  }


}
</script>