import Image from 'next/image';
import { auth } from '../../auth';
import { Button } from '../ui/button';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <Button
      variant='ghost'
      size='none'
      className='relative size-[24px] overflow-hidden rounded-full lg:size-[42px]'
    >
      <Image src={session.user.image || ''} alt='User Avatar' fill />
    </Button>
  );
}
