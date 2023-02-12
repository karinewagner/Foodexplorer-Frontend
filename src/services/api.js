import axios from 'axios'

export const api = axios.create({
  baseURL: "https://foodexplorer-api-p1j7.onrender.com"
})