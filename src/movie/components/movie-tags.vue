<template>
  <n-space style="margin-top: 20px">
    <n-tag
      v-for="tag in tags"
      :key="tag.id"
      :bordered="false"
      :type="tag.type === 'critical' ? 'error' : undefined"
    >
      {{ tag.name }}
    </n-tag>
  </n-space>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Movie, MovieTagEntry } from '../movie.types';

type Props = {
  movie: Movie;
};

const { movie } = defineProps<Props>();

const tags = computed(() => {
  const localTags: MovieTagEntry[] = [];

  if (movie.adult) {
    localTags.push({
      id: '18plus',
      name: '18+',
    });
  }

  localTags.push(...movie.genres);

  return localTags;
});
</script>
