import { signOut } from '@/auth';
import ROUTES from '@/constants/routes';
import React from 'react';

export default function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: ROUTES.SIGN_IN });
      }}
    >
      <button type='submit'>Sign Out</button>
    </form>
  );
}
