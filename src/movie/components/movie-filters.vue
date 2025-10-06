<template>
  <n-flex style="gap: 20px; display: flex; padding: 20px">
    <n-input
      v-model:value="keyword"
      placeholder="Search by title"
      size="large"
      clearable
    />
    <n-select
      v-model:value="genreId"
      filterable
      clearable
      size="large"
      :options="genreOptions"
      :disabled="keyword.trim().length > 0"
    />
  </n-flex>
</template>

<script setup lang="ts">
import { debounce } from '@/shared/utils/debounce';
import { computed, watch } from 'vue';
import type { Genre } from '../movie.types';
import { genreToOption } from '../movie.utils';

const { genres } = defineProps<{
  genres: Genre[];
}>();

const emit = defineEmits<{
  (e: 'filters-changed'): void;
}>();

const genreOptions = computed(() => genres.map(genreToOption));

const triggerFiltersChanged = () => {
  emit('filters-changed');
};

const debouncedChange = debounce(triggerFiltersChanged, 700);

const keyword = defineModel<string>('keyword', { default: '' });
const genreId = defineModel<number>('genreId', { default: undefined });

watch(genreId, triggerFiltersChanged);

watch(keyword, () => {
  debouncedChange();
});
</script>
