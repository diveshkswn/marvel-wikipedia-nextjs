import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderTitle}>
        <div className={styles.LogoImg}>
          <Image src="/marvel-logo.png" layout="fill" objectFit="fill" alt="LOGO" />
        </div>
        <Text fontSize="30px">Wikipedia</Text>
      </div>

    </div>
  );
}
