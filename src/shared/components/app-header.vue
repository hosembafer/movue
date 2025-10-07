<template>
  <header class="app-header">
    <div class="app-header__left">
      <n-button
        v-if="canGoBack"
        quaternary
        circle
        size="large"
        @click="router.back()"
        aria-label="Go back"
      >
        <n-icon size="22">
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M244 400 100 256l144-144"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
            />
            <path
              d="M120 256h292"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
            />
          </svg>
        </n-icon>
      </n-button>
      <RouterLink
        class="app-header__title"
        to="/movies"
      >
        Movie Explorer
      </RouterLink>
    </div>

    <n-button
      quaternary
      circle
      size="large"
      @click="emit('toggle-theme')"
      :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <n-icon size="22">
        <svg
          v-if="isDark"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z"
            fill="currentColor"
          />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h-2M4 12H2m15.071-7.071-1.414 1.414M8.343 15.657l-1.414 1.414m0-11.314 1.414 1.414m9.9 9.9 1.414 1.414M12 22v-2m0-16V2"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </n-icon>
    </n-button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  theme: 'dark' | 'light';
}>();

const emit = defineEmits<{
  (event: 'toggle-theme'): void;
}>();

const route = useRoute();
const router = useRouter();

const canGoBack = computed(() => route.name === 'movie-details');
const isDark = computed(() => props.theme === 'dark');
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  gap: 12px;
  width: 100%;
}

.app-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-header__title {
  font-size: 18px;
  text-decoration: none;
  color: inherit;
}
</style>
