export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
    // <main className='flex min-h-screen items-center justify-center'>
    //   <section className='dark:bg-dark-200 dark:border-dark-100 min-w-full rounded-[10px] border px-8 py-10 sm:min-w-[520px]'>
    //     <div className='flex items-center justify-between'>
    //       <div className='space-y-2.5'>
    //         <h2 className='h2-bold'>Sign In</h2>
    //         <p className='paragraph-regular dark:text-light-400'>
    //           to continue to DevThreads
    //         </p>
    //       </div>
    //       <Image
    //         src='images/site-logo.svg'
    //         width={50}
    //         height={50}
    //         alt='DevThreads Logo'
    //       />
    //     </div>
    //     <div className='mt-10 flex flex-wrap gap-2.5'>
    //       <button className='dark:bg-dark-400 dark:text-light-800 body-medium flex flex-1 cursor-pointer items-center justify-center gap-x-[10px] rounded-[8px] px-4 py-3.5'>
    //         <Image
    //           src='images/github-icon.svg'
    //           width={20}
    //           height={20}
    //           alt='GitHub Logo'
    //           className='invert dark:invert-0'
    //         />
    //         <span>Login with GitHub</span>
    //       </button>
    //       <button className='dark:bg-dark-400 dark:text-light-800 rounded-2 flex-[8px] px-4 py-3.5'>
    //         {/* <Image
    //           src='images/github-icon.svg'
    //           width={20}
    //           height={20}
    //           alt='GitHub Logo'
    //           className='invert dark:invert-0'
    //         /> */}
    //         <span>Some text</span>
    //       </button>
    //     </div>
    //     {children}
    //   </section>
    // </main>
  );
}
