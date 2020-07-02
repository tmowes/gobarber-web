import axios from 'axios'
import process from 'process'

console.log('object', process.env.REACT_APP_API_URL)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export default api
