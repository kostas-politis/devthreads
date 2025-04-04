import LeftSidebar from '@/components/navigation/left-sidebar/LeftSidebar';
import Navbar from '@/components/navigation/Navbar';
import { LeftSidebarProvider } from '@/components/navigation/left-sidebar/LeftSidebarContext';
import NavLinks from '@/components/navigation/left-sidebar/NavLinks';
import NavAuth from '@/components/navigation/left-sidebar/NavAuth';
import RightSidebar from '@/components/navigation/RightSidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <LeftSidebarProvider>
        <Navbar className='sticky top-0 z-50 col-span-2 h-[53px] lg:h-[100px]' />
        <LeftSidebar className='fixed top-[53px] z-40 h-[calc(100vh-53px)] self-start lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)]'>
          <NavLinks />
          <NavAuth />
        </LeftSidebar>
      </LeftSidebarProvider>
      <div className='col-span-2 flex lg:col-span-1'>
        <section className='relative w-full p-8'>{children}</section>
        <RightSidebar className='hidden shrink-0 xl:block' />
      </div>
    </main>
  );
}
