import Logo from './logo';
import '../app/globals.css';
import Search from './search';
import { useSession } from 'next-auth/react';

export default function Layout({
  children,
  extraClasses,
  showSearch = true,
}: {
  children: React.ReactNode;
  extraClasses?: string;
  showSearch?: boolean;
}) {
  const { data } = useSession();

  return (
    <div className={`flex min-h-screen flex-col ${extraClasses}`}>
      <div className='min-h-screen bg-black bg-opacity-50'>
        <div className='flex justify-between p-4'>
          <Logo />
          {data && <div className='mt-7'>{showSearch && <Search />}</div>}
        </div>
        {children}
      </div>
    </div>
  );
}
