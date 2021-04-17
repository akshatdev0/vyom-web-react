import { useState, useEffect } from 'react';

const toggleClasses = (sidebarOpen: boolean) => {
  if (sidebarOpen) {
    document.body.classList.add('g-sidenav-pinned');
    document.body.classList.remove('g-sidenav-hidden');
  } else {
    document.body.classList.remove('g-sidenav-pinned');
    document.body.classList.add('g-sidenav-hidden');
  }
};

const useToggleSidebar = (initialState: boolean): readonly [boolean, () => void] => {
  const [sidebarOpen, setSidebarOpen] = useState(initialState);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('g-sidenav-show');
    } else {
      document.body.classList.remove('g-sidenav-show');
    }
    toggleClasses(sidebarOpen);
  }, []);

  // toggles collapse between mini and normal
  const toggleSidebar = () => {
    toggleClasses(!sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return [sidebarOpen, toggleSidebar] as const;
};

export default useToggleSidebar;
