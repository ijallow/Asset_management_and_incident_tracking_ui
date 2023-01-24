import axios from 'axios'
// import ApiService from '../../services/ApiService'
// impot ApiService

const API_URL = 'http://localhost:5000/'

const categoryModule = {
  namspaced: true,
  state() {
    return {
      category: [],
    }
  },
  mutations: {
    addCategories(state, data) {
      return (state.categories = data)
    }
  },
  actions: {
    // async getCategories(context){
    //   await ApiService.get('categories')
    //     .then((res) => {
    //       context.commit('addCategories', res.data)
    //     }).catch((err) => {
    //       console.log(err)
    //     }) 
    // },
    async getCategories(context) {
      return await axios.get(API_URL + 'categories')
        .then((res) => {
          context.commit('addCategories', res.data)
          return res
        }).catch((err) => {
          console.log(err)
        })
    },
    async addCategory(context, payload) {
      await axios.post(API_URL + 'categories', payload)
        .then((data) => {
          console.log('payload' + payload)
        })
    },
  },
  getters: {
    types(state) {
      return state.categories
    }
  }
}

export default categoryModule