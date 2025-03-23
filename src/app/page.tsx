import SignOut from '@/components/auth/SignOut';
import { ThemeTogle } from '@/components/ThemeToggle';
import UserAvatar from '@/components/auth/UserAvatar';

export default function Home() {
  return (
    <div>
      <ThemeTogle />
      <UserAvatar />
      <SignOut />
    </div>
  );
}
