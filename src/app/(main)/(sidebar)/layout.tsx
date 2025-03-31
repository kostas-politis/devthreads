import RightSidebar from '@/components/navigation/RightSidebar';

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex'>
      {children}
      <RightSidebar className='hidden shrink-0 sm:block' />
    </div>
  );
}
