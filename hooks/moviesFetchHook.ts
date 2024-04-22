import { Movie } from '@/types/movie';
import { MoviesSearch } from '@/types/moviesSearch';
import { useEffect, useState } from 'react';

export default function useMoviesFetchHook({ title }: { title: string }) {
  const [moveis, setMovies] = useState<MoviesSearch>({} as MoviesSearch);

  const fetchMovies = async () => {
    return fetch(`https://omdbapi.com/?apikey=76e3e39&s=${title}`).then(
      (res) => {
        return res.json();
      }
    );
  };

  useEffect(() => {
    fetchMovies().then((movieRes: any) => {
      setMovies(movieRes);
    });
  }, []);

  return moveis;
}
