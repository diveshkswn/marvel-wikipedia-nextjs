/* eslint-disable max-len */
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Skeleton, SkeletonCircle, SkeletonText, Box,
} from '@chakra-ui/react';
import { getSeriesByCharacterId, getCharacterById } from '../../utils/apiCreator';
import SeriesList from '../../components/SeriesList';
import styles from '../../styles/character[id].module.css';

export default function CharacterDetail(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  function skeleton() {
    return (
      <Box padding="6" boxShadow="lg">
        <SkeletonCircle size="300" />
        <SkeletonText mt="4" noOfLines={5} spacing="10" />
      </Box>
    );
  }

  useEffect(() => {
    async function fetchData() {
      const charId = router.query.id;
      const seriesRes = await fetch(getSeriesByCharacterId(charId));
      const seriesDataResult = await seriesRes.json();
      const characterRes = await fetch(getCharacterById(charId));
      const characterDataResult = await characterRes.json();
      if (!characterDataResult || (characterDataResult.code !== 200 && characterDataResult.code !== 201)) {
        router.push('/');
      } else {
        setCharacterData(characterDataResult.data.results[0]);
        setSeriesData(seriesDataResult.data.results);
      }

      setLoading(false);
    }

    if (router.isReady) { fetchData(); }
  }, [router]);

  // const { characterData, seriesData } = props;

  if (loading) return skeleton();

  return (
    <div className={styles.CharacterContainer}>
      <div className={styles.CharacterImgContainer}>
        <div className={styles.CharacterImg}>
          <Image src={`${characterData?.thumbnail.path}.jpg`} layout="fill" objectFit="cover" alt="img" />
        </div>
        <div className={styles.CharacterName}>{characterData?.name}</div>
      </div>

      <div className={styles.CharacterDetailsContainer}>
        <div className={styles.CharacterDescription}>
          <h2>Description</h2>
          {characterData?.description ? characterData?.description : 'No Description Available' }
        </div>
        <div className={styles.CharacterSeriesContainer}>
          <div className={styles.CharacterSeriesContainerHeader}>
            Character Series
          </div>

          <div className={styles.CharacterSeries}>
            <SeriesList seriesData={seriesData} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const seriesRes = await fetch(getSeriesByCharacterId(context.params.id));
//   const seriesData = await seriesRes.json();
//   const characterRes = await fetch(getCharacterById(context.params.id));
//   const characterData = await characterRes.json();
//   if (!seriesData || (seriesData.code !== 200 && seriesData.code !== 201)) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       characterData: characterData.data.results[0],
//       seriesData,
//     }, // will be passed to the page component as props
//   };
// }
