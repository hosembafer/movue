<template>
  <n-card
    class="card"
    :bordered="false"
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
        <img
          class="cover"
          :src="getImageUrl(movie.poster_path)"
          loading="lazy"
        />
      </RouterLink>
    </template>
    <template #footer>
      {{ movie.overview }}
    </template>
    <MovieRating :rating="movie.vote_average / 2" />
    <template #header-extra> {{ getYearFromDateString(movie.release_date) }} </template>
  </n-card>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import type { Movie } from '../movie.types';
import { getImageUrl } from '../movie.utils';
import MovieRating from './movie-rating.vue';
import { getYearFromDateString } from '@/shared/utils/formatting';

const { movie } = defineProps<{
  movie: Movie;
}>();
</script>

<style scoped>
.card {
  border-radius: 16px;
  transition: margin-top 0.2s ease;

  &:hover {
    margin-top: -10px;
  }
}

.cover {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
}
</style>
