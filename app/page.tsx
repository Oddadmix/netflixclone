import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Input
        id='email'
        label='Email or Phone'
      />

      <Button label='Sign In' />
    </Layout>
  );
}
