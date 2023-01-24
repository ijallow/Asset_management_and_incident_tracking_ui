<template>
  <v-container>
    <v-toolbar title="Category">
      <v-btn color="primary" @click="createDialog" size="small">
        Add
        <i class="fa-solid fa-plus"></i>
      </v-btn>
    </v-toolbar>
    <v-table>
      <div v-if="loading" class="row text-center">

      </div>
      <thead>
        <tr>
          <th>ID</th>
          <th class="text-left">
            Name
          </th>
          <th>Created at</th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in types" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.created_at }}</td>
          <td>
            <v-btn color="primary" @click="editDialog(item)" size="small">
              <i class="fas fa-edit"></i>
            </v-btn>
            <v-btn href="" variant="text" icon="mdi-delete" color="error" @click="deleteCategory(item.id)" />
          </td>
        </tr>
      </tbody>
    </v-table>

    <!-- dialogue -->
    <v-dialog v-model="dialog" max-width="40%">
      <v-card>
        <v-toolbar color="primary" v-show="!editMode" title="Add Category"></v-toolbar>
        <v-toolbar color="primary" v-show="editMode" title="Edit Category"></v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="editMode ? updateCategory() : addCategory()" v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12" sm="6">
                  <v-text-field v-model="form.name" :rules="nameRules" :counter="10" label="name"
                    required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn v-show="!editMode" color="primary" class="mr-4" @click="addCategory" type="submit" :disabled="loading">
            <Spinner v-if="loading" />
            add
          </v-btn>
          <v-btn v-show="editMode" color="primary" class="mr-4" @click="updateCategory" type="submit"
            :disabled="loading">
            update
          </v-btn>
          <v-btn variant="text" @click="dialog = false" :disabled="loading">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    editMode: false,
    dialog: false,
    loading: false,
    form: new Form({
      name: ''
    }),
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
  }),
  mounted() {
    this.loadCategories()
  },

  methods: {
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
    loadCategories() {
      this.$store.dispatch('getCategories')
    },
    addCategory() {
      this.loading = true
      this.$store.dispatch('addCategory', this.form).then(() => {
        this.loading = false
        this.$toast.success('category added successfully', {
          position: 'top'
        })
        this.dialog = false
        this.loadCategories()
      }).catch((err) => {
        console.log('error loading category')
      })
    },
    updateCategory() {
      console.log('updateing')
    },
    deleteCategory(item) {
      this.$swal.fire({
        title: 'are you sure',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        //send request to the server
        if (result.value) {
          console.log('sendinggg')
          axios.delete(`http://localhost:5000/categories/${item}`)
            .then((res) => {
              if (res.status == 200) {
                this.$toast.success('item deleted', {
                  position: 'top'
                })
                this.loadCategories()
              }
            }).catch((err) => {
              console.log(err)
            })

        }
      })
    },
  },

  computed: {
    ...mapGetters(['types']),
  }

}
</script>