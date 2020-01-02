import axios from 'axios'
const http = axios.create({
    timeout: 3000,
    baseURL: 'http://localhost:6666/api/resource'
})

export default http