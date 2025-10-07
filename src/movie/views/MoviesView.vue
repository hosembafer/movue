<template>
  <div
    style="display: flex; flex-direction: column; height: 100%"
    id="infinite-scroll"
  >
    <MovieFilters
      v-model:keyword="keyword"
      v-model:genreId="genreId"
      :genres="genres"
      @filters-changed="onFiltersChanged"
    />
    <n-infinite-scroll
      :distance="120"
      v-on:load="loadMore"
      style="height: 100%"
    >
      <MovieList
        :movies="data"
        :onLoadMore="loadMore"
        :isLoading="isLoading"
      />
    </n-infinite-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MovieFilters from '../components/movie-filters.vue';
import MovieList from '../components/movie-list.vue';
import { fetchDiscoverMovies, fetchGenres, searchMovies, fetchPopularMovies } from '../movie.requests';
import type { Movie } from '../movie.types';
import { useMovieStore } from '../movie.store';
import { storeToRefs } from 'pinia';
import { moviesQueryCache } from '../movies.query-cache';

const MOVIE_CACHE_TTL_MS = 60_000;

const data = ref<Movie[]>([]);
const page = ref(0);
const hasMore = ref(true);
const keyword = ref('');
const genreId = ref<number>();

fetchPopularMovies({ page: 1 }).then(({ results }) => {
  data.value = results;
});

const isLoading = ref(false);

const onFiltersChanged = () => {
  document.querySelector('#infinite-scroll .n-scrollbar-container')!.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  data.value = [];
  page.value = 0;
  loadMore();
};

const loadMore = () => {
  if (isLoading.value || !hasMore.value) {
    return;
  }
  isLoading.value = true;
  const nextPage = ++page.value;
  const key = ['movies', keyword.value, genreId.value, nextPage];

  const getData = () => {
    if (keyword.value) {
      return searchMovies({
        page: nextPage,
        query: keyword.value,
      });
    } else if (genreId.value) {
      return fetchDiscoverMovies({
        page: nextPage,
        with_genres: genreId.value,
      });
    } else {
      return fetchPopularMovies({
        page: nextPage,
      });
    }
  };

  moviesQueryCache.process(key, MOVIE_CACHE_TTL_MS, getData).then(({ results, total_pages }) => {
    data.value = [...data.value, ...results];
    hasMore.value = total_pages > page.value;
    isLoading.value = false;
  });
};

const movieStore = useMovieStore();
const { genres } = storeToRefs(movieStore);
const { setGenres } = movieStore;

fetchGenres().then(({ genres }) => {
  setGenres(genres);
});
</script>
