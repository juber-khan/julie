import axios from 'axios'
import API_BASE_URL from '../constants/api.constant'

export default () => {
  return axios.create({
    baseURL: API_BASE_URL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
