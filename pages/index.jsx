import Head from 'next/head';
import { getCharacterByLimit } from '../utils/apiCreator';
import HomePage from '../components/HomePage';

export default function Home(props) {
  const { characterData } = props;
  return (
    <>
      <Head>
        <title>Marvel Wikipedia</title>
        <meta name="description" content="Marvel Wikipedia by Divesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage characterData={characterData} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${getCharacterByLimit(20)}&orderBy=-modified`);
  const data = await res.json();

  if (!data || (data.code !== 200 && data.code !== 201)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      characterData: data,
    },
    revalidate: 43200,
  };
}
