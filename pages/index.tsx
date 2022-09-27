import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Binvited</title>
        <meta name="description" content="The next best thing since Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen px-9 gap-9 bg-gradient-to-b from-secondary-purple-3 to-secondary-purple-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-primary-text-purple-dark text-4xl font-bold text-center">
            Imagine if
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-envited-purple to-primary-envited-pink">
              Snapchat
            </span>
            <br />
            had events.
          </h1>
          <p className="font-light text-center">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <img
          src="/app.svg"
          className="w-40"
          alt="Screenshot of the Binvited app"
        />

        <button className="px-5 py-4 font-bold text-white bg-gradient-to-r from-primary-envited-purple to-primary-envited-pink rounded-xl hover:brightness-105 transition-all">
          🎉 Create my event
        </button>
      </main>
    </div>
  );
};

export default Home;
