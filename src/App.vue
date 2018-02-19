<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

  @import 'style/main';

  body {
    font: 100% Helvetica, sans-serif;
    background-color: $mainbackgound;
    color: $maincolor;
    margin: 1rem;
  }
</style>
