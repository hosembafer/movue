<template>
  <n-card
    class="card"
    :bordered="false"
    header-style="padding: 16px; padding-bottom: 0;"
    content-style="padding: 16px;"
    footer-style="padding: 16px; padding-top: 0;"
  >
    <template #header>
      <RouterLink
        :to="`/movies/${movie.id}`"
        class="card__title"
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
      <p class="overview">
        {{ movie.overview }}
      </p>
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

.card__title {
  color: inherit;
  text-decoration: none;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  white-space: normal;
}

.cover {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
}

.overview {
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  white-space: normal;
}
</style>
