import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieTile from './movieTile';

export default function MoviesCategory({
  category,
  movies,
}: {
  category: string;
  movies: any[];
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <h2 className='text-white'>{category}</h2>
      <Carousel responsive={responsive}>
        {movies.map((movie) => {
          return <MovieTile movie={movie} />;
        })}
      </Carousel>
    </div>
  );
}
