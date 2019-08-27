<template>
    <v-container>
        <v-progress-linear dark height="20" rounded reactive
        color="green">
            <template>
            
        </template>
      </v-progress-linear>
        <v-layout row wrap>
            <v-flex xs12>
                 <span>A</span>
                 <span>B</span>
                 <span>C</span>
                 <span>D</span>
            </v-flex>
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
