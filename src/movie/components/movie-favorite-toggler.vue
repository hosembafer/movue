<template>
  <n-button
    class="favorite-button"
    :class="animationState"
    @click="handleToggle"
    :type="isFavorite ? 'error' : 'success'"
    :aria-label="buttonLabel"
  >
    {{ buttonLabel }}
  </n-button>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useMovieStore } from '../movie.store';

const { movieId } = defineProps<{ movieId: string }>();

const { favoriteIds, toggleFavorite } = useMovieStore();
const isFavorite = computed(() => favoriteIds.has(movieId));
const buttonLabel = computed(() =>
  isFavorite.value ? 'Remove from favorites' : 'Add to favorites'
);

const animationState = ref<'is-adding' | 'is-removing' | null>(null);
let animationTimeout: ReturnType<typeof setTimeout> | null = null;

const handleToggle = () => {
  toggleFavorite(movieId);
};

watch(isFavorite, (favorite) => {
  animationState.value = favorite ? 'is-adding' : 'is-removing';

  if (animationTimeout !== null) {
    clearTimeout(animationTimeout);
  }

  animationTimeout = setTimeout(() => {
    animationState.value = null;
    animationTimeout = null;
  }, 400);
});

onBeforeUnmount(() => {
  if (animationTimeout !== null) {
    clearTimeout(animationTimeout);
  }
});
</script>
<style scoped>
.favorite-button.is-adding {
  animation: favorite-add 0.4s ease;
}

.favorite-button.is-removing {
  animation: favorite-remove 0.4s ease;
}

@keyframes favorite-add {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes favorite-remove {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-3px);
  }
  60% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
