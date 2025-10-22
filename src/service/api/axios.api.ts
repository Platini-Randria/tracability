import axios from 'axios';

const cosmoWEB = axios.create({
	baseURL: `${import.meta.env.VITE_COSMO_URL_API}`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});


const cosmoAPI = axios.create({
	baseURL: `${import.meta.env.VITE_COSMO_URL_API}`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

// cosmoAPI.interceptors.request.use(
// 	async (config) => {
// 		const token = await AuthService.getToken();
// 		if (token) config.headers.Authorization = `Bearer ${token}`;

// 		return config;
// 	},
// 	(error) => {
// 		Promise.reject(error);
// 	}
// );

export { cosmoWEB, cosmoAPI };
