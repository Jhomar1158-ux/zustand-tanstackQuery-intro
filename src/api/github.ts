import axios from 'axios'

// De esta forma abstraemos la ruta RAIZ
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;