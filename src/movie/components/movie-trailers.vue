<template>
  <div style="width: 100%">
    <n-carousel
      show-arrow
      show-dots
      dot-placement="bottom"
      dot-type="line"
    >
      <n-carousel-item
        v-for="video in normalizedVideos"
        :key="video.id"
      >
        <iframe
          style="aspect-ratio: 3 / 2; width: 100%; max-width: 100%"
          :src="getYoutubeVideoUrl(video.key)"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <n-text>{{ video.name }} ({{ getYearFromDateString(video.published_at) }})</n-text>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import { getYoutubeVideoUrl } from '@/shared/utils/youtube';
import type { MovieVideo } from '../movie.types';
import { getYearFromDateString } from '@/shared/utils/formatting';
import { computed } from 'vue';

type Props = {
  videos: MovieVideo[];
};
const { videos } = defineProps<Props>();

const normalizedVideos = computed(() => videos.slice(0, 5));
</script>
