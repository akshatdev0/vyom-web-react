import React, { CSSProperties } from 'react';

import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, styled, withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableContainer from '@material-ui/core/TableContainer';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import MuiTooltip from '@material-ui/core/Tooltip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  CellProps,
  Row,
  TableBodyProps,
  TableCellProps,
  TableGroupByToggleProps,
  TableHeaderGroupProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
  TableSortByToggleProps,
} from 'react-table';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

type CN = { children: React.ReactNode };

type TableHeadCellContentProps = CN & {
  canGroupBy: boolean;
  canSortBy: boolean;
  isGrouped: boolean;
  isSorted: boolean;
  isSortedDescending: boolean | undefined;
  align?: string;
  groupByToggleProps?: TableGroupByToggleProps;
  sortByToggleProps?: TableSortByToggleProps;
};

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate;

export const TableContainer: React.FunctionComponent<CN> = ({ children }: CN) => {
  const classes = useTableStyles();
  return <MuiTableContainer classes={{ root: classes.tableContainerRoot }}>{children}</MuiTableContainer>;
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

const Tooltip = withStyles({
  tooltip: {
    fontSize: '0.725rem',
  },
})(MuiTooltip);

export const TableHeadCellContent: React.FunctionComponent<TableHeadCellContentProps> = ({
  children,
  canGroupBy,
  canSortBy,
  isGrouped,
  isSorted,
  isSortedDescending,
  align = 'left',
  groupByToggleProps = {},
  sortByToggleProps = {},
}: TableHeadCellContentProps) => {
  const classes = useTableStyles();
  const { title: groupByTitle = '', ...restGroupByToggleProps } = groupByToggleProps;
  const { title: sortByTitle = '', ...restSortByToggleProps } = sortByToggleProps;
  return (
    <>
      {canGroupBy && (
        <Tooltip arrow title={groupByTitle} placement="left">
          <MuiTableSortLabel
            className={classes.headerIcon}
            active
            direction={isGrouped ? 'desc' : 'asc'}
            IconComponent={KeyboardArrowRight}
            {...restGroupByToggleProps}
          />
        </Tooltip>
      )}
      {canSortBy ? (
        <Tooltip arrow title={sortByTitle} placement="top">
          <MuiTableSortLabel
            className={classes.tableSortLabel}
            style={{ textAlign: align } as CSSProperties}
            active={isSorted}
            direction={isSortedDescending ? 'desc' : 'asc'}
            {...restSortByToggleProps}
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

export const TableExpanderCell = <D extends Record<string, unknown>>({
  canExpand,
  ...rest
}: CellProps<D> & {
  canExpand: (props: Row<D>) => boolean | undefined;
}): JSX.Element => {
  const classes = useTableStyles();
  const { row, value } = rest;
  return canExpand(row) || false ? (
    <Box className={classes.expanderIcon} {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      {value}
    </Box>
  ) : (
    <Box>{value}</Box>
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
