import Layout from '@/components/layout';
import MoviesCategory from '@/components/moviesCategory';
import useMoviesFetchHook from '@/hooks/moviesFetchHook';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('Session', session, status);

  useEffect(() => {
    if (session === null) {
      router.push('/auth');
    }
  }, [session]);

  const harryPotterMovies = useMoviesFetchHook({ title: 'Harry Potter' });

  const homeAloneMovies = useMoviesFetchHook({ title: 'Home Alone' });

  return (
    <Layout extraClasses='bg-black'>
      <div className='mt-6 p-6'>
        <MoviesCategory
          category='Harry Potter'
          movies={harryPotterMovies?.Search || []}
        />
      </div>

      <div className='mt-24 p-6'>
        <MoviesCategory
          category='Home Alone'
          movies={homeAloneMovies?.Search || []}
        />
      </div>
    </Layout>
  );
}
