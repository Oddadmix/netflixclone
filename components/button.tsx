export default function Button({ label }: { label: string }) {
  return (
    <button
      type='button'
      className='px-6 py-3.5 text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center'
    >
      {label}
    </button>
  );
}
