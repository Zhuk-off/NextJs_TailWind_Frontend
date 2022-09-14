import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

const topCompaniesItems = [
  {
    companyName: 'Rempel and Sons',
    category: 'Media & Marketing',
    image: '/img/08.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Dietrich, Beahan and Connelly',
    category: 'Tourism',
    image: '/img/09.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Gutmann LLC',
    category: 'Oil & Gas',
    image: '/img/10.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Kerluke Group',
    category: 'Accounting',
    image: '/img/11.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Hahn LLC',
    category: 'Food & Beverage',
    image: '/img/12.jpg',
    logo: '/img/logo.jpg',
  },
  {
    companyName: 'Ziemann, Nicolas and Grady',
    category: 'Construction',
    image: '/img/04.jpg',
    logo: '/img/logo.jpg',
  },
];

export const TopCompanies = () => {
  return (
    <section id="top-companies">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Companies</h2>
        <Button variant="outline" className="hidden sm:inline-flex">
          Show All
        </Button>
      </div>
      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        id="top-companies__items"
      >
        {topCompaniesItems.map((item, i) => (
          <Link key={i} href="/#">
            <a
              className="group block overflow-hidden rounded-2xl border border-slate-200
            bg-white shadow-md transition-all duration-150 hover:-translate-y-1
            hover:shadow-lg dark:border-slate-800 dark:bg-slate-600"
            >
              <div className="relative block overflow-hidden pt-[70%]">
                <Image
                  className="overflow-hidden transition-all duration-200 group-hover:scale-[102%]"
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.companyName}
                />
              </div>
              <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
                <span
                  className="absolute -top-[65px] right-4 h-[80px] w-[80px] overflow-hidden rounded-full 
                border shadow-sm dark:border-slate-600"
                >
                  <div className="relative block overflow-hidden bg-slate-200 pt-[100%] ">
                    <Image
                      src={item.logo}
                      alt={item.companyName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </span>
                <h5 className="block truncate text-xl font-semibold capitalize">
                  {item.companyName}
                </h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  {item.category}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};
