import 'globalStyles.css';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import { Noto_Sans } from '@next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

NProgress.configure({ showSpinner: false });

const notoSans = Noto_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
