<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="left" fixed temporary>
    </v-navigation-drawer> -->
     <appBar></appBar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex shrink>
          <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import dashboard from "./components/dashboard/dashboard"
import setup from "./components/setup/setup"
import login from "./components/login/login"
import appBar from './components/appBar'

export default {
  name: "App",
  components: {
    dashboard,
    setup,
    login,
    appBar
  },
  beforeDestroy () {
      clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  data: () => ({
    drawer: true,
    left: false
  })
};
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