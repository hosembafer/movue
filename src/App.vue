<script setup lang="ts">
import { RouterView } from 'vue-router';
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';
const mediaColorSchema = window.matchMedia('(prefers-color-scheme: dark)');

type ThemeKey = 'dark' | 'light';

const theme = ref<ThemeKey>(mediaColorSchema.matches ? 'dark' : 'light');

mediaColorSchema.addEventListener('change', (event) => {
  theme.value = event.matches ? 'dark' : 'light';
});
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : null">
    <RouterView />
  </n-config-provider>
</template>
