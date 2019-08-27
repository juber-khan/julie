<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center column pa-5>
      <v-card class="mx-auto" :width="width">
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="50"
            :width="5"
            :value="value"
            color="teal"
          >{{ value }}</v-progress-circular>
          <span>Days Left</span>
        </div>
      </v-card>
      <v-card class="mt-5 pa-5 mx-auto" :width="width">
         <v-switch class="ml-5"
              color="info"
              value="info"
              hide-details
            ></v-switch>
        <div class="text-center">
          <v-progress-linear class="mt-5 md-5" v-model="skill" color="amber" height="25" width="70" reactive></v-progress-linear>
          <div class="text-center pt-5">
            Bonus Acheived :
            <span>18 cr</span>
          </div>
          <div class="text-center pt-5">
            Today :
            <span>18 cr</span>
          </div>
          <div class="text-center pt-5">
            Chips Balance :
            <span>18 cr</span>
          </div>
        </div>
      </v-card>
      <h1>My Teams</h1>
        <v-card flat class="pa-3">
            <v-layout row wrap>
              <v-flex sm12 md3>
                <div class="caption grey--text">User Name</div>
                <div>User Name</div>
                </v-flex>
          </v-layout>
      </v-card>
      </v-layout>
  </v-container>
</template>
<script>
export default {

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
    left: false,
    interval: {},
    skill: 20,
    items: [
      {
        color: '#1F7087',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
   
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    raised: false,
    width: 800,
    height: undefined,
    value: 10,
    headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: "Month", value: "month" },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          }
        ],
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
