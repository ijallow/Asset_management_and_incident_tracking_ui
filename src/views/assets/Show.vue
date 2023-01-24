<template>
  <v-container fluid>
    <v-card>
      <v-toolbar title="Asset"></v-toolbar>
      <!-- <p>asset id{{ assetId }}</p> -->
      <div>
        <v-card width="400" title="Asset Info">
          <v-list-item>{{ asset.name }}</v-list-item>
          <v-list-item>{{ asset.model }}</v-list-item>
          <!-- <h3>Name: {{asset.name}}</h3>
          <h5>Model: {{asset.model}}</h5> -->
        </v-card>
      </div>
      <!-- <v-container>
        <v-layout row wrap>
       
          <v-flex xs12 sm12 md6>
           
            
          </v-flex>
          <v-flex xs12 sm12 md6>
          
            asdf
          </v-flex>
        </v-layout>
      </v-container> -->
      <v-card-actions class="mt-5">
        <v-btn @click="goBack">Back</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
// import { mapGetters } from 'vuex'
import router from '../../router/router'
export default {
  props: ['assetId'],
  data() {
    return {
      asset_id: this.assetId,
      asset: {},
    }
  },
  mounted() {
    this.$store.dispatch('getAsset', this.asset_id)
      .then((res) => {
        this.asset = res.data
        // console.log('res', this.as)
      })
  },

  methods: {
    goBack() {
      router.go(-1)
    }
  }

  // computed: {
  //   ...mapGetters['asset']
  // }
}
</script>