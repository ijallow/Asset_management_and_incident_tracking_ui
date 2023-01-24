<template>
  <v-container>
    <v-card>
    <v-tabs
      v-model="tab"
      bg-color="blue darken-3"
    >
      <v-tab value="one">Category</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <category />
          <!-- as -->
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  </v-container>
</template>

<script>
import Category from './Category.vue'
  export default {
    components: {
      Category
    },
    data: () => ({
      tab: null,
    }),
  }
</script>