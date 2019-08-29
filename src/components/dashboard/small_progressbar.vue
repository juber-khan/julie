<template>
    <v-container>
        <v-progress-linear dark v-model="this.chips.progress" disabled height="20" rounded reactive
        :color="getColor(this.chips)">
            <template>
            <strong>{{ Math.ceil(this.chips.chipsLeft) }} cr</strong>
        </template>
      </v-progress-linear>
        <v-flex sm12>
            <div class="text-right">{{this.chips.totalChips}} cr </div>
        </v-flex>
    </v-container> 
</template>
<script>
export default {
    props : [
        'chips',
    ],
    methods:{
            getColor : function(item){
                        return item.color;
                    }
    },
    computed : {
        
    }
}
</script>
