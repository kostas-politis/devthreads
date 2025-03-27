import ThemeTogle from './ThemeToggle';
import SiteLogo from './SiteLogo';
import UserAvatar from './UserAvatar';
import MobileSidebar from './MobileSidebar';
import NavLinks from './NavLinks';

export default function MobileNavbar() {
  return (
    <nav className='bg-light-900 text-dark-200 dark:bg-dark-200 dark:text-light-700 shadow-light-100 flex h-[53px] items-center justify-between px-[21px] md:h-[100px] dark:shadow-none'>
      <SiteLogo />
      <div className='flex items-center gap-[10px]'>
        <ThemeTogle />
        <UserAvatar />
        <MobileSidebar>
          <NavLinks />
        </MobileSidebar>
      </div>
    </nav>
  );
}
