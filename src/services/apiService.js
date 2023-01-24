import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtService from './jwtService';

//api url to be later extracted as a service
const API_URL = 'http://localhost:5000/'


export const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    Vue.axios.interceptors.request.use(
      function (config) {
        config.withCredentials = true
        return config
      }, function (err) {
        return Promise.reject(err)
      })
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtService.getToken()}`
    Vue.axios.defaults.headers.common["X-REMOTE-DOMAIN"] = "1";
  },

  getHeader() {
    return {
      Authorization: `Bearer ${jwtService.getToken()}`
    }
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default {ApiService}

// export const CategoryService = {
//   query(page, params){
//     return ApiService.query('categories', {
//       params: params
//     })
//   }
// }

