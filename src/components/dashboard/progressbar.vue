<template>
    <v-container>
        <v-layout>
            <v-switch class="ml-5" v-model="switch1" :label="getSwitchText()" color="info" hide-details>
            </v-switch>
            </v-layout>
        <v-divider class="my-3"></v-divider>
        <!-- <v-layout row wrap class="text-end caption">
            <v-flex xs3>2k BDT</v-flex>
            <v-flex xs3>3k BDT</v-flex>
            <v-flex xs3>4k BDT</v-flex>
            <v-flex xs3>5k BDT</v-flex>
        </v-layout> -->
        <v-layout>
            <v-flex xs12 sm12>
                <v-progress-linear dark v-model="skill" height="30"  rounded reactive
                color="green darken-2">
                    <template>  
                        <strong> {{ switch1 ? "4cr":"3k BDT"}}</strong>
                </template>
            </v-progress-linear>
            </v-flex>
        </v-layout>
        <v-layout v-if="switch1" row wrap class="text-end caption">
            <v-flex xs3>2 cr</v-flex>
            <v-flex xs3>3 cr</v-flex>
            <v-flex xs3>4 cr</v-flex>
            <v-flex xs3>5 cr</v-flex>
        </v-layout>
        <v-layout v-if="!switch1" row wrap class="text-end caption">
            <v-flex xs3>2k BDT</v-flex>
            <v-flex xs3>3k BDT</v-flex>
            <v-flex xs3>4k BDT</v-flex>
            <v-flex xs3>5k BDT</v-flex>
        </v-layout>
    </v-container> 
</template>
<script> 
export default {
    props : [
        'chips',
    ],
    computed : {
    },
    methods:{
        getSwitchText(){
            return this.switch1 ? "BDT" : "Chips";
        }
    },
    data(){
      return {
        switch1: false,
        skill : 60
      }
    }
}
</script>
<style scoped>
</style>
