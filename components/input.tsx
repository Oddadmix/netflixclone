export default function Input({
  label,
  id,
  value,
  type = 'text',
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  type?: 'text' | 'password' | 'email';
  onChange: (e?: any) => void;
}) {
  return (
    <div className='relative'>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className='block text-white rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer'
        placeholder=' '
      />
      <label
        htmlFor={id}
        className='absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
      >
        {label}
      </label>
    </div>
  );
}
