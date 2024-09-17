import axios from 'axios';

const apiUsuarios = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default apiUsuarios;
