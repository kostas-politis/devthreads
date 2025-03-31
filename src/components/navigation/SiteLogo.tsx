import ROUTES from '@/constants/routes';
import Link from 'next/link';
import SiteLogoSvg from '@/svg/site-logo.svg';

export default function SiteLogo() {
  return (
    <Link
      href={ROUTES.HOME}
      className='font-secondary flex items-center gap-[4.7px]'
    >
      <SiteLogoSvg className='size-[20px] lg:size-[32px]' />
      <div className='text-[16px] font-medium lg:text-[24.85px]'>
        Dev<span className='text-accent font-bold'>Threads</span>
      </div>
    </Link>
  );
}
