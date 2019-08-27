 <template>
    <v-container class="my-2">
        <v-card flat class="ma-3">
            <v-layout row wrap>
                <v-flex xs12 md2>
                    <div class="caption grey--text">UserName</div>
                    <div>Zubair</div>
                </v-flex>
                <v-flex xs12  md6>
                    <div class="caption grey--text">Progress</div>
                    <div>Progress Bar</div>
                </v-flex>
                <v-flex xs6 md2>
                    <div class="caption grey--text">Chips Left</div>
                    <div>33.56 cr</div>
                </v-flex>
                <v-flex xs6 md2>
                    <div class="caption grey--text">Call</div>
                    <div>90213222575</div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</tempalte>

<script>
    export default{
        data(){
            return : {
                distributors : [
                    {
                        id: 1 , userName : "ABC", progress : 60, chipsLeft : 3000, call : "9021322575"
                    },{
                        id: 2 , userName : "XYZ", progress : 50, chipsLeft : 40000, call : "9021322575"

                    },{
                        id: 3 , userName : "CDF", progress : 50, chipsLeft : 5000, call : "9021322575"
                    }
                ];
            }
        }
    }
</script>
