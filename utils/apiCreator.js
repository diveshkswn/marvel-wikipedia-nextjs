/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import md5 from 'md5';

const URL = `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`;

export function getCharacterByLimit(limit) {
  const d = new Date();
  const timeStamp = d.getTime();
  const hashMessage = md5(`${timeStamp}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`);
  return `${URL}&limit=${limit}&ts=${timeStamp}&hash=${hashMessage}`;
}

export function getCharacterByNameAndLimit(name, limit) {
  const d = new Date();
  const timeStamp = d.getTime();
  const hashMessage = md5(`${timeStamp}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`);
  return `${URL}&limit=${limit}&ts=${timeStamp}&hash=${hashMessage}`;
}

export function getSeriesByCharacterId(characterId) {
  const SERIESURL = `https://gateway.marvel.com/v1/public/characters/${characterId}/series?apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`;
  const d = new Date();
  const timeStamp = d.getTime();
  const hashMessage = md5(`${timeStamp}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`);
  return `${SERIESURL}&ts=${timeStamp}&hash=${hashMessage}`;
}
