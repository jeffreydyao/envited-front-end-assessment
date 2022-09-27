import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import dayjs from "dayjs";

interface EventData {
  start: string;
  end: string;
  host: string;
  location: string;
}

const Event: NextPage = () => {
  const router = useRouter();
  const data: EventData = router.query;

  console.log(data);

  return (
    <div>
      <Head>
        <title>Event - Binvited</title>
        <meta name="description" content="The next best thing since Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen px-9 gap-9 bg-gradient-to-b from-secondary-purple-3 to-secondary-purple-2">
        <div className="w-full aspect-square" />
        <div>
          <h1>Birthday Bash</h1>
          <p>Hosted by {data.host}</p>

          <p>{dayjs(data.start).format("D MMMM h:m A")}</p>
          <p>to {dayjs(data.end).format("D MMMM h:m A")} UTC +10</p>
        </div>
      </main>
    </div>
  );
};

export default Event;
