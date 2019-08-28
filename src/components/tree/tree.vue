<template>
  <v-container>
    <v-layout >
      <v-flex sm12 md8 offset-md-2 justify-center class="my-2">
            <div class="pa-" v-for="dist in distributors" :key="dist.id">
                <v-card class="pa-5 my-3 good">
                  <v-layout row>
                    <v-flex xs12 md2>
                        <div class="caption grey--text">UserName</div>
                        <div>{{ dist.userName}}</div>
                    </v-flex>
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Performance</div>
                        <v-flex class="px-1">
                            <SmallProgressBar :chips="dist"></SmallProgressBar>
                        </v-flex>
                    </v-flex>
                    <v-flex sm6 md2>
                        <div class="caption grey--text">Chips Left</div>
                        <div>{{dist.chipsLeft}}</div>
                    </v-flex>
                    <v-flex sm6 md2>
                        <div class="caption grey--text">Call</div>
                        <v-icon color="green">call</v-icon>
                        <span left>{{dist.call}}</span>
                    </v-flex>
                    </v-layout>
                </v-card>
                </div>
        </v-flex>
    </v-layout>
</v-container>  
</template>

<script>
import SmallProgressBar from '../dashboard/small_progressbar';
export default {
  components : {
    SmallProgressBar
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
    left: false,
    interval: {},
    skill: 20,
    distributors : [
        {
            id: 1 , userName : "ABC", progress : 60, chipsLeft : 3000, totalChips:5000, call : "9021322575"
        },{
            id: 2 , userName : "XYZ", progress : 50, chipsLeft : 40000,totalChips:6000, call : "9021322575"

        },{
            id: 3 , userName : "CDF", progress : 40, chipsLeft : 5000, totalChips:7000, call : "9021322575"
        }
    ],
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

.good{
    border-left: 5px solid green;
}
.bad{
    border-left: 5px solid red;
}
</style>

</script>