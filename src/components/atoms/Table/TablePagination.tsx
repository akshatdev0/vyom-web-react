import React from 'react';

import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import MuiPagination from '@material-ui/lab/Pagination';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

type Props = {
  rowsPerPage: number;
  pageIndex: number;
  totalItems: number;
  pageCount: number;
  rowsPerPageOptions: Array<number>;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
};

const TablePagination: React.FunctionComponent<Props> = ({
  rowsPerPage,
  pageIndex,
  totalItems,
  pageCount,
  rowsPerPageOptions,
  gotoPage,
  setRowsPerPage,
}: Props) => {
  const classes = useTableStyles();
  const currentPage = pageIndex !== undefined ? pageIndex + 1 : 1;
  const firstRow = rowsPerPage * (currentPage - 1) + 1;
  const lastRow = firstRow + rowsPerPage - 1 < totalItems ? firstRow + rowsPerPage - 1 : totalItems;
  const showPageActions = pageCount !== undefined && pageCount > 1;

  const onChange = (_event: React.ChangeEvent<unknown>, page: number) => gotoPage(page - 1);

  return (
    <>
      <CardActions classes={{ root: classes.cardActionsRoot }}>
        <Box className={classes.tableFooter}>
          {rowsPerPageOptions.length > 1 && (
            <Box display="inline-block">
              <label>
                Show{' '}
                {
                  <MuiSelect
                    IconComponent={KeyboardArrowDown}
                    variant="outlined"
                    className={classes.tableFooterSelect}
                    value={rowsPerPage}
                    onChange={(event) => setRowsPerPage(event.target.value as number)}
                  >
                    {rowsPerPageOptions.map((rowsPerPageOption) => (
                      <MenuItem key={rowsPerPageOption} value={rowsPerPageOption}>
                        {rowsPerPageOption}
                      </MenuItem>
                    ))}
                  </MuiSelect>
                }{' '}
                rows.
              </label>
            </Box>
          )}
          <span>{` Showing ${firstRow}-${lastRow} of ${totalItems}`}</span>
        </Box>
        {showPageActions && (
          <MuiPagination
            count={pageCount}
            page={currentPage}
            boundaryCount={2}
            color="primary"
            variant="outlined"
            onChange={onChange}
          />
        )}
      </CardActions>
    </>
  );
};

export default TablePagination;
