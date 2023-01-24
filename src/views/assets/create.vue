<template>
  <v-card>
    <v-toolbar title="Add Asset"></v-toolbar>
    <!-- <v-divider></v-divider> -->
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field label="Name*" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field label="Serial Number" hint="example of helper text only on focus"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field label="model*" hint="example of persistent helper text" persistent-hint required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select :items="categories" item-text="name" label="categories*" return-object required></v-select>
        </v-col>
        <!-- <v-col cols="12" sm="6">
          <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-autocomplete
            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
            label="Interests" multiple></v-autocomplete>
        </v-col> -->
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn  @click="goBack">Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../../router/router'
export default {
  mounted() {
    this.loadCategories()
  },
  methods: {
    loadCategories() {
      this.$store.dispatch('getCategory')
    },
    goBack(){
      router.go(-1)
    }
  },
  computed: {
    ...mapGetters['category']
  }

}
</script>

<style>

</style>
