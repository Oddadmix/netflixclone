import { Movie } from '@/types/movie';
import { GetServerSidePropsContext } from 'next';

export default function Page({ data }: { data: Movie }) {
  return (
    <div>
      <h1>{data.Title}</h1>
      <p>{data.Plot}</p>
      <img
        src={data.Poster}
        alt={data.Title}
      />
    </div>
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
