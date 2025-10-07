import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/movies',
    },
    {
      path: '/movies',
      name: 'movies-list',
      component: () => import('@/movie/views/MoviesView.vue'),
    },
    {
      path: '/movies/:movieId',
      name: 'movie-details',
      component: () => import('@/movie/views/MovieDetailsView.vue'),
    },
  ],
});

export default router;
