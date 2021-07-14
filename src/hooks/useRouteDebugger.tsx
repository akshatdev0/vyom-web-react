import { useEffect } from 'react';

import { useHistory } from 'react-router';

const useRouteDebugger = (): void => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const history = useHistory();

    useEffect(() => {
      console.log(`[DEBUG] Router: Initially navigte to '${history?.location?.pathname}'`);
      return history.listen((location, action) => {
        console.log(`[DEBUG] Router: '${action}', '${location.pathname}'`);
      });
    }, [history]);
  }
};

export default useRouteDebugger;
