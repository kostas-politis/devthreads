'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { buttonVariants } from '../ui/button';
import ThemeImage from '../ThemeImage';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

export default function MobileSidebar({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {!isOpen && (
        <SheetTrigger>
          <ThemeImage
            srcLight='images/sidebar-open-black.svg'
            srcDark='images/sidebar-open-white.svg'
            alt='Open Sidebar'
            width={24}
            height={24}
          />
        </SheetTrigger>
      )}
      {isOpen && (
        <SheetClose>
          <ThemeImage
            srcLight='images/sidebar-close-black.svg'
            srcDark='images/sidebar-close-white.svg'
            alt='Close Sidebar'
            width={24}
            height={24}
          />
        </SheetClose>
      )}
      <SheetContent
        side='left'
        hasCloseBtn={false}
        className='bg-light-900 dark:bg-dark-200 mt-auto h-[calc(100vh-53px)] w-[260px] min-w-[260px] px-[21px] pt-[53px] pb-[26px]'
      >
        <SheetHeader className='p-0'>
          <SheetTitle className='hidden'>Mobile Sidebar</SheetTitle>
          {children}
        </SheetHeader>
        <SheetFooter className='p-0'>
          <Link
            href={ROUTES.SIGN_IN}
            className={buttonVariants({
              variant: 'secondary',
              size: 'sm',
            })}
          >
            <span className='text-accent-gradient'>Signin</span>
          </Link>
          <Link
            href={ROUTES.SIGN_UP}
            className={buttonVariants({
              variant: 'tertiary',
              size: 'sm',
            })}
          >
            Signup
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
