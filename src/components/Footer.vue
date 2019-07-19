<template>
  <v-footer color="black" class="pa-3">
    <a href="https://github.com/drwhirstyburgers" target="_blank"><v-icon color="white">fab fa-github</v-icon></a>
    <a href="https://github.com/drwhirst" target="_blank"><v-icon color="white" class="icons">fab fa-github-square</v-icon></a>
    <a href="https://twitter.com/Thursty20" target="_blank"><v-icon color="white" class="icons">fab fa-twitter</v-icon></a>
    <a href="https://www.linkedin.com/in/drwhirst/" target="_blank"><v-icon color="white" class="icons">fab fa-linkedin</v-icon></a>
    <v-spacer></v-spacer>
    <div id="date">&copy; {{ new Date().getFullYear() }}  <strong>DAVID HIRST</strong></div>
  </v-footer>
</template>
<script>
export default {

}
</script>
<style>
a {
    text-decoration: none;
}
#date {
    color: azure;
}
.icons {
    margin-left: 6px;
}
</style>