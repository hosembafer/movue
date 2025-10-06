import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Genre } from './movie.types';

export const useMovieStore = defineStore('movie', () => {
  const genres = ref<Genre[]>([]);

  function setGenres(value: Genre[]) {
    genres.value = value;
  }

  return { setGenres, genres };
});
