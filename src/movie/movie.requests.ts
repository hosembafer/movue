import { tmdbAPI } from '@/api/tmdb';
import type {
  DiscoverMoviesQuery,
  Genre,
  ListingResponse,
  Movie,
  PopularMoviesQuery,
  SearchMoviesQuery,
} from './movie.types';

export const searchMovies = (query: SearchMoviesQuery): Promise<ListingResponse<Movie>> => {
  return tmdbAPI.get('/search/movie', {
    params: query,
  });
};

export const fetchPopularMovies = (query: PopularMoviesQuery): Promise<ListingResponse<Movie>> => {
  return tmdbAPI.get('/movie/popular', {
    params: query,
  });
};

export const fetchGenres = (): Promise<ListingResponse<Genre, 'genres'>> => {
  return tmdbAPI.get('/genre/movie/list');
};

export const fetchDiscoverMovies = (query: DiscoverMoviesQuery): Promise<ListingResponse<Movie>> => {
  return tmdbAPI.get('/discover/movie', {
    params: query,
  });
};
