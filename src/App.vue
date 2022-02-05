<template>
  <div id="app" class="app-wrapper">
    <nav>Navbar</nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-wrapper {
  max-width: 1110px;
  margin: 0 auto
}
</style>
