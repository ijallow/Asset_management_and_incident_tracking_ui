const ACCESS_TOKEN = 'access_token'
// const USER_ID = 'user_id'

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

export const saveToken = token => {
  return localStorage.setItem(ACCESS_TOKEN, token)
}

export const removeToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN)
}

export default { getToken, saveToken, removeToken}