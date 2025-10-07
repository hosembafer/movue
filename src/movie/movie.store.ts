import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Genre } from './movie.types';

export const useMovieStore = defineStore('movie', () => {
  const genres = ref<Genre[]>([]);
  const favoriteIds = ref<Set<string>>(new Set(JSON.parse(localStorage.getItem('favoriteMovieIds') ?? '[]')));

  function setGenres(value: Genre[]) {
    genres.value = value;
  }

  function toggleFavorite(movieId: string) {
    if (favoriteIds.value.has(movieId)) {
      favoriteIds.value.delete(movieId);
    } else {
      favoriteIds.value.add(movieId);
    }
    /*
      Alternative solution:
      - Use store middleware with action whitelists like redux-persist with preferred driver
    */
    localStorage.setItem('favoriteMovieIds', JSON.stringify(Array.from(favoriteIds.value.values())));
  }

  return { setGenres, genres, favoriteIds, toggleFavorite };
});
