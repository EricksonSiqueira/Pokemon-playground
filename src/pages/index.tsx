import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Pokedex made to search all the pokemons info!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-red-900 text-9xl">Welcome to the best Pokedex!</h1>
      </main>
    </>
  );
}
