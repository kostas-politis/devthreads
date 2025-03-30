'use client';

import { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const LeftSidebarContext = createContext<SidebarContextType | null>(null);

export const LeftSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <LeftSidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
      {children}
    </LeftSidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(LeftSidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
