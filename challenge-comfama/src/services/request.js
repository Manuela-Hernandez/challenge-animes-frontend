import axios from 'axios';
const baseUrl = 'https://api.jikan.moe/v4/anime';

export function getAnimes() {
    return axios.get(baseUrl)
  }