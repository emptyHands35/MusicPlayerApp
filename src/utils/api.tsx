import axios from 'axios';

const url = 'https://itunes.apple.com/search'
export const pinpoint = axios.create({
    baseURL: url,
});