import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import TableOverlay from './TableOverlay';

const LoadingOverlay: React.FunctionComponent = () => {
  return (
    <TableOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </TableOverlay>
  );
};

export default LoadingOverlay;
