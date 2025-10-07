export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  adult: boolean;
  imdb_id: string;
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
} & {
  total_pages: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
  order: number;
  profile_path: string;
};

export type MovieCredits = {
  cast: CastMember[];
};

export type MovieTagEntry = {
  id: number | string;
  name: string;
  type?: 'critical';
};

export type MovieVideo = {
  id: number;
  name: string;
  key: string;
  site: 'Youtube' | string;
  published_at: string;
};
