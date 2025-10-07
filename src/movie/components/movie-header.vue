<template>
  <header style="align-self: stretch; display: flex; align-items: center; margin-bottom: 16px">
    <n-button
      quaternary
      size="large"
      @click="router.back()"
    >
      <n-space :align="'center'">
        <n-icon size="24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M244 400L100 256l144-144"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M120 256h292"
            ></path>
          </svg>
        </n-icon>
        Back
      </n-space>
    </n-button>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
