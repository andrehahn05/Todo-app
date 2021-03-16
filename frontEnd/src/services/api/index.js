import axios from 'axios';

const api = axios.create({
//  baseURL:'http://172.17.0.2:3001'
 baseURL:'http://localhost:3001'
})

export default api;