import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Button, IconButton } from './Button';
import { Logo } from './Logo';
// import { MyThemeToggle } from './MyThemeToggle';
import { ThemeSelect, ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header
      className="sticky inset-x-0 top-0 z-20 flex items-center
  justify-between bg-white py-2 px-2 shadow-lg dark:bg-gray-900 sm:py-3 sm:px-8"
    >
      <div className="flex grow-0 basis-1/3 justify-start md:hidden">
        <MenuPopOver />
      </div>
      <div className="flex grow-0 basis-1/3 justify-center md:justify-start">
        <Link href={'/#'}>
          <a className="my-auto flex w-[160px] md:ml-0">
            <Logo />
          </a>
        </Link>
        <div className="hidden gap-2  md:flex">
          <Link href={'/#'} passHref>
            <Button as="a" variant="ghost" className="hidden md:inline-flex ">
              Companies
            </Button>
          </Link>
          <Link href={'/#'} passHref>
            <Button as="a" variant="ghost" className="hidden md:inline-flex ">
              Jobs
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative flex grow-0 basis-1/3 justify-end gap-2">
        <Link href={'/#'} passHref>
          <Button as="a" variant="outline" className="hidden md:inline-flex ">
            For Employers
          </Button>
        </Link>
        <Button className="hidden md:inline-flex">sing In</Button>
        <ThemeToggle />
      </div>
    </header>
  );
};

const MenuPopOver = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <IconButton
        variant="ghost"
        aria-label="menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog as="div" className={'fixed inset-0 z-50'} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-uot dureation-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opadity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <Dialog.Panel
            className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl
        bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <Link href={'/#'}>
              <a className="mx-auto mt-4 flex w-[160px]">
                <Logo />
              </a>
            </Link>
            <ul className="mt-8 space-y-3">
              <li
                className="group relative flex h-9 items-center overflow-hidden
            rounded-md hover:bg-slate-200/50"
              >
                <span
                  className="absolute h-full w-2 bg-indigo-700 opacity-0
              transition-all group-hover:opacity-100"
                ></span>
                <Link href={'/#'}>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Companies
                  </a>
                </Link>
              </li>
              <li
                className="group relative flex h-9 items-center overflow-hidden
            rounded-md hover:bg-slate-200/50"
              >
                <span
                  className="absolute h-full w-2 bg-indigo-700 opacity-0
              transition-all group-hover:opacity-100"
                ></span>
                <Link href={'/#'}>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Jobs
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
              <ThemeSelect />
            </div>
            <ul className="mt-8 space-y-3 border-t border-gray-200 dark:border-gray-200/10">
              <li>
                <Button fullWidth>Sing In</Button>
              </li>
              <li>
                <Button fullWidth variant="outline">
                  For Employers
                </Button>
              </li>
            </ul>
            <IconButton
              className="absolute top-5 right-5"
              aria-label="close menu"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <svg
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};
