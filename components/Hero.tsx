import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, IconButton } from './Button';

export const Hero = () => {
  return (
    <>
      <div
        className="relative h-[458px] w-full bg-red-500/20
    sm:h-[450px] md:h-[450px]"
      >
        <Image
          src="/../public/corparate.jpg"
          layout="fill"
          alt="corparate"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="mx-auto max-w-screen-lg">
            <div className="m-6 min-h-[60px] ">
              <HeroInnerBanner />
            </div>
          </div>
          <div className="mx-4 mt-16 flex flex-col items-center text-center">
            <h1
              className="text-3xl font-extrabold uppercase
             tracking-wide text-white
             sm:text-4xl md:text-5xl lg:text-6xl
             "
            >
              discover your future
            </h1>
            <span
              className="text-xl text-white
            sm:text-2xl
            "
            >
              find your next job
            </span>
            <div className="mt-8">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  );
};

const HeroInnerBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Transition
      show={showBanner}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-white shadow-lg md:rounded-full">
        <p>
          Welcome to <span className="font-bold">ZhukOFF</span>. An easier and
          faster job discovery platform.
        </p>
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
      </div>
    </Transition>
  );
};

const itemsProfission = ['web designer', 'software engineer', 'salesman', 'tiktok maker'];

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (!isDirty) {
        const value =
          itemsProfission[
            index >= itemsProfission.length ? (index = 0) : index
          ];
        setQuery(value);
        index++;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDirty]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="group">
        <div
          className="
          flex 
          items-center
          overflow-hidden
          rounded-full
         
          bg-white shadow-md group-focus-within:ring-2 group-focus-within:ring-indigo-400 group-focus-within:ring-offset-2
group-focus-within:ring-offset-transparent"
        >
          <span
            className="pointer-events-none 
          block
          px-2 text-slate-400 group-hover:text-indigo-800 group-focus:text-indigo-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            aria-label="search"
            placeholder="Job Title..."
            className="w-full appearance-none  border-transparent p-2 text-xl
          leading-6 text-slate-900
          ring-0  placeholder:text-slate-400 focus:border-transparent focus:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={() => {
              if (!isDirty) {
                setIsDirty(true);
                setQuery('');
              }
            }}
          />
          <button
            className="hidden h-11 shrink-0 bg-indigo-600
          px-2 font-semibold text-white transition-colors duration-500
          ease-in-out hover:bg-indigo-700 sm:block"
            type="submit"
          >
            Discover Now
          </button>
        </div>
        <Button size="lg" type="submit" className="mt-8 sm:hidden">
          Discover Now
        </Button>
      </form>
    </>
  );
};

const HeroBottomCard = () => {
  return (
    <div className="bg-neutral-900 p-4">
      <span className="block text-center text-lg text-white">
        No time to look gor jobs? Drop your resume with{` `}
        <span
          className="inline-block font-middle bg-gradient-to-r from-fuchsia-800
     via-purple-600 to-indigo-800 bg-clip-text align-baseline font-black
     tracking-widest text-transparent"
        >
          Zhukoff-Resume
        </span>
        {` `}
        headhunters here.
      </span>
    </div>
  );
};
