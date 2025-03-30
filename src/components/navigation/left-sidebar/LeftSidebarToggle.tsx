'use client';

import { Button } from '@/components/ui/button';
import { useSidebar } from './LeftSidebarContext';
import OpenSidabarSvg from '@/svg/sidebar-open.svg';
import CloseSidabarSvg from '@/svg/sidebar-close.svg';

export default function SidebarToggle() {
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const handleClick = isOpen ? closeSidebar : openSidebar;
  const Icon = isOpen ? CloseSidabarSvg : OpenSidabarSvg;

  return (
    <Button variant='ghost' onClick={handleClick} className='md:hidden'>
      <Icon className='size-[24px]' />
    </Button>
  );
}
