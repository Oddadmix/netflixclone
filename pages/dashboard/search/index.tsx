import Layout from '@/components/layout';
import MovieTile from '@/components/movieTile';
import useMoviesFetchHook from '@/hooks/moviesFetchHook';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();

  const movies = useMoviesFetchHook({
    title: searchParams?.get('q') || '',
  });

  return (
    <Layout extraClasses='bg-black'>
      <div className='grid grid-cols-2 gap-2 p-6'>
        {movies.Search?.map((movie) => {
          return (
            <div
              className='mb-10'
              key={movie.Title}
            >
              <MovieTile
                key={movie.imdbID}
                movie={movie}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
