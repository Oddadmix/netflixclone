import Layout from '@/components/layout';
import MoviesCategory from '@/components/moviesCategory';
import useMoviesFetchHook from '@/hooks/moviesFetchHook';

export default function Dashboard() {
  const harryPotterMovies = useMoviesFetchHook({ title: 'Harry Potter' });

  const homeAloneMovies = useMoviesFetchHook({ title: 'Home Alone' });

  return (
    <Layout extraClasses='bg-black'>
      <div className='mt-6'>
        <MoviesCategory
          category='Harry Potter'
          movies={harryPotterMovies?.Search || []}
        />
      </div>

      <div className='mt-24'>
        <MoviesCategory
          category='Home Alone'
          movies={homeAloneMovies?.Search || []}
        />
      </div>
    </Layout>
  );
}
