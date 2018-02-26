<!--suppress ALL -->

<template>
  <nav id="navbar" ref="navbar"
       class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">{{brand}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <!--  TODO maybe use slot for links -->
        <li class="nav-item">
          <router-link tag="li" to="/" exact active-class="active">
            <a class="nav-link">
              <svg class="icon">
                <use xlink:href="#home"/>
              </svg>
              Home
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/settings" exact active-class="active">
            <a class="nav-link">
              <svg class="icon">
                <use xlink:href="#settings"/>
              </svg>
              Settings
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search"
               aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
    <div style="display: none">
      <svg version="1.1" style="display: none"
           xmlns="http://www.w3.org/2000/svg" width="32" height="32"
           viewBox="0 0 32 32">
        <symbol id="home" viewBox="0 0 32 32">
          <title>home</title>
          <path
            d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
        </symbol>
        <symbol id="settings" viewBox="0 0 32 32">
          <title>settings</title>
          <path
            d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
        </symbol>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: '',
      navbar_height: 52
    }
  },
  props: {
    brand: {
      type: String,
      required: true,
      default: 'goeland'
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .icon {
    font-size: inherit;
    height: 1em;
    width: 1em;
    // https://css-tricks.com/cascading-svg-fill-color/
    fill: currentColor;
  }
</style>
