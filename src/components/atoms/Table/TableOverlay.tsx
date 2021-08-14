import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import tableComponentStyles from 'assets/theme/components/cards/tables/card-light-table-tables';

const useTableStyles = makeStyles(tableComponentStyles);

export type TableOverlayProps = React.HTMLAttributes<HTMLDivElement>;

const TableOverlay: React.FunctionComponent<TableOverlayProps> = (props: TableOverlayProps) => {
  const classes = useTableStyles();
  const { className, style, ...other } = props;

  return <div className={classnames(classes.tableOverlay, className)} style={style} {...other} />;
};

export default TableOverlay;
