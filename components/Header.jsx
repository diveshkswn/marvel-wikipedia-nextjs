import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header(props) {
  const { setTheme } = props;
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderTitle}>
        <Link href="/" passHref>
          <div className={styles.LogoImg}>
            <Image src="/marvel-logo.png" layout="fill" objectFit="fill" alt="LOGO" />
          </div>
        </Link>
        <Text fontSize="30px">Wikipedia</Text>
        <SunIcon data-testid="themeButton" w={30} height={30} marginLeft="20" onClick={() => { setTheme((v) => !v); }} />
      </div>

    </div>
  );
}
