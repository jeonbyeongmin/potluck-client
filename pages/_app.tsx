import type { AppProps } from 'next/app';
import { Noto_Sans } from '@next/font/google';
import 'styles.css';

const notoSans = Noto_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
