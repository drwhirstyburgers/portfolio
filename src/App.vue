<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');
#app {
  color: azure;
  background: #000000;
  font-family: 'Fjalla One', sans-serif;
}
</style>