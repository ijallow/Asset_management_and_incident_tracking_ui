//not using it at the moment
import axios from 'axios'

const API_URL = 'http://localhost:5000/'

class AuthService {
  login(user) {
    axios.post(API_URL + 'users/login', user)
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        return res.data
      })
    return {}
    // .catch((err) => {
    //     console.log(err)
    // })
  }
  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'users', user)
  }
}

export default new AuthService()