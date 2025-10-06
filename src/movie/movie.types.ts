export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type MoviesQuery = {
  page: number;
  query: string;
};

export type ListingResponse<T, RK extends string = 'results'> = {
  [K in RK]: T[];
};

export type Genre = {
  id: number;
  name: string;
};
