import Head from 'next/head';
import { useState } from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';

export default function Layout({ children }) {
  const [theme, setTheme] = useState(false);
  return (

    <div className={`${styles.MainContainer}  ${theme ? 'dark' : ''}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
        <source type="video/mp4" src="/1564676115-marvel.mp4" />
      </video>

      <div className={styles.Content}>
        <Header setTheme={setTheme} />
        {children}
      </div>

      <div className={styles.Footer}>
        <Footer />
      </div>

    </div>
  );
}
