import Layout from '@/components/layout';
import { Movie } from '@/types/movie';
import { GetServerSidePropsContext } from 'next';

export default function Page({ data }: { data: Movie }) {
  return (
    <Layout extraClasses='bg-black'>
      <div className='p-4'>
        <h1 className='text-4xl mb-3 text-white text-center'>{data.Title}</h1>
        <p className='text-white mb-3  text-center'>{data.Plot}</p>
        <img
          className='text-center w-80 mx-auto'
          src={data.Poster}
          alt={data.Title}
        />
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Fetch data from external API
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=76e3e39&i=${context!.params?.id}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
