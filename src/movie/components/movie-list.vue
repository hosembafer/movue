<template>
  <n-grid
    responsive="screen"
    cols="l:4 s:2 xs:1"
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
    class="movie-list__loading text"
  >
    Loading...
  </div>
</template>

<script lang="ts" setup>
import type { Movie } from '../movie.types';
import MovieCard from './movie-card.vue';

defineProps<{
  movies: Movie[];
  isLoading: boolean;
}>();
</script>

<style scoped>
.movie-list__loading {
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
}
</style>
