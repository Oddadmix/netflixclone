import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Auth() {
  const [authType, setAuthType] = useState('signin');

  const router = useRouter();

  const isSignIn = authType === 'signin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const res = await signIn('credentials', {
      username: email,
      password,
      callbackUrl: '/dashboard',
    });
    console.log(res);
    if (res?.error) {
      alert(res.error);
    } else {
      // router.push('/dashboard');
    }
  };

  return (
    <Layout
      extraClasses='
    bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/c89f232d-3b67-43b0-8109-921534917808/CA-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg")]
    '
    >
      <div className='flex flex-col bg-black bg-opacity-50 max-w-[450px] mx-auto p-16'>
        <h1 className='text-4xl text-white mb-6'>
          {isSignIn ? 'Sign In' : 'Register'}
        </h1>

        <div className='mb-6'>
          <Input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label='Email'
            id='email'
          />
        </div>

        <div className='mb-6'>
          <Input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label='Password'
            id='password'
          />
        </div>

        <div className='mb-6'>
          <Button
            onClick={handleSignIn}
            label={`${isSignIn ? 'Sign In' : 'Create Account'}`}
          />
        </div>
        <div className='mb-6'>
          <p className='text-white'>
            {isSignIn ? (
              <>
                <span className='opacity-60'>New to Netflix? </span>
                <a
                  className='cursor-pointer'
                  onClick={() => {
                    setAuthType(authType === 'signin' ? 'signup' : 'signin');
                  }}
                >
                  Sign up now
                </a>
              </>
            ) : (
              <a
                className='cursor-pointer'
                onClick={() => {
                  setAuthType(authType === 'signin' ? 'signup' : 'signin');
                }}
              >
                <span>Already a member? </span>
              </a>
            )}
          </p>
        </div>
      </div>
    </Layout>
  );
}
