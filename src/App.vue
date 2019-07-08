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
@font-face {font-family: "TypographerGotisch C";
    src: url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.eot");
    src: url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/f6afa27ab0efbdf8cf82bc5549eec51a.svg#TypographerGotisch C") format("svg");
}
@import url(//db.onlinewebfonts.com/c/f6afa27ab0efbdf8cf82bc5549eec51a?family=TypographerGotisch+C);
#app {
  color: azure;
  background: #000000;
  font-family: "TypographerGotisch C";
}
</style>