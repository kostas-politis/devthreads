'use client';

import ROUTES from '@/constants/routes';
import { signIn } from 'next-auth/react';

type Provider = 'github' | 'google';

export default function SocialAuth() {
  const onSignIn = async (provider: Provider) => {
    try {
      await signIn(provider, { redirectTo: ROUTES.HOME });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'An error occured during authentication';

      console.log(message);
    }
  };

  return (
    <div>
      <button onClick={() => onSignIn('github')}>Sign in with GitHub</button>
      <br />
      <button onClick={() => onSignIn('google')}>Sign in with Google</button>
    </div>
  );
}
