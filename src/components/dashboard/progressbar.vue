<template>
    <v-container>
        <v-layout>
            <v-switch class="ml-5" label="Chips" color="info" value="info" hide-details></v-switch>
            </v-layout>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap class="text-end caption">
            <v-flex xs3>2k BDT</v-flex>
            <v-flex xs3>3k BDT</v-flex>
            <v-flex xs3>4k BDT</v-flex>
            <v-flex xs3>5k BDT</v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm12>
                <v-progress-linear dark v-model="skill" height="30"  rounded reactive
                color="green darken-2">
                    <template>  
                        <strong>4 cr</strong>
                </template>
            </v-progress-linear>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="text-end caption">
            <v-flex xs3>2 cr</v-flex>
            <v-flex xs3>3 cr</v-flex>
            <v-flex xs3>4 cr</v-flex>
            <v-flex xs3>5 cr</v-flex>
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
    data(){
      return {
        switch: true,
        skill : 60
      }
    }
}
</script>
<style scoped>
</style>
