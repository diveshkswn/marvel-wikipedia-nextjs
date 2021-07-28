import Head from 'next/head';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';

export default function Layout({ children }) {
  return (

    <div className={styles.MainContainer}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
        <source type="video/mp4" src="/1564676115-marvel.mp4" />
      </video>

      <div className={styles.Content}>
        <Header />
        {children}
      </div>

      <div className={styles.Footer}>
        <Footer />
      </div>

    </div>
  );
}
