import axios from 'axios'

const BASE_URL = 'https://localhost:44379'

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 12000
})

export default request