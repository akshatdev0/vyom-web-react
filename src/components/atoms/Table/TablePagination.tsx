import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

type Props = {
  pageCount?: number | undefined;
};

const TablePagination: React.FunctionComponent<Props> = ({ pageCount }: Props) => {
  const classes = useTableStyles();
  return (
    <>
      <CardActions classes={{ root: classes.cardActionsRoot }}>
        <MuiPagination count={pageCount} defaultPage={1} boundaryCount={2} color="primary" variant="outlined" />
      </CardActions>
    </>
  );
};

export default TablePagination;
