import axios from 'axios' //o axios é

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default api