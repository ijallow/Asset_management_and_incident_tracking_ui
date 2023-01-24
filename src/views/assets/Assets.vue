<template>
  <v-toolbar title="Assets" color="dark">
    <v-btn color="primary" @click="createDialog" size="small">
      Add
      <i class="fa-solid fa-plus"></i>
    </v-btn>
  </v-toolbar>
  <v-table fixed-header="">
    <thead>
      <tr>
        <th>ID</th>
        <th class="text-left">
          Name
        </th>
        <th>Serial Number</th>
        <th>Model</th>
        <th>Created at</th>
        <th>
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in assets" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.serial_number }}</td>
        <td>{{ item.model }}</td>
        <td>{{ item.created_at }}</td>
        <td>
          <v-btn variant="" @click="editDialog(item)">
            <i class="fas fa-edit"></i>
          </v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" icon="mdi-dots-horizontal">
              </v-icon>
            </template>
            <v-list-item>
              <router-link :to="{name: 'viewAsset', params: {assetId: item.id}}">
                <v-list-item-title>View Assets</v-list-item-title>
              </router-link>
            </v-list-item>
            <!-- <v-list-item v-for="item in items" :key="item.title">
              <router-link :to="{name: item.link + item.id}">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item> -->
          </v-menu>
          <!-- <span class="mdi-symbols-outlined"> -->
          <!-- more_vert -->
          <!-- </span> -->
          <!-- <router-link to="/assets/add">
            <v-btn icon="md-user-plus"></v-btn>
          </router-link>
          <v-btn href="" variant="text" icon="mdi-delete" color="error" /> /
          <v-btn variant="text">
            assign
          </v-btn> -->
        </td>
      </tr>
    </tbody>
  </v-table>

  <v-dialog v-model="dialog" max-width="60%">
    <v-card>
      <v-toolbar color="blue darken-3" v-show="!editMode" title="Add Category"></v-toolbar>
      <v-toolbar color="blue darken-3" v-show="editMode" title="Edit Category"></v-toolbar>
      <v-form @submit.prevent="editMode ? updateAsset() : addAsset()" v-model="valid">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="form.name" :rules="nameRules" :counter="10" label="name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="form.serial_number" :rules="nameRules" :counter="10" label="serial number" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field v-model="form.model" :rules="nameRules" :counter="10" label="model" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select 
                  :items="types" 
                  item-title="name" 
                  item-text="name" 
                  label="name*" 
                  item-value="id" 
                  v-model="form.category_id" 
                  required>
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn v-show="!editMode" color="primary" class="mr-4" type="submit">
            add
          </v-btn>
          <v-btn v-show="editMode" color="primary" class="mr-4" type="submit">
            update
          </v-btn>z
          <v-btn variant="text" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <!-- <Dialogue /> -->

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Dialogue from '../../components/Dialogue.vue'
export default {
  components: {
    Dialogue
  },
  data() {
    return {
      dialog: false,
      editMode: false,
      loading: false,
      form: new Form({
        name: '',
        serial_number: '',
        model: '',
        category_id: ''
      }),

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      api_url: 'http://127.0.0.1:5000',
      items: [
        { title: 'Assign Asset', link: 'Assets' },
        { title: 'View Asset', link: 'viewAssets' }
        // { title: 'Click Me' },
        // { title: 'Click Me 2' },
      ],
      // assets: {},
    }
  },

  created() {
    // this.$store.dispatch('assets')
    // this.loadAssets()
  },
  mounted() {
    this.loadAssets()
    this.loadCategories()
    // this.loadCategories()
  },

  methods: {
    loadAssets() {
      this.loading = true
      this.$store.dispatch('getAssets').then(() => {
        this.loading = false
      })
    },
    loadCategories(){
      this.loading = true
      this.$store.dispatch('getCategories').then(() => {
        this.loading = false
      })
    },  
    editDialog(item) {
      this.editMode = true
      this.dialog = true
      this.form.reset()
      console.log('editing', item)
      this.form.fill(item)
    },
    createDialog() {
      // console.log('creating')
      this.editMode = false
      this.dialog = true
      this.form.reset()
    },

    addAsset() {
      this.loading = true
      this.$store.dispatch('addAsset', this.form).then((res) => {
        this.loading = false
        this.$toast.success('Asset added successfully', { 
          position: 'top'
        })
        this.dialog = false
        this.loadCategories()
      }).catch((err) => {
        console.log('error loading category' + err)
      })
      
    },

    updateAsset() {
      console.log('editing asset')
    }
  },

  computed: {
    ...mapGetters(['assets', 'types']),
    // ...mapActions(['getCategories'])

  }

}
</script>

<style lang="scss" scoped>
v-list-item-title {
  text-decoration: none;
}
</style>>

