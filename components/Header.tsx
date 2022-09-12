import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Button, IconButton } from './Button';
import { Logo } from './Logo';
// import { MyThemeToggle } from './MyThemeToggle';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header
      className="sticky inset-x-0 top-0 z-20 flex items-center
  justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8"
    >
      <div className="flex grow-0 basis-1/3 justify-start md:hidden">
        Menu Btn
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