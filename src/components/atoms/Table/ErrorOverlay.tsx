import React from 'react';

import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import { createStyles, makeStyles } from '@material-ui/styles';

import TableOverlay from './TableOverlay';

type Props = {
  message?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: 'column',
    },
    icon: {
      width: '60px',
      height: '60px',
    },
    label: {
      marginTop: theme.spacing(1),
      fontSize: '16px',
    },
  }),
);

const ErrorOverlay: React.FunctionComponent<Props> = ({ message }: Props) => {
  const classes = useStyles();

  return (
    <TableOverlay className={classes.root}>
      <BugReportTwoToneIcon className={classes.icon} color="error" />
      <Typography color="error" className={classes.label}>
        {message || 'Something went wrong!'}
      </Typography>
    </TableOverlay>
  );
};

export default ErrorOverlay;
