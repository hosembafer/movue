<template>
  <svg
    :width="size"
    :height="height"
    viewBox="0 0 24 18"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    <defs>
      <mask :id="maskId">
        <path
          :d="STAR_PATH"
          fill="white"
        />
      </mask>
    </defs>

    <g :mask="`url(#${maskId})`">
      <rect
        x="0"
        y="0"
        :width="24 * clamped"
        height="18"
        :fill="color"
      />
    </g>

    <path
      :d="STAR_PATH"
      fill="transparent"
      :stroke="color"
      :stroke-width="2"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const STAR_PATH =
  'M11.4833 14.0819C11.8011 13.8901 12.1989 13.8901 12.5167 14.0819L16.151 16.2754C16.9083 16.7325 17.8425 16.0535 17.6416 15.192L16.6771 11.0578C16.5928 10.6963 16.7156 10.3178 16.9962 10.0748L20.2086 7.29189C20.8772 6.71268 20.5198 5.61442 19.6384 5.53964L15.4109 5.18098C15.0413 5.14962 14.7194 4.91629 14.5747 4.57479L12.9207 0.672371C12.5761 -0.140657 11.4239 -0.140658 11.0793 0.67237L9.42532 4.57479C9.28058 4.91629 8.95871 5.14962 8.58914 5.18098L4.36163 5.53964C3.4802 5.61442 3.1228 6.71268 3.79139 7.29189L7.00379 10.0748C7.28436 10.3178 7.40721 10.6963 7.32287 11.0578L6.35841 15.192C6.15745 16.0535 7.09168 16.7325 7.849 16.2754L11.4833 14.0819Z';

type Props = {
  fraction: number;
  size?: number;
  color?: string;
  idSuffix?: string | number;
};

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#FFD700',
});

const clamped = computed(() => Math.max(0, Math.min(1, props.fraction)));
const height = computed(() => (props.size / 24) * 18);

const maskId = `star-mask-${Math.random().toString(36).slice(2)}${props.idSuffix ?? ''}`;
</script>
