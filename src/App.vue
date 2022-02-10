<template>
  <div id="app" class="app-wrapper">
    <Header />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>