import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

type Props = {
  pageIndex: number | undefined;
  pageCount?: number | undefined;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
};

const TablePagination: React.FunctionComponent<Props> = ({ pageIndex, pageCount, gotoPage }: Props) => {
  const classes = useTableStyles();

  const onChange = (_event: React.ChangeEvent<unknown>, page: number) => gotoPage(page - 1);

  return (
    <>
      <CardActions classes={{ root: classes.cardActionsRoot }}>
        <MuiPagination
          count={pageCount}
          page={pageIndex !== undefined ? pageIndex + 1 : 1}
          boundaryCount={2}
          color="primary"
          variant="outlined"
          onChange={onChange}
        />
      </CardActions>
    </>
  );
};

export default TablePagination;
