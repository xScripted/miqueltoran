<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
          <d-menu></d-menu>
      </div>
      <div class="col-sm-8">
          <d-viewer></d-viewer>
      </div>
      <div class="col-sm-2">
          <d-selector></d-selector>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DMenu from '@/components/diet/DMenu.vue';
import DViewer from '@/components/diet/DViewer.vue';
import DSelector from '@/components/diet/DSelector.vue';

export default {
  data() {
    return {
      show: false,
      name: ''
    }
  },
  components: {
    DMenu,
    DViewer,
    DSelector
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
  },
  beforeCreate() {
    console.log('hey!');
  }


}
</script>

<style lang="scss">

</style>