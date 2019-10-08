<template>
  <div>

    <v-app-bar color="deep-purple darken-4"
               dark fixed>

      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav">
      </v-app-bar-nav-icon>

      <v-toolbar-title>News</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text v-for="item in items">
          <v-icon icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            News
          </v-list-item-title>
          <v-list-item-subtitle>
            Choose your category here
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
                    {title: 'Politics', icon: 'mdi-newspaper'},
                    {title: 'Economics', icon: 'mdi-bank'},
                    {title: 'Culture', icon: 'mdi-book-open-page-variant'},
                    {title: 'Sports', icon: 'mdi-soccer'},
                    {title: 'Health', icon: 'mdi-help-box'},
                ],
                right: null,
            }
        }
    }
</script>
<style scoped>

</style>
