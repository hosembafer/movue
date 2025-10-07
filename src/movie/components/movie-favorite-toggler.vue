<template>
  <n-button
    @click="() => toggleFavorite(movieId)"
    :type="isFavorite ? 'error' : 'success'"
  >
    {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
  </n-button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useMovieStore } from '../movie.store';

const { movieId } = defineProps<{ movieId: string }>();

const { favoriteIds, toggleFavorite } = useMovieStore();
const isFavorite = computed(() => favoriteIds.has(movieId));
</script>
