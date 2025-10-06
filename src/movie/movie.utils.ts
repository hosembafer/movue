import type { Genre, Movie } from './movie.types';

export const getImageUrl = (path: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const genreToOption = (genre: Genre) => ({
  label: genre.name,
  value: genre.id,
});
