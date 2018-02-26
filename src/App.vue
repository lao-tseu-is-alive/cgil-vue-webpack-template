<template>
  <div id="app" class="">
    <navbar brand="App"></navbar>
    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="scss">

  @import 'style/main';

  body {
    padding-top: 5rem;
  }
</style>
