import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../src/styles/globals.css'
import theme from '../src/styles/theme'
import { ThemeProvider } from 'styled-components'

import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const [top, setTop] = useState(true);
  const router = useRouter();

  const handleScroll = (e) => {
    if (e.target.scrollTop != 0 && top) {
      setTop(false);
    } else {
      if (e.target.scrollTop === 0 && router.asPath === "/") {
        setTop(true)
      }
    }
  }

  useEffect(() => {
    if (router.asPath === "/") {
      setTop(true);
    } else {
      setTop(false);
    }
  }, []);

  return (
    <div className='body' onScroll={handleScroll} style={{
      height: '100vh',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
    }}>
      <ThemeProvider theme={theme}>
        <Header top={top} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
