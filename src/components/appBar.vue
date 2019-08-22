<template>
  <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Julie</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.icon" :to="item.link" text>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
      menu: [
      { icon: "home", title: "Daily Dashboard", link: "/"},
      { icon: "info", title: "Set Up", link: "/setup"},
      { icon: "warning", title: "See the tree", link: "/tree"}
    ],
  })
}
</script>
<style scoped>
/* card */
.v-input__slider {
  width: 100%;
}
/* progress circular */
.v-progress-circular {
  margin: 1rem;
}
</style>
