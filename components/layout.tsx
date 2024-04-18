import Logo from './logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex p-4'>
        <Logo />
      </div>
      {children}
    </div>
  );
}
