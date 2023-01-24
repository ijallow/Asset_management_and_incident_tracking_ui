import axios from 'axios'
import jwtService from '../../services/jwtService'
import router from '../../router/router'

const API_URL = 'http://localhost:5000/'


const assetModule = {
  namspaced: true, 
  state() {
    return {
      assets: [],
      asset : null
    }
  },
  mutations: {
    addAssets(state, data){
      return (state.assets = data)
    },
    addAsset(state, data){
      return (state.asset = data)
    }
  },
  actions: {
    async getAssets(context){
      await axios.get(API_URL + 'assets',{
        headers: {
          'Authorization': `Bearer${jwtService.getToken()}`
        }
      })
        .then((res) => {
          context.commit('addAssets', res.data)
        }).catch((err) => {
          console.log(err)
        })
    },  

    async getAsset(context,payload){
    return  await axios.get(API_URL + 'asset/' + payload)
        .then((res) => {
          // console.log(res)
          context.commit('addAsset', res.data)
          return res
        }).catch(err => {
          console.log(err)
        })
    }
  },

  // async addAsset(context, payload) {
  //   return await axios.post(API_URL + 'assets', payload)
  //     .then((res) => {
  //       console.log('adding', res)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // },

  getters: {
    assets(state){
      return state.assets
    },
    asset(state){
      return state.asset
    }
  }
}

export default assetModule