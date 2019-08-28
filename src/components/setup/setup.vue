<template>
  <v-container fluid  grid-list-xl>
    <v-layout>
      <v-flex sm6 md3 offset-md-7 offset-sm-6>
         <v-select class="ma-2" :items="months" :menu-props="{ top: true, offsetY: true }"
              label="Solo field" solo
            ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap >
        <v-flex sm12 md2 offset-md-2>
          <v-card ripple class="text-center" height="100%" >
              <v-card-title class="title">Total Assigned</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-progress-circular
                    :rotate="360"
                    :size="70"
                    :width="10"
                    :value="60"
                    color="teal"
                  >
                    7/30
                  </v-progress-circular>
              </v-card-text>
          </v-card>
        </v-flex>
         <v-flex sm12 md2>
          <v-card height="100%" class="text-center">
             <v-card-title class="title">Total Target</v-card-title>
             <v-divider class="md-3"></v-divider>
              <v-card-text>
                <v-progress-circular
                    :rotate="360"
                    :size="70"
                    :width="10"
                    :value="60"
                    color="red"
                  >
                    7/30
                  </v-progress-circular>
              </v-card-text>
          </v-card>
        </v-flex >
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
                        <td>{{ item.name }}</td>
                        <td>{{ item.target }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
          </v-card>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12 md8 offset-md-2>
          <v-data-table :headers="headers" :items="distributors" sort-by="target">
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>My Teams</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:item.month="{ item }">
              <v-select :items="months" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>
            </template>
            <v-toolbar color="white">
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-dialog v-model="dialog" max-width="300px">
                <v-card>
                  <v-card-title>
                    <span class="headline">formTitle</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <!--<v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                        </v-col>
                      </v-row>-->
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { debuglog } from 'util';
export default {
  data: () => ({
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
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
          name: "ABC",
          target: 4556,
          bonus: 3344,
          month: 1
        },
        {
          name: "CDF",
          target: 1233,
          bonus: 333,
          month: 2
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

