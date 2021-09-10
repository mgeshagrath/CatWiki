import axios from 'axios';

export const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  timeout: 15000,
});
