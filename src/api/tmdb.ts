import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUwMTcwZGFlNTJmNzAxMDA4MTAwMjQ0ZjkxZDk4NSIsIm5iZiI6MTc1NjkwNjQ4OS44MDcwMDAyLCJzdWIiOiI2OGI4NDNmOWU4MjNlYzFjOGM5YmVlODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.w3ZXJhSALz1yzV1bNaVYf361thimfIu1BWFDQO4j1KM';

export const tmdbAPI = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

tmdbAPI.interceptors.response.use((response) => {
  return response.data;
});
