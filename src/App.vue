<template>
  <Navigation/>
  <div class="main">
    <router-view/>  
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>


<style>
.main {
  margin-left: 120px;
}

@media (max-width: 600px) {
  .main {
    margin: 0;
  }
}
</style>
