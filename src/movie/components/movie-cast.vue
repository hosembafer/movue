<template>
  <div class="cast-container">
    <n-carousel
      :space-between="10"
      slides-per-view="auto"
      centered-slides
      draggable
      show-arrow
      :show-dots="false"
      style="padding-bottom: 30px"
    >
      <n-carousel-item
        style="width: 30%"
        v-for="castMember in orderedCastMembers"
        :key="castMember.id"
      >
        <div class="item">
          <img
            :src="getImageUrl(castMember.profile_path)"
            class="avatar"
          />
          <n-text>{{ castMember.name }} ({{ castMember.character }})</n-text>
        </div>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { MovieCredits } from '../movie.types';
import { getImageUrl } from '../movie.utils';

const orderedCastMembers = computed(() => [...credits.cast].sort((a, b) => a.order - b.order));

type Props = {
  credits: MovieCredits;
};
const { credits } = defineProps<Props>();
</script>

<style>
.cast-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 6px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 180px;
  align-items: center;
  text-align: center;
}
</style>
