import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Binvited</title>
        <meta name="description" content="The next best thing since Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-red-700">Imagine if Snapchat had events.</h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
