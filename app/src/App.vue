<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">MT</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/" class="text-white">Home</router-link> 
          </b-nav-item>
          <b-nav-item href="#" >  
            <router-link to="/dieta" class="text-white">Dieta</router-link>
          </b-nav-item>
          <b-nav-item href="#" >  
            <router-link to="/musica" class="text-white">Música</router-link>
          </b-nav-item>
          <b-nav-item href="#" >  
            <router-link to="/idiomas" class="text-white">Idiomas</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
  body * {
    opacity: 1;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
