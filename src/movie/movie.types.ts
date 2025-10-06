export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type SearchMoviesQuery = {
  page: number;
  query: string;
};

export type PopularMoviesQuery = {
  page: number;
};

export type DiscoverMoviesQuery = {
  page: number;
  with_genres?: Genre['id'];
};

export type ListingResponse<T, RK extends string = 'results'> = {
  [K in RK]: T[];
};

export type Genre = {
  id: number;
  name: string;
};
