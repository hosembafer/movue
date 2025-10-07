import { QueryCacheProvider } from '@/shared/query-cache-provider';
import type { ListingResponse, Movie, MovieCredits, MovieVideo } from './movie.types';

export const moviesQueryCache = new QueryCacheProvider<ListingResponse<Movie>>('movies');

export const movieByIdQueryCache = new QueryCacheProvider<Movie>('movieById');

export const movieVideosByIdQueryCache = new QueryCacheProvider<ListingResponse<MovieVideo>>('movieVideosById');

export const movieCreditsByIdQueryCache = new QueryCacheProvider<MovieCredits>('movieCreditsById');
