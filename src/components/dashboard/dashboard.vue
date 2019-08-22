<template>
  <v-container>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :raised="raised"
      :width="width"
      :height="height">
      <div class="text-center">
        <v-progress-circular
          :rotate="360"
          :size="70"
          :width="5"
          :value="value"
          color="teal"
        >{{ value }}</v-progress-circular>
        <div>Days Left</div>
      </div>
    </v-card>
  <v-card
      class="mt-5 mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :raised="raised"
      :width="width"
      :height="height">
      <div class="text-center">
        <v-progress-linear class="m-5" v-model="skill" color="amber" height="25" width="80" reactive></v-progress-linear>
        <div class="text-center">
          Chips Sold :
          <span>18 cr</span>
        </div>
      </div>
    </v-card>
    <v-card
      class="mt-5 mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :raised="raised"
      :width="width"
      :height="height"
      margin:
    >
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="['calories', 'fat']"
    :sort-desc="[false, true]"
    multi-sort
  >
  <template v-slot:item.month="{ item }">
          <v-shrink>
            <v-progress-linear class="m-5" v-model="skill" color="amber" height="25" width="80" reactive></v-progress-linear>
          </v-shrink>
          </template>
  </v-data-table>
    </v-card>
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
