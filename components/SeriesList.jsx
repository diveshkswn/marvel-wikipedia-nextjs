import { Button } from '@chakra-ui/react';
import { useRef } from 'react';
import styles from '../styles/SeriesList.module.css';
import SeriesCard from './SeriesCard';

export default function SeriesList({ seriesData }) {
  const scrollRef = useRef();

  function handleScrollLeft() {
    scrollRef.current.scrollBy({
      left: 800,
      behaviour: 'smooth',
    });
  }

  function handleScrollRight() {
    scrollRef.current.scrollBy({
      left: -800,
      behaviour: 'smooth',
    });
  }
  function populateSeries(series) {
    return (
      <SeriesCard
        key={series.id}
        title={series.title}
        thumbnail={`${series.thumbnail.path}.jpg`}
      />
    );
  }
  return (
    <>

      <div className={styles.ScrollButtons}>
        <Button colorScheme="blue" variant="ghost" fontSize="3xl" onClick={handleScrollRight}>{'<'}</Button>
        <Button colorScheme="blue" variant="ghost" fontSize="3xl" onClick={handleScrollLeft}>{'>'}</Button>
      </div>

      <div ref={scrollRef} className={styles.SeriesListContainer}>
        {seriesData.map(populateSeries)}
      </div>
    </>
  );
}
