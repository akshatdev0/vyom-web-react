import React from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      marginTop: '30px',
      marginBottom: '15px',
      marginLeft: 0,
      width: 'calc(100% - 15px)',
    },
    overlineRoot: {
      fontSize: '.675rem!important',
      color: theme.palette.gray[800] + '!important',
      display: 'block',
      marginTop: '-0.25rem',
    },
    typographyRootH6: {
      fontSize: '.875rem!important',
      color: theme.palette.gray[600] + '!important',
      fontWeight: 400,
      marginTop: '-0.25rem',
      marginBottom: 0,
    },
    containerRoot: {
      marginLeft: '0',
      width: 'calc(100% - 15px)',
    },
  }),
);

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index} divider>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

function VirtualizedList() {
  return (
    <div>
      <FixedSizeList height={650} width="auto" itemSize={46} itemCount={200}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

const SelectVertical = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Grid container alignItems="center" classes={{ root: classes.searchBar }}>
        <Grid item md={4}>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={['A', 'B', 'C']}
            freeSolo
            renderInput={(params) => <OutlinedInput {...params} placeholder="Free solo with text demo" />}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="overline" classes={{ root: classes.overlineRoot }}>
            Vertical
          </Typography>
          <Typography variant="h6" classes={{ root: classes.typographyRootH6 }}>
            {'/some/product/path'}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" classes={{ root: classes.containerRoot }}>
        <Grid item md={3} lg={2}>
          <Paper elevation={2}>
            <VirtualizedList />
          </Paper>
        </Grid>
        <Grid item md={3} lg={2}>
          <Paper elevation={2}>
            <VirtualizedList />
          </Paper>
        </Grid>
        <Grid item md={3} lg={2}>
          <Paper elevation={2}>
            <VirtualizedList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SelectVertical;
