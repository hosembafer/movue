<template>
  <n-flex
    vertical
    class="container"
    :align="`center`"
    :size="20"
  >
    <n-skeleton class="cover" />

    <n-flex
      :align="`center`"
      :size="8"
      class="rating-row"
    >
      <n-skeleton
        v-for="star in 5"
        :key="star"
        circle
        class="rating-star"
      />
      <n-skeleton
        text
        class="rating-number"
      />
    </n-flex>

    <n-skeleton
      text
      class="title"
    />

    <n-flex
      :align="`center`"
      justify="center"
      wrap
      :size="12"
      class="tags"
    >
      <n-skeleton
        v-for="tag in 3"
        :key="tag"
        class="tag"
      />
    </n-flex>

    <n-skeleton class="favorite" />

    <n-flex
      vertical
      :size="8"
      class="overview"
    >
      <n-skeleton
        v-for="line in 3"
        :key="line"
        text
        class="overview-line"
      />
    </n-flex>

    <n-skeleton class="button" />

    <n-skeleton
      text
      class="section-title"
    />

    <div class="trailer">
      <n-skeleton class="trailer-player" />
      <n-skeleton
        text
        class="trailer-caption"
      />
    </div>

    <n-skeleton
      text
      class="section-title"
    />

    <n-flex
      justify="center"
      wrap
      :size="16"
      class="cast-grid"
    >
      <div
        v-for="item in 4"
        :key="item"
        class="cast-item"
      >
        <n-skeleton class="cast-avatar" />
        <n-skeleton
          text
          class="cast-name"
        />
      </div>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 600px;
  align-self: center;
  margin: 0 auto;
  padding: 0 16px 40px;
}

.cover {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 11 / 17;
  border-radius: 16px;
}

.rating-row {
  width: 100%;
  justify-content: center;
}

.rating-star {
  width: 32px;
  height: 32px;
}

.rating-number {
  width: 64px;
}

.title {
  width: 90%;
  height: 32px;
}

.tags {
  width: 100%;
}

.tag {
  width: 96px;
  height: 28px;
  border-radius: 999px;
}

.favorite {
  width: 200px;
  height: 44px;
  border-radius: 22px;
}

.overview {
  width: 100%;
}

.overview-line {
  width: 100%;
}

.button {
  width: 220px;
  height: 44px;
  border-radius: 12px;
}

.section-title {
  width: 140px;
  height: 32px;
  align-self: flex-start;
}

.trailer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.trailer-player {
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 12px;
}

.trailer-caption {
  width: 60%;
}

.cast-grid {
  width: 100%;
}

.cast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.cast-avatar {
  width: 120px;
  height: 120px;
  border-radius: 10px;
}

.cast-name {
  width: 110px;
}
</style>
