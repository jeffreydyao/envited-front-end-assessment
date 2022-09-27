import { NextPage } from "next";
import Head from "next/head";

const Create: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Event - Binvited</title>
        <meta name="description" content="The next best thing since Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="px-6 py-8 flex flex-col">
          <div className="w-full h-fit flex items-center gap-6">
            <div className="h-[48px] w-[48px] rounded-xl bg-gradient-to-b from-primary-envited-purple to-primary-envited-pink" />
            <div className="flex flex-col gap-2">
              <span className="text-medium text-[#BDA4F4]">New Event</span>
              <h1 className="text-bold text-primary-text-purple-dark text-3xl">
                Event name
              </h1>
            </div>
          </div>
          <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
            <label className="text-sm text-medium text-primary-text-purple-light">
              starts
            </label>
            <input
              type="datetime-local"
              className="bg-transparent text-medium text-primary-text-purple-dark"
            />
          </div>
          <div className="w-full px-4 items-center py-3 bg-[#F1EDF9] flex justify-between rounded-xl">
            <label className="text-sm text-medium text-primary-text-purple-light">
              ends
            </label>
            <input
              type="datetime-local"
              className="bg-transparent text-medium text-primary-text-purple-dark"
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
            />
          </div>
        </div>

        <div className="aspect-[3/2] w-full bg-slate-50" />

        <input type="file" />
      </main>
    </div>
  );
};
export default Create;
