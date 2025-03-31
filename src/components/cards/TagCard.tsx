import ROUTES from '@/constants/routes';
import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';

export default function TagCard({ name }: { name: string }) {
  return (
    <Link href={ROUTES.TAG(name)}>
      <Badge className='subtle-medium bg-light-800 dark:bg-dark-300 text-light-400 dark:text-light-500 rounded-md border-none px-4 py-2 uppercase'>
        {name}
      </Badge>
    </Link>
  );
}
