import axios from 'axios'
import instance from '../../plugins/axios'
// import AuthService from '../../services/authService'
import ApiService from '../../services/ApiService'
import jwtService from '../../services/jwtService'
// impot jwtService
const API_URL = 'http://localhost:5000/'
let tokenstr = 'sss'

// impor axios
const auth = {
  namespaced: true,
  state: {
    loggedIn: jwtService.getToken() ? true : false,
    success: false,
    error: []
  },

  actions: {
    async login(context, payload) {
      //  return await ApiService.post(API_URL + 'login', {
      //   payload,
      //   headers: {
      //     'Content-type': 'application/json',
      //     Authorization: ApiService.getHeader()
      //   }
      //  })
      return await axios.post(API_URL + 'login', payload)
        .then((res) => {
          if (res.data.message == 'success') {
            // console.log(res.data.access_token)
            context.commit('loginSuccess', res.data)
          }
          return res
        })
    },

    async logout(context) {
      return await instance.post(API_URL + 'logout')
        .then((res) => {
          context.commit('logout')
          return res
        })
    }
  },

  mutations: {
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.success = true,
        jwtService.saveToken(user.access_token)
    },

    loginFailure(state, error) {
      state.loggedIn = false;
      state.error.push(error.message)
    },

    logout(state) {
      state.loggedIn = false
      jwtService.removeToken()
    }
  },

  getters: {
    isLoggedIn(state) {
      return state.loggedIn
    }
  }
}

export default auth
