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
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { cn } from '@/lib/utils';
import OpenSidabarSvg from '@/svg/sidebar-open.svg';
import CloseSidabarSvg from '@/svg/sidebar-close.svg';

export default function MobileSidebar({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex md:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className={cn(isOpen && 'hidden')}>
          <OpenSidabarSvg className='text-dark-200 dark:text-light-700' />
        </SheetTrigger>
        <SheetClose className={cn(!isOpen && 'hidden')}>
          <CloseSidabarSvg className='text-dark-200 dark:text-light-700' />
        </SheetClose>
        <SheetContent
          side='left'
          hasCloseBtn={false}
          className='bg-light-900 dark:bg-dark-200 shadow-light-200 mt-auto h-[calc(100vh-53px)] w-[260px] min-w-[260px] px-[21px] pt-[53px] pb-[26px]'
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
    </div>
  );
}
