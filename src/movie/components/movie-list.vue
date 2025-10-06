<template>
  <n-grid
    cols="3"
    x-gap="16px"
    y-gap="16px"
  >
    <n-gi v-for="movie in movies">
      <MovieCard :movie="movie" />
    </n-gi>
  </n-grid>
  <div
    v-if="isLoading"
    class="text"
  >
    Loading...
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '../movie.types';
import MovieCard from './movie-card.vue';

const { movies } = defineProps<{
  movies: Movie[];
  onLoadMore: VoidFunction;
  isLoading: boolean;
}>();
</script>
