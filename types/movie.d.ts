export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  imdbRating: string;
};
