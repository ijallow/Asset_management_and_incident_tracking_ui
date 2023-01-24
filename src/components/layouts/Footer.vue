<template>
  <v-footer color="blue darken-3" app>
    <span class="white--text"
      >&copy; {{ current_year }} Gambia Ports Authority</span
    >
  </v-footer>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    current_year: moment().format("YYYY")
  })
};
</script>
<style scoped></style>
