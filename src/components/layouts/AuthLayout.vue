<template>
  <v-row>
    <v-col>
      <div class="d-flex align-center flex-column text-center" >
        <v-card
            width="600"
            title="Asset Management System"
            color="">

          <RouterView />
        </v-card>
      </div>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>
.flex-column{
  margin-top: 2%;
}
</style>