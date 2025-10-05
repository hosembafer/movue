import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movies',
    },
    {
      path: '/movies',
      component: () => import('@/movie/views/MoviesView.vue'),
    },
    {
      path: '/movies/:movieId',
      component: () => import('@/movie/views/MovieDetailsView.vue'),
    },
  ],
});

export default router;
