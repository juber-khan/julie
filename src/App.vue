<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Julie</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink></v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    drawer: true,
    left: false,
    menu: [
        { icon: 'home', title: 'Daily Dashboard' },
        { icon: 'info', title: 'Set Up' },
        { icon: 'warning', title: 'See the tree' }
      ]
  })
};
</script>
