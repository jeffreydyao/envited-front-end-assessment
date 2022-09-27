import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Create: NextPage = () => {
  const [name, setName] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [host, setHost] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [imageURL, setImageURL] = useState<string>();

  useEffect(() => {
    console.log(startDate, endDate, host, location);
  }, [startDate, endDate, host, location]);

  return (
    <Layout
      title="New Event | Bnvited"
      description="Create a new event with Binvited"
    >
      <div className="bg-[#DFD6F3] w-screen h-screen">
        {!imageURL ? (
          <input
            type="file"
            onChange={(e) => {
              setImageURL(URL.createObjectURL(e.target.files[0]));
            }}
            className="absolute top-6"
          />
        ) : (
          <img
            src={imageURL}
            className="object-cover absolute top-0 w-screen"
          />
        )}

        <div className="px-6 py-8 flex flex-col gap-12 absolute bottom-0 h-max bg-[#F8F5FF] rounded-t-3xl">
          <div className="w-full h-fit flex items-center gap-6">
            <div className="h-[54px] w-[54px] text-3xl rounded-xl bg-gradient-to-b from-primary-envited-purple to-primary-envited-pink flex items-center justify-center">
              🦄
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-medium text-[#BDA4F4]">New Event</span>
              <input
                type="text"
                className="text-bold text-primary-text-purple-dark text-3xl bg-transparent"
                placeholder="Event name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
              <label className="text-sm text-medium text-primary-text-purple-light">
                starts
              </label>
              <input
                type="datetime-local"
                className="bg-transparent text-medium text-primary-text-purple-dark"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
              <label className="text-sm text-medium text-primary-text-purple-light">
                ends
              </label>
              <input
                type="datetime-local"
                className="bg-transparent text-medium text-primary-text-purple-dark"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
              <label className="text-sm text-medium text-primary-text-purple-light">
                hosted by
              </label>
              <input
                type="text"
                className="bg-transparent text-medium text-primary-text-purple-dark"
                placeholder="corn kid"
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
            <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
              <label className="text-sm text-medium text-primary-text-purple-light">
                at
              </label>
              <input
                type="text"
                className="bg-transparent text-medium text-primary-text-purple-dark"
                placeholder="my crib"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Link
              href={{
                pathname: "/event",
                query: {
                  name: name,
                  start: startDate,
                  end: endDate,
                  host: host,
                  location: location,
                  image: imageURL,
                },
              }}
              passHref
            >
              <Button label="Next →" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Create;
