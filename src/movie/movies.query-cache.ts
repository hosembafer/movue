import { QueryCacheProvider } from '@/shared/query-cache-provider';
import type { ListingResponse, Movie } from './movie.types';

export const moviesQueryCache = new QueryCacheProvider<ListingResponse<Movie>>('movies');
