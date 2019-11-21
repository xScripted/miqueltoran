<template>
  <div class="i-viewer">
    <i-add-word v-show="getShowsLang.addWord"></i-add-word>
  </div>
</template>

<script>

import iAddWord from './iViews/addWord.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'i-viewer',
  data(){
    return {

    }
  },
  methods: {

  }, 
  computed: {
    ...mapGetters(['getShowsLang'])
  },
  components: {
    iAddWord,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
