<template>
  <a
    class="button"
    :href="link"
    target="_blank"
  >
    {{ text }}
  </a>
</template>
<script setup lang="ts">
type Props = {
  text: string;
  link: string;
};
const { text, link } = defineProps<Props>();
</script>
<style scoped>
.button {
  display: block;
  width: 100%;
  background-color: orange;
  color: var(--textColor1);
  width: 100%;
  padding: 8px 8px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
}
</style>
