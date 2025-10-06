<template>
  <n-grid
    cols="3"
    x-gap="30px"
    y-gap="30px"
    style="padding-top: 20px"
  >
    <n-gi
      v-for="movie in movies"
      :key="movie.id"
    >
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
