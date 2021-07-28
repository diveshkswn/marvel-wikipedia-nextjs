import Image from 'next/image';
import styles from '../styles/CharacterCard.module.css';

export default function CharacterCard() {
  return (
    <div className={styles.CharacterCardContainer}>
      <div className={styles.CardImage}>

        <Image src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" layout="fill" objectFit="cover" alt="Character img" />
      </div>
      <div className={styles.CardName}>
        <h2>Iron Man</h2>
      </div>
      <div className={styles.ComicsCount}>
        Comics count 200
      </div>
    </div>
  );
}
