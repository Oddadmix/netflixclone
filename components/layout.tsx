import Logo from './logo';
import '../app/globals.css';
import Search from './search';

export default function Layout({
  children,
  extraClasses,
  showSearch = true,
}: {
  children: React.ReactNode;
  extraClasses?: string;
  showSearch?: boolean;
}) {
  return (
    <div className={`flex min-h-screen flex-col ${extraClasses}`}>
      <div className='min-h-screen bg-black bg-opacity-50'>
        <div className='flex justify-between p-4'>
          <Logo />
          <div className='mt-7'>{showSearch && <Search />}</div>
        </div>
        {children}
      </div>
    </div>
  );
}
