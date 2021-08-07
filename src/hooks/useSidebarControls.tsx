import { useState } from 'react';

const useSidebarControls = (initialState: boolean): readonly [boolean, () => void, () => void, () => void] => {
  const [sidebarOpen, setSidebarOpen] = useState(initialState);

  // toggles collapse between mini and normal
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // closes
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // opens
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  return [sidebarOpen, openSidebar, closeSidebar, toggleSidebar] as const;
};

export default useSidebarControls;
