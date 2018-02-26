<!--suppress JSUnusedGlobalSymbols -->
<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>Here you can change some settings</p>

  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      msg: 'Setting page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
</style>
