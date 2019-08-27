<template>
    <v-container>
        <v-progress-linear dark v-model="this.chips.progress" disabled height="20" rounded reactive
        color="green">
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
    computed : {
        getColor : function(){
            let color = this.chips.progrss > 50 ? 'green' : 'red';
            return color;
        }
    }
}
</script>
