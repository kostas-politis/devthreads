import ROUTES from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function SiteLogo() {
  return (
    <Link
      href={ROUTES.HOME}
      className='font-secondary flex h-[20px] items-center gap-[4.7px] md:h-[32px]'
    >
      <Image
        src='images/site-logo.svg'
        alt='DevThreads'
        fill
        className='static! object-cover'
      />
      <div className='text-[16px] font-medium md:text-[24.85px]'>
        Dev<span className='text-accent font-bold'>Threads</span>
      </div>
    </Link>
  );
}
