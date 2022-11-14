import axios from 'axios'

const baseURL = 'https://schoole-b8715-default-rtdb.firebaseio.com/'

export const instance = axios.create({baseURL})