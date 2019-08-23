<template>
    <span>
      <v-navigation-drawer app v-model="drawer" left disable-resize-watcher>
        <v-list shaped>
          <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in menu"
                :key="i" :to="item.path">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app clipped-right color="blue-grey" dark>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="hidden-sm-and-down">Daily Dashboard</v-btn>
        <v-btn text class="hidden-sm-and-down">Set up</v-btn>
        <v-btn text class="hidden-sm-and-down">Tree</v-btn>&nbsp;
        <v-icon dark>exit_to_app</v-icon>
      </v-app-bar>
    </span>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    appTitle: "JULIE",
    item:1,
    menu: [
      { icon: "dashboard", title: "Daily Dashboard", path: "/" },
      { icon: "settings_applications", title: "Set Up", path: "/setup" },
      { icon: "account_tree", title: "See the tree", path: "/tree" }
    ]
  })
}
</script>
<style scoped>
</style>
