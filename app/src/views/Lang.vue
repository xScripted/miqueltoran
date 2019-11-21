<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
          <i-menu></i-menu>
      </div>
      <div class="col-sm-10">
          <i-viewer></i-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import IMenu from '@/components/idiomas/IMenu.vue';
import IViewer from '@/components/idiomas/IViewer.vue';
export default {
  name: 'lang',
  components: {
    IMenu,
    IViewer
  }
}
</script>
