import { useEffect, useRef, RefObject } from 'react';

import { useLocation } from 'react-router-dom';

const useScrollTop = (): RefObject<HTMLDivElement> => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (ref && ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [location]);

  return ref;
};

export default useScrollTop;
