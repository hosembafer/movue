<template>
  <div class="rating">
    <Star
      v-for="i in maxStarsComputed"
      :key="i"
      :fraction="starFraction(i)"
      :idSuffix="i"
    />
    <span class="rating-number">{{ (rating * 2).toFixed(1) }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Star from './movie-star.vue';

type Props = {
  rating: number;
  maxStars?: number;
};

const props = withDefaults(defineProps<Props>(), {
  maxStars: 5,
});

const maxStarsComputed = computed(() => Math.max(1, props.maxStars));
const normalized = computed(() => Math.min(props.rating, maxStarsComputed.value));

const starFraction = (index: number) => {
  const value = normalized.value - (index - 1);
  if (value >= 1) return 1;
  if (value <= 0) return 0;
  return value;
};
</script>

<style scoped>
.rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.rating-number {
  margin-left: 6px;
  font-size: 14px;
  color: #555;
}
</style>
