<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0;
}
.main-content {
  padding: 20px;
  min-height: 78%;
}
.footer {
  height: 50px;
}
</style>
