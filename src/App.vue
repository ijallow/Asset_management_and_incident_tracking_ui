<template>
  <router-view :key="$route.path"></router-view>
   <!-- <Footer /> -->
</template>

<script>
import Footer from './components/layouts/Footer.vue'
export default{
  components: {
    Footer
  }
}
</script>
<style>
</style>
