import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const login = (data) => api.post('/auth/login', data);
export const getPizzas = () => api.get('/pizzas');
export const createOrder = (data) => api.post('/orders', data);
export const getOrders = () => api.get('/orders');
