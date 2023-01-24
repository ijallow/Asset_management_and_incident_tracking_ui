import axios from 'axios'
import jwtService from '../services/jwtService'

const tokenstr = 'sss'

// export default axios.create({
//   baseURL: '127.0.0.1:5000',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer' + tokenstr
//   }
// })

const instance = axios.create({
  baseURL: '127.0.0.1:5000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwtService.getToken()
  }
})

export default instance