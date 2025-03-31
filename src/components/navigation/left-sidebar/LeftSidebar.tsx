'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { useSidebar } from './LeftSidebarContext';

interface LeftSidebarProps {
  children: ReactNode;
  className?: string;
}

export default function LeftSidebar({ children, className }: LeftSidebarProps) {
  const { isOpen } = useSidebar();
  return (
    <nav
      className={cn(
        !isOpen ? 'hidden' : 'flex',
        'bg-light-900 dark:bg-dark-200 shadow-light-200 min-w-[260px] flex-col justify-between px-[21px] pt-[40px] pb-[20px] lg:flex',
        className,
      )}
    >
      {children}
    </nav>
  );
}
