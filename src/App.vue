<script setup lang="ts">
import { RouterView } from 'vue-router';
import { darkTheme } from 'naive-ui';
import { ref, watch } from 'vue';
import AppHeader from '@/shared/components/app-header.vue';

type ThemeKey = 'dark' | 'light';
const mediaColorSchema = window.matchMedia('(prefers-color-scheme: dark)');

const theme = ref<ThemeKey>(mediaColorSchema.matches ? 'dark' : 'light');
const themeColors: Record<ThemeKey, string> = {
  dark: '#101014',
  light: '#ffffff',
};

const updateThemeMetaColor = (nextTheme: ThemeKey) => {
  const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.content = themeColors[nextTheme];
  }
  document.documentElement.classList.toggle('dark', nextTheme === 'dark');
};

updateThemeMetaColor(theme.value);

watch(theme, updateThemeMetaColor);

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

mediaColorSchema.addEventListener('change', (event) => {
  theme.value = event.matches ? 'dark' : 'light';
});
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : null">
    <n-layout class="app-layout">
      <n-layout-header class="app-layout__header">
        <AppHeader
          :theme="theme"
          @toggle-theme="toggleTheme"
        />
      </n-layout-header>
      <n-layout-content class="app-layout__content">
        <main class="app-content page-container">
          <RouterView v-slot="{ Component, route }">
            <Transition
              name="route-slide"
              mode="out-in"
            >
              <component
                :is="Component"
                :key="route.fullPath"
              />
            </Transition>
          </RouterView>
        </main>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout__header {
  border-bottom: 1px solid var(--n-border-color, rgba(224, 224, 230, 0.4));
  padding: 0;
  display: flex;
}

.app-layout__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}

.route-slide-enter-active,
.route-slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.route-slide-enter-from,
.route-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.route-slide-leave-from,
.route-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
