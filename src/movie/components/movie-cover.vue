<template>
  <img
    :src="getImageUrl(movie.poster_path)"
    class="cover"
  />
</template>

<script setup lang="ts">
import type { Movie } from '../movie.types';
import { getImageUrl } from '../movie.utils';

type Props = {
  movie: Movie;
};
const { movie } = defineProps<Props>();
</script>

<style scoped>
.cover {
  margin-top: 40px;
  max-width: 400px;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 11 / 17;
  align-self: center;
  place-self: center;
  display: flex;
  border-radius: 16px;
}
</style>
