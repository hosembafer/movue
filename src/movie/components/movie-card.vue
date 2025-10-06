<template>
  <n-card
    :bordered="false"
    style="border-radius: 16px; overflow: hidden"
  >
    <template #header>
      <RouterLink
        :to="`/movies/${movie.id}`"
        style="color: inherit; text-decoration: none"
      >
        {{ movie.title }}
      </RouterLink>
    </template>
    <template #cover>
      <RouterLink :to="`/movies/${movie.id}`">
        <img :src="getImageUrl(movie.poster_path)" />
      </RouterLink>
    </template>
    <template #footer>
      {{ movie.overview }}
    </template>
    <MovieRating :rating="movie.vote_average / 2" />
    <template #header-extra> {{ getMovieReleaseYear(movie) }} </template>
  </n-card>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import type { Movie } from '../movie.types';
import { getImageUrl, getMovieReleaseYear } from '../movie.utils';
import MovieRating from './movie-rating.vue';

const { movie } = defineProps<{
  movie: Movie;
}>();
</script>
