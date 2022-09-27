import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Layout from "../components/Layout";
import EventDetail from "../components/EventDetail";

interface EventData {
  name: string;
  start: string;
  end: string;
  host: string;
  location: string;
  image: string;
}

const Event: NextPage = () => {
  const router = useRouter();
  const data: EventData = router.query;

  const getReadableDate = (date: string) => dayjs(date).format("D MMMM h:m A");

  console.log(data);

  return (
    <Layout title={data.name} description={`${getReadableDate(data.start)} | Hosted by ${data.host}`}>
      <main className="block bg-[#FBFAFF]">
        {data.image ? (
          <img src={data.image} className="object-cover w-full aspect-square" />
        ) : (
          <img src="/cake.png" className="w-full aspect-square" />
        )}

        <div className="flex flex-col px-5 py-3 gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl text-primary-text-purple-dark">{data.name}</h1>
            <h2 className="text-[#828282]">
              Hosted by <span className="font-bold">{data.host}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <EventDetail
              iconSrc="/calendar.svg"
              label={getReadableDate(data.start)}
              children={
                <p className="text-[#4F4F4F] text-sm">
                  to <span className="font-bold">{getReadableDate(data.end)}</span> UTC +10
                </p>
              }
            />
            <EventDetail
              iconSrc="/location.svg"
              label={data.location ? data.location : "No location provided"}
              caption="Suburb, state, postcode"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Event;
