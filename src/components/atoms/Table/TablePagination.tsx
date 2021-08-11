import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

const TablePagination: React.FunctionComponent = () => {
  const classes = useTableStyles();
  return (
    <>
      <CardActions classes={{ root: classes.cardActionsRoot }}>
        <MuiPagination count={11} defaultPage={6} boundaryCount={2} color="primary" variant="outlined" />
      </CardActions>
    </>
  );
};

export default TablePagination;
