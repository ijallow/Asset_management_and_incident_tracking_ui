<template>
  <div class="py-4">
    <v-img class="mx-auto mb-10" max-width="228" src="../../../src/assets/GPA LOGO.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-form @submit.prevent="login">

        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
          variant="outlined" v-model="user.email"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <!-- <a
                  class="text-caption text-decoration-none text-blue"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Forgot login password?</a> -->
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible" v-model="user.password"></v-text-field>



        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <!-- <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text> -->
        </v-card>

        <v-btn block class="mb-8" color="blue" size="large" variant="tonal" :disabled="loading"
          type="submit">
          <div class="text-center">
            <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
          </div>
          Log In
        </v-btn>
      </v-form>

      <!-- <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text> -->
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import router from "../../router/router.js";
import jwtService from '../../services/jwtService';
import store from "../../store/index.js";
export default {
  data: () => ({
    visible: false,
    user: new Form({
      email: '',
      password: ''
    }),
    loading: false,
  }),
  name: "Login",
  methods: {
    login() {
      if (this.user.email && this.user.password) {
        this.loading = true
        this.$store.dispatch('auth/login', this.user).then((res) => {
          this.$toast.success(res.data.message, {
            position: 'top'
          })
          router.push('/dashboard')
          this.loading = false
        })
        // .catch((err) => {
        //   this.$toast.error(err.response.data.message,{
        //     position: 'top'
        //   })
        //   this.loading = false
        // })
        
      }
    }
  },
  computed: {
    loggedIn() {
      return store.getters['auth/isLoggedIn']
    }
  },
  created() {
    if (this.loggedIn) {
      // console.log('a'+this.loggedIn)
      this.$router.push('/dashboard');
    }
  },
  mounted() {
    if (this.loggedIn) {
      // console.log('a'+this.loggedIn)
      this.$router.push('/dashboard');
    }
    // console.log('logged in state' + store.state['auth/loggedIn'])
  }

}
</script>

<style scoped>

</style>