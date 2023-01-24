<template>
  <v-app id="inspire">
    <v-app-bar color="blue darken">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Asset Management</v-toolbar-title>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-divider></v-divider>
    <v-navigation-drawer v-model="drawer">
      <v-card class="mx-auto" width="300">
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Dashboard" to="Dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-home" title="Assets" to="/assets"></v-list-item>
          <v-list-item prepend-icon="mdi-home" title="Incidents" to="/incidents"></v-list-item>

          <v-list-group value="Settings">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-wrench" title="Settings"></v-list-item>
            </template>

            <v-list-item v-for="item in  settings" :key="item.title" :to="item.link">
              <!-- <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon> -->

              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>{{ item.icon }}</v-icon>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="error" @click="logout">
            <v-icon icon="mdi-login"></v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Footer from './Footer.vue'
import router from '../../router/router'
export default {
  components: {
    Footer
  },
  data: () => ({
    drawer: null,
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    settings: [
      { title: 'General', icon: 'mdi-wrench', link: 'settings' }
      // [title: '', 'mdi-plus-outline' ],
      // ['Users', 'mdi-file-outline'],
      // ['Update', 'mdi-update'],
      // ['Delete', 'mdi-delete'],
    ],
  }),

  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then((res) => {
        this.$toast.success(res.data.message, {
            position: 'top'
          })
          router.push('/login')
          // this.loading = false
      })
      
    }
  }

}
</script>