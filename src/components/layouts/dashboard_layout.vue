<template>
  <v-app light>
    <appBar></appBar>
    <v-content>
      <router-view></router-view>
    </v-content>
 </v-app>
</template>
<script>
import appBar from "../appBar";

export default {
  name: "App",
  components: {
    appBar
  },
};
</script>
<style scoped>

.body{
    background-color: #eeeeee!;
}
.v-text-field input {
  font-size: 1.2em;
}
/* card */
.v-input__slider {
  width: 100%;
}
/* progress circular */
.v-progress-circular {
  margin: 1rem;
}
</style>