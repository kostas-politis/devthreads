'use client';

import ROUTES from '@/constants/routes';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import HomeSvg from '@/svg/home.svg';
import StartSvg from '@/svg/star.svg';
import BriefcaseSvg from '@/svg/briefcase.svg';
import TagSvg from '@/svg/tag.svg';
import PeopleSvg from '@/svg/people.svg';
import QuestionSvg from '@/svg/question.svg';

const links = [
  {
    route: ROUTES.HOME,
    text: 'Home',
    image: HomeSvg,
  },
  {
    route: ROUTES.COLLECTIONS,
    text: 'Collections',
    image: StartSvg,
  },
  {
    route: ROUTES.JOBS,
    text: 'Find Jobs',
    image: BriefcaseSvg,
  },
  {
    route: ROUTES.TAGS,
    text: 'Tags',
    image: TagSvg,
  },
  {
    route: ROUTES.COMMUNITIES,
    text: 'Communities',
    image: PeopleSvg,
  },
  {
    route: ROUTES.ASK_QUESTION,
    text: 'Ask a Question',
    image: QuestionSvg,
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
            <Link
              href={link.route}
              className={cn(variant, 'w-full justify-start gap-[16px]')}
            >
              <link.image className='size-[24px]'></link.image>
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
