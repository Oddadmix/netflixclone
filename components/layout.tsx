import Logo from './logo';
import '../app/globals.css';

export default function Layout({
  children,
  extraClasses,
}: {
  children: React.ReactNode;
  extraClasses?: string;
}) {
  return (
    <div className={`flex min-h-screen flex-col ${extraClasses}`}>
      <div className='min-h-screen bg-black bg-opacity-50'>
        <div className='flex p-4'>
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
}
