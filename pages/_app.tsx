import { SessionProvider } from 'next-auth/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
