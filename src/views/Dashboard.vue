<template>
  <v-row>
    <v-col cols="12" xs="12">
      <v-toolbar flat width="100%">
        <v-toolbar-title class="pl-3 banner-title blue--text">
          Dashboard
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="3" class="pt-2 mb-2">
      <v-card class="mx-auto" max-width="344" min-height="120" outlined color="#D1C4E9">
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="teal lighten-5" class="overflow-hidden mt-n3 elevation-6">
            <v-icon large color="blue darken-4 darken-2">
              mdi-truck-delivery
            </v-icon></v-list-item-avatar>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Total Assets
            </div>
            <v-list-item-subtitle>By DO</v-list-item-subtitle>
            <v-list-item-title class="text-h5 mb-1">
              1,000
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3" class="pt-2 mb-2">
      <v-card class="mx-auto" max-width="344" outlined color="#E0F2F1">
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="teal lighten-5" class="overflow-hidden mt-n3 elevation-6">
            <v-icon large color="blue darken-4 darken-2">
              mdi-truck-cargo-container
            </v-icon></v-list-item-avatar>
          <v-list-item-content>
            <div class="text-overline mb-4">
              TOTAL Assets Deployed
            </div>
            <v-list-item-subtitle>By DO</v-list-item-subtitle>
            <v-list-item-title class="text-h5 mb-1">
              10,000
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3" class="pt-2 mb-2">
      <v-card class="mx-auto" max-width="344" min-height="120" outlined color="#80D8FF">
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="teal lighten-5" class="overflow-hidden mt-n3 elevation-6">
            <v-icon large color="blue darken-4 darken-2">
              mdi-truck-delivery
            </v-icon></v-list-item-avatar>
          <v-list-item-content>
            <div class="text-overline mb-4">
              TOTAL Incidents Reported
            </div>
            <v-list-item-subtitle>By Cargo</v-list-item-subtitle>
            <v-list-item-title class="text-h5 mb-1">
              7,000
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3" class="pt-2 mb-2">
      <v-card class="mx-auto" max-width="344" outlined color="#80CBC4">
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="teal lighten-5" class="overflow-hidden mt-n3 elevation-6">
            <v-icon large color="blue darken-4 darken-2">
              mdi-truck-cargo-container
            </v-icon></v-list-item-avatar>
          <v-list-item-content>
            <div class="text-overline mb-4">
              TOTAL INCIDENTS RESOLVED
            </div>
            <v-list-item-subtitle>By Cargo</v-list-item-subtitle>
            <v-list-item-title class="text-h5 mb-1">
              5,000
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-row>
      <v-col cols="12" sm="6">
        <h2>6 days snapshot of total delivery count</h2>
        <canvas id="bar-chart"></canvas>
        <bar-chart />
      </v-col>
    </v-row> -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

  },
}
</script>

