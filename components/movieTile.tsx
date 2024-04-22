import { Movie } from '@/types/movie';
import { useRouter } from 'next/router';

export default function MovieTile({ movie }: { movie?: Movie }) {
  const router = useRouter();

  return (
    <div className='w-56 h-32 hover:scale-150 transition '>
      <img
        src={movie?.Poster}
        className='w-56 h-32'
      />
      <div className='bg-black'>
        <div className='flex'>
          <button
            onClick={() => {
              router.push(`/dashboard/movie/${movie?.imdbID}`);
            }}
            type='button'
            className='text-white border border-gray-40 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-play'
              viewBox='0 0 16 16'
            >
              <path d='M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z' />
            </svg>
            <span className='sr-only'>Icon description</span>
          </button>

          <button
            type='button'
            className='ml-4 text-white border border-gray-40 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 18'
            >
              <path d='M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z' />
            </svg>
            <span className='sr-only'>Icon description</span>
          </button>
        </div>
        {/* <div className='text-white'>{movie?.Title}</div> */}
      </div>
    </div>
  );
}
