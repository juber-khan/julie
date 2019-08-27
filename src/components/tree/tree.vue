<template>
  <v-container fluid  grid-list-xl>
    <v-layout>
      <v-flex justify-end sm6 md3 offset-md-8 offset-sm-6>
         <v-select class="ma-2" :items="states" :menu-props="{ top: true, offsetY: true }"
              label="Solo field" solo
            ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap >
        <v-flex fill-height sm12 md3 offset-md-2>
          <v-card  class="text-xs-center" >
              <v-card-title>Total Assigned</v-card-title>
              <v-card-text>7/23</v-card-text>
          </v-card>
        </v-flex>
         <v-flex fill-height sm12 md3>
          <v-card fill-height class="text-xs-center">
             <v-card-title>Total Assigned</v-card-title>
              <v-card-text>7/23</v-card-text>
          </v-card>
        </v-flex >
         <v-flex sm12 md3>
          <v-card >
              <v-card-title>Total Bonus</v-card-title>
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th class="text-left">Amount</th>
                        <th class="text-left">Per(%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts.slice(0,3)" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
          </v-card>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12 md10 offset-md-1>
          <v-data-table :headers="headers" :items="desserts" sort-by="calories">
            <!-- <template v-slot:top> -->
            <template v-slot:item.month="{ item }">
              <v-select :items="states" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>
            </template>
            <v-toolbar color="white">
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-dialog v-model="dialog" max-width="300px">
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
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
                      </v-row>
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
export default {
  data: () => ({
    states: ["Alabama", "Alaska", "American Samoa", "Arizona"],
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
      { text: "Chips Balance", value: "calories" },
      { text: "Target", value: "fat" },
      { text: "Bonus", value: "carbs" },
      { text: "Month", value: "month" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
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
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        }
      ];
    },

    editItem(item) {
      debugger;
      this.editedIndex = this.desserts.indexOf(item);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

