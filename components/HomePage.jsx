/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import {
  Input, InputGroup, InputLeftElement, Button,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import CharacterCard from './CharacterCard';
import { getCharacterByLimit, getCharacterByNameAndLimit, getCharacterByLimitOffset } from '../utils/apiCreator';

export default function HomePage(props) {
  const { characterData } = props;
  const [moreDataloading, setMoreDataloading] = useState(false);
  const [searchLoading, setSeachLoading] = useState(false);
  const [characterList, SetCharacterList] = useState([...characterData.data.results]);
  const searchStringRef = useRef();
  const [filteredCharacterList, SetFilteredCharacterList] = useState([]);
  const offsetCountref = useRef(20);

  async function loadMoreCharacters() {
    setMoreDataloading(true);
    const res = await fetch(`${getCharacterByLimitOffset(20, offsetCountref.current)}&orderBy=-modified`);
    const moreLoadedData = await res.json();
    setMoreDataloading(false);
    SetCharacterList((val) => [...val, ...moreLoadedData?.data.results]);
    offsetCountref.current += 20;
  }

  function populateCharacters(eachCharacter) {
    return (
      <CharacterCard
        data-testid="characterCard"
        key={eachCharacter.id}
        id={eachCharacter.id}
        name={eachCharacter.name}
        seriesCount={eachCharacter.series?.available}
        thumbNail={eachCharacter.thumbnail.path}
      />
    );
  }

  async function displaySearchedCharacters() {
    setSeachLoading(true);
    const res = await fetch(getCharacterByNameAndLimit(searchStringRef.current.value, 10));
    const searchedData = await res.json();
    setSeachLoading(false);
    SetFilteredCharacterList([...searchedData?.data.results]);
  }

  function clearSeachHandler() {
    SetFilteredCharacterList([]);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.SearchAndResultContainer}>
          <div className={styles.ResultCountContainer}>
            Found
            {' '}
            { filteredCharacterList.length > 0 ? filteredCharacterList.length : characterList?.length}
            {' '}
            characters
          </div>
          <div className={styles.SearchContainer}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input ref={searchStringRef} type="text" placeholder="Search for any character" />
            </InputGroup>
            <Button colorScheme="teal" variant="outline" isLoading={searchLoading} onClick={displaySearchedCharacters}>
              Search
            </Button>
            {filteredCharacterList.length > 0 && (
              <Button colorScheme="red" variant="ghost" onClick={clearSeachHandler}>
                Clear
              </Button>
            ) }

          </div>
        </div>

        <div className={styles.CharactersList}>
          { filteredCharacterList.length > 0 ? filteredCharacterList.map(populateCharacters) : characterList.map(populateCharacters)}
        </div>

        <Button
          size="md"
          height="48px"
          width="70%"
          border="2px"
          bg="InfoBackground"
          color="black"
          borderColor="green.500"
          isLoading={moreDataloading}
          onClick={loadMoreCharacters}
        >
          Load More Characters
        </Button>

      </div>
    </>
  );
}
