import { tmdbAPI } from '@/api/tmdb';
import type { Genre, ListingResponse, Movie, MoviesQuery } from './movie.types';

export const fetchMovies = (query: MoviesQuery): Promise<ListingResponse<Movie>> => {
  return tmdbAPI.get('/search/movie', {
    params: query,
  });
};

export const fetchPopularMovies = (): Promise<ListingResponse<Movie>> => {
  return tmdbAPI.get('/movie/popular');
};

export const fetchGenres = (): Promise<ListingResponse<Genre, 'genres'>> => {
  return tmdbAPI.get('/genre/movie/list');
};
