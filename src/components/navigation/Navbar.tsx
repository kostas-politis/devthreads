import ThemeTogle from './ThemeToggle';
import SiteLogo from './SiteLogo';
import UserAvatar from './UserAvatar';
import { cn } from '@/lib/utils';
import SidebarToggle from './left-sidebar/LeftSidebarToggle';

export default function Navbar({ className }: { className: string }) {
  return (
    <nav
      className={cn(
        'bg-light-900 text-dark-200 dark:bg-dark-200 dark:text-light-700 shadow-light-100 flex items-center justify-between px-[21px] dark:shadow-none',
        className,
      )}
    >
      <SiteLogo />
      <div className='flex items-center gap-[10px]'>
        <ThemeTogle />
        <UserAvatar />
        <SidebarToggle />
      </div>
    </nav>
  );
}
