<template>
  <v-container>
    <v-layout justify-center align-center column pa-2>
      <v-card class="mx-auto" :width="width">
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="50"
            :width="5"
            :value="progressDays"
            color="teal"
          >{{ calculateNoDays() }}</v-progress-circular>
          <span>Days Left</span>
        </div>
      </v-card>
      <v-card class="mt-3 px-1 py-2 mx-auto" :width="width">
        <div class="text-center">
          <ProgressBar></ProgressBar>
          <div class="text-center pt-5">
            Bonus Acheived :
            <!-- <span>10k</span> -->
            <v-btn class="mx-2 white--text" fab dark small color="blue">
                1cr
              </v-btn>
          </div>
          <div class="text-center pt-5">
            Todays :
             <v-btn class="mx-2 white--text" fab dark small color="red">
                10k
              </v-btn>
          </div>
          <div class="text-center pt-5">
            Chips Balance :
             <v-btn class="mx-2 white--text" fab dark small color="green">
                20cr
              </v-btn>
          </div>
        </div>
      </v-card>
      <v-container></v-container>
    </v-layout>
    <v-container>
      <v-layout>
        <v-flex sm12 md8 offset-md-2 justify-center class="my-2">
          <v-toolbar color="indigo lighten-1" light class="white--text">
                <v-layout>
                  <v-flex xs4 sm4 md6 justify-start>
                      <v-toolbar-title class="body-1 white--text">My Team</v-toolbar-title>
                  </v-flex>
                  <v-flex xs8 sm8 md6>
                    <v-text-field class="mt-0" left label="Search" prepend-inner-icon="search" solo-inverted
                       v-model="search" clearable single-line hide-details></v-text-field>
                  </v-flex>
                </v-layout>
              </v-toolbar>
          <v-list class="" v-for="dist in filteredItems" :key="dist.id">
            <v-card class="pa-5 my-3 good">
              <v-layout row>
                <v-flex xs12 md2>
                  <div class="caption grey--text">User</div>
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
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
import ProgressBar from "./progressbar";
import SmallProgressBar from "./small_progressbar";
import StaticConfig from "../../config/static.config";
export default {
  components: {
    SmallProgressBar,
    ProgressBar
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods:{
    clearSearch () {
       this.search = "";
    },
    calculateNoDays(){
      let oneDay = 24*60*60*1000;
      let now = new Date();
      let startDate = new Date(now.getFullYear(), now.getMonth() + 1,  StaticConfig.startDay);
      let diffDays = Math.round(Math.abs((startDate.getTime() - now.getTime())/(oneDay)));
      let totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      this.progressDays = Math.abs((diffDays/totalDays)*100);
      return diffDays;
    }

  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
  computed: {
        filteredItems() {
            return this.distributors.filter(item => {
              if(!this.search) return this.distributors;
                return (item.userName.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.call.toLowerCase().includes(this.search.toLowerCase()));
            });
        }
  },
  data: () => ({
    progressDays: 0,
    search :"",
    drawer: true,
    left: false,
    interval: {},
    skill: 20,
    distributors : [
        {
            id: 1 , userName : "Ajay", progress : 60, chipsLeft : 3000, totalChips:5000, call : "9021322575", color:'green darken-2'
        },{
            id: 2 , userName : "Rahul", progress : 50, chipsLeft : 40000,totalChips:6000, call : "9021322575", color : "green darken-2"

        },{
            id: 3 , userName : "Manish", progress : 40, chipsLeft : 5000, totalChips:7000, call : "9021322575", color:'red'
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
        text: "Dessert (100g serving)",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Month", value: "month" },
      { text: "Iron (%)", value: "iron" }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 200,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 200,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      }
    ]
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

.good {
  border-left: 5px solid green;
}
.bad {
  border-left: 5px solid red;
}
</style>
