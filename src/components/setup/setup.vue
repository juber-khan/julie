<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex sm6 md3 offset-md-7 offset-sm-6>
        <v-select
          class="mt-2"
          :items="months"
          :menu-props="{ top: true, offsetY: true }"
          label="September"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm6 md2 offset-md-2 justify-center>
        <v-card ripple height="100%" class="text-center">
          <v-card-title class="title">Total Assigned</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-progress-circular :rotate="360" :size="70" :width="10" :value="60" color="teal">7/30</v-progress-circular>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm6 md2 justify-center>
        <v-card height="100%" class="text-center">
          <v-card-title class="title text-center">Total Target</v-card-title>
          <v-divider class="md-3"></v-divider>
          <v-card-text>
            <v-progress-circular :rotate="360" :size="70" :width="10" :value="60" color="red">7/30</v-progress-circular>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm12 md4>
        <v-card class="px-4" height="100%">
          <v-card-title class="title text-center">Total Bonus</v-card-title>
          <v-divider class="md-3"></v-divider>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Amount</th>
                <th class="text-left">Per(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in distributors.slice(0,3)" :key="item.name">
                <td>{{ item.amount }}</td>
                <td>{{ item.target }} %</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12 md8 offset-md-2>
        <v-data-table
          class="elevation-3 pa-2"
          :headers="headers"
          :items="distributors"
          sort-by="target"
           :search="search"
        >
          <template v-slot:top>
           <v-toolbar color="blue" light>
                <v-toolbar-title>My Team</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field class="mt-0" left label="Search" prepend-inner-icon="search" solo-inverted
                       v-model="search" clearable single-line hide-details></v-text-field>
              </v-toolbar>
          </template>
          <template v-slot:item.month="{ item }">
            <v-select class="pa-2" :items="months" :menu-props="{ top: true, offsetY: true }" label="September"></v-select>
          </template>

          <v-toolbar color="white">
            <v-divider class="mx-4" inset vertical></v-divider>
          </v-toolbar>
          <template v-slot:item.action="{ item }">
            <v-icon color="blue darken-1" small class="mr-2" @click="editItem(item)">edit</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <template>
      <v-dialog v-model="dialog" max-width="400px">
        <v-card>
          <v-card-title>
            <span class="headline">{{formTitle}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="editedItem.target" label="Target"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="editedItem.bonus" label="Bonus"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"><v-icon>close</v-icon></v-btn>
            <v-btn color="blue darken-1" text @click="save"><v-icon>save</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
import { debuglog } from "util";
export default {
  data: () => ({
    search:"",
    months: ["September", "October", "November"],
    dialog: false,
    width: 1000,
    height: null,
    headers: [
      {
        text: "Distributor Name",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Target", value: "target" },
      { text: "Bonus", value: "bonus" },
      { text: "Month", value: "month" },
      { text: "Actions", value: "action", sortable: false }
    ],
    distributors: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      target: 0,
      bonus: 0,
      month: 0
    },
    defaultItem: {
      name: "",
      target: 0,
      bonus: 0,
      month: 0
    }
  }),

  computed: {
    formTitle() {
      return "Edit";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.distributors = [
        {
          name: "Ajay",
          target: 2,
          bonus: 3344,
          month: 1,
          amount:'2 cr'
        },
        {
          name: "Aman",
          target: 3,
          bonus: 333,
          month: 2,
          amount:'3 cr'
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.distributors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.distributors[this.editedIndex], this.editedItem);
      } else {
        this.distributors.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

