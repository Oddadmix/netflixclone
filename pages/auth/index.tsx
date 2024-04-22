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
      router.push('/dashboard');
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', {
      callbackUrl: '/dashboard',
    });
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
          <hr className='mt-4 mb-4' />
          <button
            type='button'
            onClick={handleGoogleSignIn}
            className='text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2'
          >
            <svg
              className='w-4 h-4 me-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 19'
            >
              <path
                fill-rule='evenodd'
                d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                clip-rule='evenodd'
              />
            </svg>
            Sign in with Google
          </button>
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
