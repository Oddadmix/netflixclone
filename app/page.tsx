import Button from '@/components/button';
import Input from '@/components/input';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-grey'>
      <h1 className='text-3xl text-black'>Test</h1>

      <Input
        id='email'
        label='Email or Phone'
      />

      <Button label='Sign In' />
    </main>
  );
}
