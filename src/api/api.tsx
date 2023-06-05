import axios from 'axios';

const production = `https://slashbk.shop/api/v1`;
const local = `http://localhost:5600/api/v1`;

export const axiosHttpClient = axios.create({baseURL: production}) ;