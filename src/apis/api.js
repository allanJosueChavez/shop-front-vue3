import axios from 'axios'

export default axios.create  ({
//    baseURL: 'https://jsonplaceholder.typicode.com/posts',
   // baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    baseURL: 'http://localhost:3000/',
    timeout: 1000
    
})