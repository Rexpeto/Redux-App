import axios from 'axios';

const clientAxios = axios.create({
	baseURL: 'http://192.168.1.106:3000',
});

export default clientAxios;
