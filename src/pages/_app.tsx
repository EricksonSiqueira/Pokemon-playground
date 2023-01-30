import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from '@next/font/google';

// eslint-disable-next-line prettier/prettier, @typescript-eslint/quotes
const rubik = Rubik({
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/quotes
  subsets: ['latin'],
  // eslint-disable-next-line @typescript-eslint/quotes
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
    </>
  );
}
