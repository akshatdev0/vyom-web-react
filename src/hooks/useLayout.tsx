import { useLocation } from 'react-router-dom';
import { Layouts } from 'layouts';
import { Layout } from 'core/layout';

const useLayout = (): Layout => {
  const location = useLocation();

  const layouts = Layouts as Record<string, Layout>;
  for (const key of Object.keys(layouts)) {
    const layout = layouts[key];
    if (location.pathname.startsWith(layout.path)) {
      return layout;
    }
  }

  return Layouts.UNKNOWN;
};

export default useLayout;
