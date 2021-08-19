import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CharacterCard.module.css';

export default function CharacterCard(props) {
  const {
    id, name, seriesCount, thumbNail,
  } = props;

  return (
    //
    <Link passHref href={`/character/${id}`}>
      <div className={styles.CharacterCardContainer} data-testid="characterCard">
        <div className={styles.CardImage}>

          <Image src={`${thumbNail}.jpg`} layout="fill" objectFit="cover" alt="Character img" />
        </div>
        <div className={styles.CardName}>
          <h2>{name}</h2>
        </div>
        <div className={styles.ComicsCount}>
          Series count
          {' '}
          {seriesCount}
        </div>
      </div>
    </Link>
  );
}
