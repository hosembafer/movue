import { tmdbAPI } from '@/api/tmdb';
import type {
  DiscoverMoviesQuery,
  Genre,
  ListingResponse,
  Movie,
  MovieCredits,
  MovieVideo,
  PopularMoviesQuery,
  SearchMoviesQuery,
} from './movie.types';

export const searchMovies = (query: SearchMoviesQuery): Promise<ListingResponse<Movie>> =>
  tmdbAPI.get('/search/movie', {
    params: query,
  });

export const fetchPopularMovies = (query: PopularMoviesQuery): Promise<ListingResponse<Movie>> =>
  tmdbAPI.get('/movie/popular', {
    params: query,
  });

export const fetchGenres = (): Promise<ListingResponse<Genre, 'genres'>> => tmdbAPI.get('/genre/movie/list');

export const fetchDiscoverMovies = (query: DiscoverMoviesQuery): Promise<ListingResponse<Movie>> =>
  tmdbAPI.get('/discover/movie', {
    params: query,
  });

export const fetchMovieDetails = (movieId: string): Promise<Movie> => tmdbAPI.get(`/movie/${movieId}`);

export const fetchMovieCredits = (movieId: string): Promise<MovieCredits> => tmdbAPI.get(`/movie/${movieId}/credits`);

export const fetchMovieVideos = (movieId: string): Promise<ListingResponse<MovieVideo>> =>
  tmdbAPI.get(`/movie/${movieId}/videos`);
