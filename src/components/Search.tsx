'use client';

import { Input } from './ui/input';
import MagnifierSvg from '@/svg/magnifier.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { debounce } from '@/lib/utils';
import { useCallback } from 'react';

export default function Search() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    }, 300),
    [pathname, replace, searchParams],
  );

  return (
    <div className='relative'>
      <MagnifierSvg className='text-light-400 dark:text-light-500 pointer-events-none absolute top-1/2 left-4 size-6 -translate-y-1/2' />
      <Input
        type='search'
        placeholder='Search for Questions Here...'
        defaultValue={searchParams.get('query') || ''}
        className='placeholder:paragraph-regular bg-light-800 placeholder:text-light-400 dark:placeholder:text-light-500 dark:bg-dark-gradient border-light-700 h-14 border pl-14 shadow-none outline-none dark:border-none'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
