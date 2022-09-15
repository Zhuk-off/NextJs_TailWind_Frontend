import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FeaturedJobs } from '../components/FeaturedJobs';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { TopCompanies } from '../components/TopCompanies';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Hero />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <FeaturedJobs />
          <TopCompanies/>
        </div>
      </main>

     <Footer/>
    </>
  );
};

export default Home;
