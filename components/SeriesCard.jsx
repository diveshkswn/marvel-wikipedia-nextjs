import Image from 'next/image';
import styles from '../styles/SeriesCard.module.css';

export default function SeriesCard({ title, thumbnail }) {
  return (
    <div className={styles.SeriesCardContainer}>
      <div className={styles.SeriesCardImg}>
        <Image src={thumbnail} layout="fill" alt={title} />
      </div>
      <div className={styles.SeriesTitle}>
        {title}
      </div>
    </div>
  );
}
