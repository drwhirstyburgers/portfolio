<template>
  <nav>
    <v-toolbar
      dark 
      color="black"
      >
      <v-toolbar-title>David Hirst</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
      @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      clipped
      fixed
      app
      dark
      temporary
      right
    >
      <v-list>
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_left</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile tag="div">
          <v-icon>
            apps
          </v-icon>

          <v-list-tile-content>
            <v-list-tile-title class="text-md-center">Menu</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon v-if="!mini" @click.stop="mini = !mini">
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'home', route: '/' },
          { title: 'About', icon: 'question_answer', route: '/about' },
          { title: 'Projects', icon: 'dashboard', route: '/project' }
        ],
        right: true,
        mini: false,
      }
    }
  }
</script>

<style>
.v-list {
  text-decoration: none;
}
</style>
