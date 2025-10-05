<template>
  <n-button
    v-on:click="showMessage()"
    type="primary"
    >asdf</n-button
  >

  Movie ID: {{ $route.params.movieId }}
</template>

<script lang="ts" setup>
function showMessage() {
  alert('Message 1');
}
</script>
