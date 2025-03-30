import Link from 'next/link';
import { Button, buttonVariants } from '../../ui/button';
import ROUTES from '@/constants/routes';
import { auth, signOut } from '@/auth';
import SignoutSvg from '@/svg/signout.svg';

export default async function NavAuth() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className='flex flex-col gap-[10px]'>
        <Link
          href={ROUTES.SIGN_IN}
          className={buttonVariants({
            variant: 'secondary',
            size: 'sm',
          })}
        >
          <span className='text-accent-gradient'>Signin</span>
        </Link>
        <Link
          href={ROUTES.SIGN_UP}
          className={buttonVariants({
            variant: 'tertiary',
            size: 'sm',
          })}
        >
          Signup
        </Link>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button
        type='submit'
        variant='ghost'
        size='md'
        className='cursor-pointer justify-start gap-[16px] text-left'
      >
        <SignoutSvg className='size-[24px]' />
        Sign out
      </Button>
    </form>
  );
}
