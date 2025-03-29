'use client';

import ROUTES from '@/constants/routes';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  {
    route: ROUTES.HOME,
    text: 'Home',
    image: '/images/moon.svg',
  },
  {
    route: ROUTES.COLLECTIONS,
    text: 'Collections',
    image: '/images/moon.svg',
  },
  {
    route: ROUTES.JOBS,
    text: 'Find Jobs',
    image: '/images/moon.svg',
  },
  {
    route: ROUTES.TAGS,
    text: 'Tags',
    image: '/images/moon.svg',
  },
  {
    route: ROUTES.COMMUNITIES,
    text: 'Communities',
    image: '/images/moon.svg',
  },
  {
    route: ROUTES.ASK_QUESTION,
    text: 'Ask a Question',
    image: '/images/moon.svg',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-[10px] p-0'>
      {links.map((link, index) => {
        const variant = buttonVariants({
          variant: pathname === link.route ? 'primary' : 'ghost',
          size: 'md',
        });

        return (
          <li key={index}>
            <Link href={link.route} className={cn(variant, 'block')}>
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
