import MovieTile from './movieTile';

export default function MoviesCategory({
  category,
  movies,
}: {
  category: string;
  movies: any[];
}) {
  return (
    <div>
      <h2 className='text-white'>{category}</h2>
      <div className='flex flex-row gap-2'>
        {movies.map((movie) => {
          return <MovieTile movie={movie} />;
        })}
      </div>
    </div>
  );
}
