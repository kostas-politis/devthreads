import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900",
  {
    variants: {
      variant: {
        primary: 'bg-accent-gradient text-light-900',
        secondary:
          'bg-light-800 dark:bg-dark-400 text-light-400 dark:text-light-500',
        tertiary:
          'bg-light-700 dark:bg-dark-300 text-dark-400 dark:text-light-900',
        ghost: 'text-dark-300 dark:text-light-700 paragraph-medium',
        destructive:
          'bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60 dark:bg-red-900 dark:hover:bg-red-900/90 dark:focus-visible:ring-red-900/20 dark:dark:focus-visible:ring-red-900/40 dark:dark:bg-red-900/60',
      },
      size: {
        sm: 'small-semibold p-[12px]',
        md: 'paragraph-semibolt py-[12px] px-[16px]',
        lg: 'base-bold rounded-md p-[16px]',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'none',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
