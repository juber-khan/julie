<template>
    <v-container>
        <v-layout row wrap class="text-end">
            <v-flex xs3>2 lakh cr</v-flex>
            <v-flex xs3>2 lakh cr</v-flex>
            <v-flex xs3>2 lakh cr</v-flex>
            <v-flex xs3>2 lakh cr</v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm12>
                <v-progress-linear dark v-model="skill" height="20" rounded reactive
                color="green">
                    <template>  
                </template>
            </v-progress-linear>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="text-end">
            <v-flex xs3>A</v-flex>
            <v-flex xs3>B</v-flex>
            <v-flex xs3>C</v-flex>
            <v-flex xs3>D</v-flex>
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
        skill : 60
      }
    }
}
</script>
