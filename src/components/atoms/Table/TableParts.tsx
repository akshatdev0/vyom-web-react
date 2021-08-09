import React, { CSSProperties } from 'react';

import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, styled } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableContainer from '@material-ui/core/TableContainer';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  TableBodyProps,
  TableCellProps,
  TableHeaderGroupProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

type CN = { children: React.ReactNode };

type TableHeadCellContentProps = CN & {
  canGroupBy: boolean;
  canSortBy: boolean;
  groupByTitle?: string;
  sortByTitle?: string;
  isGrouped: boolean;
  isSorted: boolean;
  isSortedDescending: boolean | undefined;
  align?: string;
};

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate;

export const TableContainer: React.FunctionComponent<CN> = ({ children }: CN) => {
  return <MuiTableContainer>{children}</MuiTableContainer>;
};

export const TableElement: React.FunctionComponent<TableProps & CN> = ({ children, ...rest }: TableProps & CN) => {
  return (
    <Box component={MuiTable} {...rest} alignItems="center" marginBottom="0!important">
      {children}
    </Box>
  );
};

export const TableHead: React.FunctionComponent<CN> = ({ children }: CN) => {
  return <MuiTableHead>{children}</MuiTableHead>;
};

export const TableHeadRow: React.FunctionComponent<TableHeaderGroupProps & CN> = ({
  children,
  ...rest
}: TableHeaderGroupProps & CN) => {
  return <MuiTableRow {...rest}>{children}</MuiTableRow>;
};

export const TableHeadCell: React.FunctionComponent<TableHeaderProps & CN> = ({
  children,
  ...rest
}: TableHeaderProps & CN) => {
  const classes = useTableStyles();
  return (
    <MuiTableCell
      classes={{
        root: classes.tableCellRoot + ' ' + classes.tableCellRootHead,
      }}
      {...rest}
    >
      {children}
    </MuiTableCell>
  );
};

export const TableBody: React.FunctionComponent<TableBodyProps & CN> = ({ children, ...rest }: TableBodyProps & CN) => {
  return <MuiTableBody {...rest}>{children}</MuiTableBody>;
};

export const TableRow: React.FunctionComponent<TableRowProps & CN> = ({ children, ...rest }: TableRowProps & CN) => {
  return <MuiTableRow {...rest}>{children}</MuiTableRow>;
};

export const TableCell: React.FunctionComponent<TableCellProps & CN> = ({ children, ...rest }: TableCellProps & CN) => {
  const classes = useTableStyles();
  return (
    <MuiTableCell
      classes={{
        root: classes.tableCellRoot + ' ' + classes.tableCellRootBodyHead,
      }}
      {...rest}
    >
      {children}
    </MuiTableCell>
  );
};

export const TableHeadCellContent: React.FunctionComponent<TableHeadCellContentProps> = ({
  children,
  canGroupBy,
  canSortBy,
  groupByTitle = '',
  sortByTitle = '',
  isGrouped,
  isSorted,
  isSortedDescending,
  align = 'left',
}: TableHeadCellContentProps) => {
  const classes = useTableStyles();
  return (
    <>
      {canGroupBy && (
        <Tooltip title={groupByTitle}>
          <MuiTableSortLabel
            active
            direction={isGrouped ? 'desc' : 'asc'}
            IconComponent={KeyboardArrowRight}
            className={classes.headerIcon}
          />
        </Tooltip>
      )}
      {canSortBy ? (
        <Tooltip title={sortByTitle}>
          <MuiTableSortLabel
            active={isSorted}
            direction={isSortedDescending ? 'desc' : 'asc'}
            className={classes.tableSortLabel}
            style={{ textAlign: align } as CSSProperties}
          >
            {children}
          </MuiTableSortLabel>
        </Tooltip>
      ) : (
        <div className={classes.tableLabel} style={{ textAlign: align } as CSSProperties}>
          {children}
        </div>
      )}
    </>
  );
};

export const HeaderCheckbox = React.memo(
  styled(Checkbox)({
    fontSize: '1rem',
    margin: '-8px 0 -8px -15px',
    padding: '8px 9px',
    '& svg': {
      width: '24px',
      height: '24px',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
  areEqual,
);

export const RowCheckbox = React.memo(
  styled(Checkbox)({
    fontSize: '14px',
    margin: '-9px 0 -8px -15px',
    padding: '5px 9px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& svg': {
      width: 24,
      height: 24,
    },
  }),
  areEqual,
);
