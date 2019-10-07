<template>
  <div>
    <v-navigation-drawer absolute v-model="sideNav"></v-navigation-drawer>
    <v-app-bar color="deep-purple darken-4"
               dark fixed>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav">
      </v-app-bar-nav-icon>

      <v-toolbar-title>News</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>
          <v-icon icon left>mdi-newspaper</v-icon>
          Politics
        </v-btn>
        <v-btn text>
          <v-icon icon left>mdi-bank</v-icon>
          Economics
        </v-btn>
        <v-btn text>
          <v-icon icon left>mdi-book-open-page-variant</v-icon>
          Culture
        </v-btn>
        <v-btn text>
          <v-icon icon left>mdi-soccer</v-icon>
          Sports
        </v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>


<script>
    export default {
        name: "Navigation",
        data() {
            return {
                sideNav: false,
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                    {title: 'Photos', icon: 'mdi-image'},
                    {title: 'About', icon: 'mdi-help-box'},
                ],
                right: null,
            }
        }
    }
</script>
<style scoped>

</style>
