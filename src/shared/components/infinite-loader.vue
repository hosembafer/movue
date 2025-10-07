<template>
  <slot />
  <div
    ref="sentinelRef"
    class="infinite-loader-sentinel"
    aria-hidden="true"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useIntersectionObserver } from '@/shared/composables/use-intersection';

const props = defineProps<{
  load: () => void | Promise<void>;
  disabled?: boolean;
  threshold?: number | string;
}>();

const sentinelRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const isPending = ref(false);

const resolveRootMargin = () => {
  const value = props.threshold ?? 200;
  return typeof value === 'number' ? `${value}px 0px` : value;
};

const triggerLoad = () => {
  if (!isVisible.value || props.disabled || isPending.value) {
    return;
  }

  isPending.value = true;
  Promise.resolve(props.load()).finally(() => {
    isPending.value = false;
  });
};

const { observe } = useIntersectionObserver((entries) => {
  isVisible.value = entries.some((entry) => entry.isIntersecting);
  if (isVisible.value) {
    triggerLoad();
  }
});

const startObserving = () => {
  observe(sentinelRef.value, {
    root: null,
    rootMargin: resolveRootMargin(),
  });
};

watch(sentinelRef, startObserving);
watch(
  () => props.threshold,
  () => {
    startObserving();
  },
);
</script>

<style scoped>
.infinite-loader-sentinel {
  width: 100%;
  height: 1px;
}
</style>
