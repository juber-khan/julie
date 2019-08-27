<template>
    <v-container>
        <v-progress-linear dark height="20" rounded reactive
        color="green">
            <template>  
        </template>
      </v-progress-linear>
        <v-layout justify-end>
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
    }
}
</script>
