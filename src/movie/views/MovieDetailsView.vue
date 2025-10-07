<template>
  <template v-if="movie && credits && videos">
    <n-flex
      style="flex-direction: column; max-width: 600px; place-self: center"
      :align="`center`"
    >
      <MovieCover
        :movie="movie"
        style="margin-bottom: 20px"
      />
      <MovieRating :rating="movie.vote_average / 2" />
      <n-h1 style="text-align: center">{{ movie.title }} ({{ getYearFromDateString(movie.release_date) }})</n-h1>
      <MovieTags :movie="movie" />
      <MovieFavoriteToggler :movie-id="movieId" />

      <div style="padding: 20px">
        <n-text>
          {{ movie.overview }}
        </n-text>
      </div>

      <ActionButton
        text="Open in IMDb"
        :link="getImdbMovieUrl(movie.imdb_id)"
        style="margin-bottom: 20px"
      />

      <n-h2>Trailers</n-h2>
      <MovieTrailers :videos="videos" />

      <n-h2>Cast</n-h2>
      <MovieCast :credits="credits" />
    </n-flex>
  </template>
  <template v-else>
    <n-skeleton
      text
      :repeat="2"
    />
    <n-skeleton
      text
      style="width: 60%"
    />
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MovieCover from '../components/movie-cover.vue';
import type { Movie, MovieCredits, MovieVideo } from '../movie.types';
import { useRoute } from 'vue-router';
import { fetchMovieCredits, fetchMovieDetails, fetchMovieVideos } from '../movie.requests';
import MovieRating from '../components/movie-rating.vue';
import MovieCast from '../components/movie-cast.vue';
import MovieTags from '../components/movie-tags.vue';
import ActionButton from '@/shared/components/action-button.vue';
import { getImdbMovieUrl } from '@/shared/utils/imdb';
import { getYearFromDateString } from '@/shared/utils/formatting';
import MovieTrailers from '../components/movie-trailers.vue';
import MovieFavoriteToggler from '../components/movie-favorite-toggler.vue';

const route = useRoute();
const movieId = route.params.movieId as string;
const movie = ref<Movie>();
fetchMovieDetails(movieId).then((response) => {
  movie.value = response;
});

const credits = ref<MovieCredits>();
fetchMovieCredits(movieId).then((response) => {
  credits.value = response;
});

const videos = ref<MovieVideo[]>();
fetchMovieVideos(movieId).then(({ results }) => {
  videos.value = results;
});
</script>
