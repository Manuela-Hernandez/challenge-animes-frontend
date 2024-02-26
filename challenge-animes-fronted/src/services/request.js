import axios from 'axios';
const baseUrl = 'http://localhost:3000';


export async function getAnimes(page = 1, searchTitle = "") {
    const response = await axios.get(`${baseUrl}/api/animes?page=${page}&q=${searchTitle}`);
    return response;
}

export async function getAnimesTop() {
    const response = await axios.get(`${baseUrl}/api/animes/top`);
    return response;
}